<?php

namespace App\Command;

use App\Service\Helper;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;

use Symfony\Component\DependencyInjection\ContainerInterface;

class ActivecampaignAssociateLeadsCommand extends Command
{
    protected static $defaultName = 'app:activecampaign:associate-leads';
    private $container;
    private $helper;

    public function __construct(ContainerInterface $container, Helper $helper)
    {
        parent::__construct();
        $this->container = $container;
        $this->helper = $helper;
    }

    protected function configure()
    {
        $this
            ->setDescription('Add a short description for your command')
            ->addArgument('arg1', InputArgument::OPTIONAL, 'Argument description')
            ->addOption('option1', null, InputOption::VALUE_NONE, 'Option description')
        ;
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $io = new SymfonyStyle($input, $output);
        $leadsRepo = $this->container->get('doctrine')->getRepository('App:Leads');
        $leads = $leadsRepo->getLeadsHasActiveCampaignID();

        $output->writeln('Assign leads to CEP account');
        foreach($leads as $lead) {
            $data = ['accountContact' => ['contact' => $lead->getActiveCampaignId(), 'account' => 2]];

            $io->write('AC ID ' . $lead->getActiveCampaignId() . ' - ' . $lead->getEmail());
            $headers = [
                'Api-Token: 7040bcf0fc18276925e6d7b5bb1cfbc5164a01aee66c0e674acb1448a1f235c84e7e8134',
                'Content-Type: application/json'
            ];
            $response = $this->helper->createPostRequest('https://asymmetricinfoau.api-us1.com/api/3/accountContacts', $data, $headers);
            if(empty($response->message) && empty($response->errors)) {
                $io->writeln(' - SUCCESS');
            } else {
                $io->writeln(' - FAIL');
            }
            sleep(1);
        }

        return Command::SUCCESS;
    }
}
