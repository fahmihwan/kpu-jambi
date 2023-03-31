<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class GetApiController extends Controller
{
    public function get_district($id)
    {
        $curl = curl_init();
        curl_setopt_array($curl, array(
            CURLOPT_URL => "https://www.emsifa.com/api-wilayah-indonesia/api/districts/" . $id . ".json",
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_ENCODING => "",
            CURLOPT_MAXREDIRS => 10,
            CURLOPT_TIMEOUT => 0,
            CURLOPT_FOLLOWLOCATION => true,
            CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
            CURLOPT_CUSTOMREQUEST => "GET",

            CURLOPT_HTTPHEADER => array(
                "Content-Type: application/json",
                "Authorization: Basic gfdsds"
            ),
        ));

        $response = curl_exec($curl);
        return $response;
        curl_close($curl);
    }

    public function get_village($id)
    {
        $curl = curl_init();
        curl_setopt_array($curl, array(
            CURLOPT_URL => "https://www.emsifa.com/api-wilayah-indonesia/api/villages/" . $id . ".json",
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_ENCODING => "",
            CURLOPT_MAXREDIRS => 10,
            CURLOPT_TIMEOUT => 0,
            CURLOPT_FOLLOWLOCATION => true,
            CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
            CURLOPT_CUSTOMREQUEST => "GET",

            CURLOPT_HTTPHEADER => array(
                "Content-Type: application/json",
                "Authorization: Basic gfdsds"
            ),
        ));

        $response = curl_exec($curl);
        return $response;
        curl_close($curl);
    }
}




// https://www.emsifa.com/api-wilayah-indonesia/api/villages/1302012.json