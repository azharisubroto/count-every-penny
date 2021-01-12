<?php

namespace App\Controller;

use App\Entity\Leads;
use App\Entity\Utm;
use App\Service\Helper;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\DependencyInjection\ParameterBag\ParameterBagInterface;

class DefaultController extends AbstractController
{
    private $helper;

    public function __construct(Helper $helper)
    {
        $this->helper = $helper;
    }

    /**
     * @Route("/submit", name="default", methods={"POST"})
     * @param Request $request
     * @param ParameterBagInterface $params
     * @return Response
     */
    public function submit(Request $request, ParameterBagInterface $params): Response
    {
        $fullname = $request->get('fullname');
        $phone = $request->get('phone');
        $email = $request->get('email');
        $postcode = $request->get('postcode');
        $age = $request->get('age');
        $dateOfBirth = $request->get('date_of_birth');
        $lifeStage = $request->get('life_stage');
        $coverType = !empty($request->get('cover_type')) ? json_decode($request->get('cover_type'), true) : [];
        $healthFund = $request->get('health_fund');

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

        if(empty($lifeStage)) {
            $error[] = 'life stage cannot empty';
        }

        if(empty($healthFund)) {
            $error[] = 'health fund cannot empty';
        }

        if(!empty($error)) {
            return $this->json([
                'status' => 'fail',
                'error_message' => $error
            ], 500);
        }

        $nameDetail = $this->helper->getDetailNamePart($fullname);
        $state = $this->helper->getStateFromPostcode($postcode);

        if(empty($age) && !empty($dateOfBirth)) {
            $tmp_dob = explode('/', $dateOfBirth);
            $dateOfBirth = $tmp_dob[2] . '-' . $tmp_dob[1] . '-' . $tmp_dob[0];
            $dob = new \DateTime($dateOfBirth);
            $age = $this->helper->calculateAge($dateOfBirth);
        }

        $leads = new Leads();
        $leads->setDateCreated(new \DateTime());
        $leads->setFirstName($nameDetail['first']);
        if(empty($nameDetail['middle'])) {
            $leads->setMiddleName($nameDetail['middle']);
        }
        $leads->setLastName($nameDetail['last']);
        $leads->setPhone($phone);
        $leads->setEmail($email);
        $leads->setPostcode($postcode);
        $leads->setAge($age);
        $leads->setDateOfBirth($dob);
        $leads->setLifeStage($lifeStage);
        $leads->setCoverType($coverType);
        $leads->setHealthFund($healthFund);
        $leads->setState($state);

        $em->persist($leads);
        $em->flush();

        $utmSource = $request->get('utm_source');
        $utmMedium = $request->get('utm_medium');
        $utmCampaign = $request->get('utm_campaign');
        $utmContent = $request->get('utm_content');
        $utmTerm = $request->get('utm_term');

        $utm = new Utm();
        $utm->setLeadId($leads->getId());
        $utm->setUtmSource($utmSource);
        $utm->setUtmMedium($utmMedium);
        $utm->setUtmCampaign($utmCampaign);
        $utm->setUtmContent($utmContent);
        $utm->setUtmTerm($utmTerm);
        $em->persist($utm);

        $leadData = [
            'email' => $email,
            'phone' => $phone,
            'first_name' => $nameDetail['first'],
            'last_name' => $nameDetail['last'],
            'state' => strtolower($state),
            'postcode' => $postcode,
            'life_stage' => $lifeStage,
            'health_fund' => $healthFund,
            'cover_type' => $coverType,
            'age' => $age,
            'date_of_birth' => $dateOfBirth,
            'utm_source' => $utmSource,
            'utm_medium' => $utmMedium,
            'utm_campaign' => $utmCampaign,
            'utm_content' => $utmContent,
            'utm_term' => $utmTerm
        ];

        $activeCampaignResponse = $this->InsertActiveCampaign($leadData)->response;
        if(empty($activeCampaignResponse->message) && empty($activeCampaignResponse->errors)) {
            $leads->setActivecampaignId($activeCampaignResponse->contact->id);
            $em->persist($leads);
        }

        $em->flush();

        if(!empty($coverType)) {
            //for form 1
            if(is_array($coverType['hospital']) && is_array($coverType['extras'])) {
                if(!empty($coverType['hospital']) && !empty($coverType['extras'])) {
                    $leadData['cover_type'] = 'Combined';
                } else if(!empty($coverType['hospital'])) {
                    $leadData['cover_type'] = 'Hospital';
                } else if(!empty($coverType['extras'])) {
                    $leadData['cover_type'] = 'Extras';
                }
            } else {
                //form 4
                if($coverType['hospital'] && $coverType['extras']) {
                    $leadData['cover_type'] = 'Combined';
                } else if($coverType['hospital']) {
                    $leadData['cover_type'] = 'Hospital';
                } else if($coverType['extras']) {
                    $leadData['cover_type'] = 'Extras';
                }
            }
        } else {
            $leadData['cover_type'] = 'Combined';
        }

        $leadData['apikey'] = $params->get('hic_api_key');
        $leadData['utm_medium'] = !empty($utmMedium) ? $utmMedium : 'affiliate';
        $leadData['utm_source'] = !empty($utmSource) ? $utmSource : 'cep';
        $leadData['utm_campaign'] = !empty($utmCampaign) ? $utmCampaign : 'jancampaign';
        $ccLeadResult = $this->helper->createPostRequest('https://staging.api.alternativemedia.com.au/lead/create', $leadData);
        if(!empty($ccLeadResult->response)) {
            $leadUUID = $ccLeadResult->response->data->lead_uuid;
            $leads->setLeadUuid($leadUUID);
            $leads->setLeadStatus((array) $ccLeadResult->response);
            $em->persist($leads);
            $em->flush();
        }

        return $this->json([
            'status' => 'success',
            'error_message' => null
        ]);
    }

    private function InsertActiveCampaign($param)
    {
        $data = [
            'contact' => [
                'email' => $param['email'],
                'firstName' => $param['first_name'],
                'lastName' => $param['last_name'],
                'phone' => $param['phone'],
                'fieldValues' => [
                    [
                        'field' => 1,
                        'value' => $param['postcode']
                    ],
                    [
                        'field' => 2,
                        'value' => $param['state']
                    ],
                    [
                        'field' => 3,
                        'value' => $param['age']
                    ],
                    [
                        'field' => 5,
                        'value' => $param['utm_medium']
                    ],
                    [
                        'field' => 6,
                        'value' => $param['utm_campaign']
                    ],
                    [
                        'field' => 7,
                        'value' => $param['utm_content']
                    ],
                    [
                        'field' => 8,
                        'value' => $param['utm_term']
                    ],
                    [
                        'field' => 9,
                        'value' => $param['health_fund']
                    ],
                    [
                        'field' => 12,
                        'value' => $param['life_stage']
                    ],
                    [
                        'field' => 11,
                        'value' => json_encode($param['cover_type'])
                    ],
                    [
                        'field' => 13,
                        'value' => $param['date_of_birth']
                    ]
                ]
            ]
        ];

        $headers = [
            'Api-Token: 7040bcf0fc18276925e6d7b5bb1cfbc5164a01aee66c0e674acb1448a1f235c84e7e8134',
            'Content-Type: application/json'
        ];

        $response = $this->helper->createPostRequest('https://asymmetricinfoau.api-us1.com/api/3/contacts', $data, $headers);
        return $response;
    }
}
