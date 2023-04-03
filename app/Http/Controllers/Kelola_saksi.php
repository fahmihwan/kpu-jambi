<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class Kelola_saksi extends Controller
{
    public function index()
    {
        return Inertia::render('Kelola_saksi/Index');
    }
}
