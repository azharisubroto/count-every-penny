<?php

namespace App\Controller;

use App\Entity\Leads;
use App\Service\Helper;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\DependencyInjection\ParameterBag\ParameterBagInterface;

class DefaultController extends AbstractController
{
    /**
     * @Route("/submit", name="default", methods={"POST"})
     * @param Request $request
     * @param ParameterBagInterface $params
     * @return Response
     */
    public function index(Request $request, ParameterBagInterface $params, Helper $helper): Response
    {
        $fullname = $request->get('fullname');
        $phone = $request->get('phone');
        $email = $request->get('email');
        $postcode = $request->get('postcode');
        $age = $request->get('age');
        $lifeStage = $request->get('life_stage');
        $coverType = !empty($request->get('cover_type')) ? json_decode($request->get('cover_type'), true) : [];
        $healthFund = $request->get('health_fund');
        $state = $request->get('state');

        $doctrine = $this->getDoctrine();
        $em = $doctrine->getManager();

        $error = [];

        if(empty($fullname)) {
            $error[] = 'fullname cannot empty';
        }

        if(empty($phone)) {
            $error[] = 'phone cannot empty';
        }

        if(empty($email)) {
            $error[] = 'email cannot empty';
        }

        if(empty($postcode)) {
            $error[] = 'postcode cannot empty';
        }

        if(empty($age)) {
            $error[] = 'age cannot empty';
        }

        if(empty($lifeStage)) {
            $error[] = 'life stage cannot empty';
        }

        if(empty($healthFund)) {
            $error[] = 'health fund cannot empty';
        }

        if(empty($state)) {
            $error[] = 'state cannot empty';
        }

        if(!empty($error)) {
            return $this->json([
                'status' => 'fail',
                'error_message' => $error
            ], 500);
        }

        $nameDetail = $helper->getDetailNamePart($fullname);
        $leads = new Leads();
        $leads->setFirstName($nameDetail['first']);
        if(empty($nameDetail['middle'])) {
            $leads->setMiddleName($nameDetail['middle']);
        }
        $leads->setLastName($nameDetail['last']);
        $leads->setPhone($phone);
        $leads->setEmail($email);
        $leads->setPostcode($postcode);
        $leads->setAge($age);
        $leads->setLifeStage($lifeStage);
        $leads->setCoverType($coverType);
        $leads->setHealthFund($healthFund);
        $leads->setState($state);
        $em->persist($leads);
        $em->flush();

        $leadData = [
            'apikey' => $params->get('hic_api_key'),
            'email' => $email,
            'phone' => $phone,
            'first_name' => $nameDetail['first'],
            'last_name' => $nameDetail['last'],
            'state' => $state,
            'postcode' => $postcode,
            'life_stage' => $lifeStage,
            'health_fund' => $healthFund
        ];

        if(!empty($coverType)) {
            if(!empty($coverType['hospital']) && !empty($coverType['extras'])) {
                $leadData['cover_type'] = 'Combined';
            } else if(!empty($coverType['hospital'])) {
                $leadData['cover_type'] = 'Hospital';
            } else if(!empty($coverType['extras'])) {
                $leadData['cover_type'] = 'Extras';
            }
        } else {
            $leadData['cover_type'] = 'Combined';
        }

//        $ccLeadResult = $helper->createPostRequest('https://dev.api.alternativemedia.com.au/lead/create', $leadData);

        return $this->json([
            'status' => 'success',
            'error_message' => null
        ]);
    }
}
