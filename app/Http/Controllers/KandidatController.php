<?php

namespace App\Http\Controllers;

use App\Models\Kandidat;
use Illuminate\Http\Request;
use Inertia\Inertia;

class KandidatController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Master/Kandidat/Index');
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Kandidat $kandidat)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Kandidat $kandidat)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Kandidat $kandidat)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Kandidat $kandidat)
    {
        //
    }
}
