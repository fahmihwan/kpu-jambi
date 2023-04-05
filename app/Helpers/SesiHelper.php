<?php

namespace App\Helpers;

use App\Models\Sesi_pemilu;

class SesiHelper
{

    public function getSesiId()
    {

        try {
            return Sesi_pemilu::select(['id'])->where('isActive', 1)->first()->id;
        } catch (\Throwable $th) {
            return false;
        }

        // if ($data = ) {
        //     return $data;
        // } else {
        //     return false;
        // }
    }
}
