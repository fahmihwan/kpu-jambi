<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Saksi extends Model
{
    use HasFactory, SoftDeletes;
    protected $guarded = ['id'];
    protected $casts = ['created_at' => 'datetime:l, d-m-Y'];

    // protected $hidden = [
    //     'password',
    // ];

    public function tps()
    {
        return $this->belongsTo(Tps::class);
    }
}
