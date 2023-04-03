<?php

namespace App\Http\Controllers;

use App\Models\Sesi_pemilu;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SesiPemiluController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('SesiPemilu/Index', [
            'datas' => Sesi_pemilu::latest()->paginate(5)
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('SesiPemilu/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'kode' => 'required',
            'tanggal' => 'required',
            'keterangan' => 'required'
        ]);
        $validated['isActive'] = false;
        // return $validated;
        Sesi_pemilu::create($validated);

        return redirect('/admin/periode-pemilu');
    }

    /**
     * Display the specified resource.
     */
    public function show(Sesi_pemilu $sesi_pemilu)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        $item = Sesi_pemilu::where('id', $id)->first();

        return Inertia::render('SesiPemilu/Edit', [
            'item' => $item
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $validated = $request->validate([
            'kode' => 'required',
            'tanggal' => 'required',
            'keterangan' => 'required'
        ]);
        // $validated['isActive'] = false;

        Sesi_pemilu::where('id', $id)->update($validated);
        return redirect('/admin/periode-pemilu');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        Sesi_pemilu::destroy($id);
        return redirect()->back();
    }
}
