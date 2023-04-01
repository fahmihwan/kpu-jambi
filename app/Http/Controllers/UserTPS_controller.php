<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class UserTPS_controller extends Controller
{
    public function login()
    {
        return Inertia::render('UserTPS/Login');
    }
    public function dashboard()
    {
        return Inertia::render('UserTPS/Dashboard');
    }
}
