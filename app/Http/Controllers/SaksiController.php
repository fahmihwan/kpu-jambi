<?php

namespace App\Http\Controllers;

use App\Models\Saksi;
use App\Models\Tps;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SaksiController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {


        return Inertia::render('Master/Saksi/Index');
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $tps =  Tps::latest()->get();
        return Inertia::render('Master/Saksi/Create', [
            'tps' => $tps
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        return $request;
    }

    /**
     * Display the specified resource.
     */
    public function show(Saksi $saksi)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Saksi $saksi)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Saksi $saksi)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Saksi $saksi)
    {
        //
    }
}
