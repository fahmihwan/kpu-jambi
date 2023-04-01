<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class AuthController extends Controller
{
    public function login()
    {
        return Inertia::render('Auth/Login');
    }
    public function authenticated()
    {
        return 'ok';
    }
    public function logout()
    {
        return 'ok';
    }
}
