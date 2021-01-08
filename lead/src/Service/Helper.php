<?php

namespace App\Service;

class Helper
{

    public function getDetailNamePart($fullname)
    {
        // trim
        $fullname = preg_replace('!\s+!', ' ', $fullname);
        $fullname = str_replace(' ', '-', $fullname);

        $fullname = trim($fullname, '-');
        $explode_name = explode("-", $fullname);
        $size = count($explode_name);
        $partofname = array();
        $partofname['first'] = $explode_name[0];
        $partofname['last'] = '';
        if ($size > 1) {
            $partofname['last'] = $explode_name[$size-1];
        }

        $partofname['middle'] = '';
        $count_midle = 0;
        for ($i=1; $i < $size-1; $i++) {

            if ($count_midle == 0) {
                $partofname['middle'] .= $explode_name[$i];
            }else{
                $partofname['middle'] .= ' '.$explode_name[$i];
            }
            $count_midle++;
        }

        return $partofname;
    }

    public function calculateAge($dob)
    {
        $today = new \DateTime();
        $dob = new \DateTime($dob);
        $age = $today->diff($dob);
        $age = $age->y;
        return $age;
    }

    public function createGetRequest($url, $headers = [])
    {
        $curl = curl_init($url);
        $_headers = [];
        curl_setopt_array($curl, $this->getCurlOpt($headers));
        curl_setopt($curl, CURLOPT_HEADERFUNCTION,
            function($curl, $header) use (&$_headers)
            {
                $len = strlen($header);
                $header = explode(':', $header, 2);
                if (count($header) < 2) // ignore invalid headers
                    return $len;

                $_headers[strtolower(trim($header[0]))][] = trim($header[1]);

                return $len;
            }
        );

        $response = curl_exec($curl);
        $response_info = curl_getinfo($curl);

        curl_close($curl);

        return (object) array(
            'response' => json_decode($response),
            'response_info' => (object) $response_info,
            'response_header' => $_headers
        );
    }

    public function createPostRequest($url, $params = [], $headers = [])
    {
        $curl = curl_init($url);
        $_headers = [];

        $is_json = in_array('Content-Type: application/json', $headers);
        $params = $is_json ? json_encode($params) : http_build_query($params);

        curl_setopt($curl, CURLOPT_POST, true);
        curl_setopt($curl, CURLOPT_POSTFIELDS, $params);
        curl_setopt_array($curl, $this->getCurlOpt($headers));
        curl_setopt($curl, CURLOPT_HEADERFUNCTION,
            function($curl, $header) use (&$_headers)
            {
                $len = strlen($header);
                $header = explode(':', $header, 2);
                if (count($header) < 2) // ignore invalid headers
                    return $len;

                $_headers[strtolower(trim($header[0]))][] = trim($header[1]);

                return $len;
            }
        );

        $response = curl_exec($curl);
        $response_info = curl_getinfo($curl);

        curl_close($curl);

        return (object) array(
            'response' => json_decode($response),
            'response_info' => (object) $response_info,
            'response_header' => $_headers
        );
    }

    private function getCurlOpt(array $headers)
    {
        return [
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_TIMEOUT => 60,
            CURLOPT_SSL_VERIFYHOST => false,
            CURLOPT_SSL_VERIFYPEER => false,
            CURLOPT_USERAGENT => 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/71.0.3578.98 Safari/537.36',
            CURLOPT_HTTPHEADER => $headers
        ];
    }
}