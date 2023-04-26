<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class ProsesTransaksiController extends Controller
{
    public function index()
    {
        return Inertia::render('Proses_transaksi/Index');
    }
}
