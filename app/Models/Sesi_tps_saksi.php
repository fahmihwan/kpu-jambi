<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Sesi_tps_saksi extends Model
{
    use HasFactory, SoftDeletes;
    protected $guarded = ['id'];

    public function saksi()
    {
        return $this->belongsTo(Saksi::class);
    }

    public function tps()
    {
        return $this->belongsTo(Tps::class);
    }
    public function transaksis()
    {
        return $this->hasMany(Transaksi::class);
    }
    public function transaksi()
    {
        return $this->hasOne(Transaksi::class);
    }
}
