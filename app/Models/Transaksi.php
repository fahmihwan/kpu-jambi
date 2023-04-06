<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Transaksi extends Model
{
    use HasFactory;
    protected $guarded = ['id'];

    public function sesi_tps_saksi()
    {
        return $this->belongsTo(Sesi_tps_saksi::class);
    }
}
