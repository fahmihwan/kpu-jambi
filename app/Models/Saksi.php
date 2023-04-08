<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Foundation\Auth\User as Authenticatable;

class Saksi extends Authenticatable
{
    use HasFactory, SoftDeletes;
    protected $guarded = ['id'];
    protected $casts = ['created_at' => 'datetime:l, d-m-Y'];

    // protected $hidden = [
    //     'password',
    // ];


}
