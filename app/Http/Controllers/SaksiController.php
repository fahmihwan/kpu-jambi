<?php

namespace App\Http\Controllers;

use App\Models\Saksi;
use App\Models\Tps;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;

class SaksiController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $datas = Saksi::with('tps:id,nama')->latest()->get();
        return Inertia::render('Master/Saksi/Index', [
            'datas' => $datas
        ]);
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

        $validated = $request->validate([
            'nama' => 'required|max:50',
            'username' => 'required|max:15',
            'telp' => 'required|max:20',
            'tps_id' => 'required',
            'password' => 'required',
        ]);

        // $validated['password'] = Hash::make($request->password);
        Saksi::create($validated);

        return redirect('/admin/master/saksi');
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
