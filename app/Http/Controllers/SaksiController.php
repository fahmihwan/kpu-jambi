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
        $datas = Saksi::latest()->get();


        return Inertia::render('Master/Saksi/Index', [
            'datas' => $datas
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Master/Saksi/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {


        $validated = $request->validate([
            'nama' => 'required|max:50',
            'telp' => 'required|max:20',
        ]);
        $validated['token'] = preg_replace('/\s+/', '', $request->nama) . preg_replace('/\s+/', '', $validated['telp']);
        Saksi::create($validated);

        return redirect('/admin/master/saksi');
    }

    /**
     * Display the specified resource.
     */
    public function show(Saksi $saksi)
    {
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Saksi $saksi)
    {

        return Inertia::render('Master/Saksi/Edit', [
            'saksi' => $saksi
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Saksi $saksi)
    {
        $validated = $request->validate([
            'nama' => 'required|max:50',
            'telp' => 'required|max:20',
        ]);
        $validated['token'] = preg_replace('/\s+/', '', $request->nama) . preg_replace('/\s+/', '', $validated['telp']);

        Saksi::where('id', $saksi->id)->update($validated);
        return redirect('/admin/master/saksi');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Saksi $saksi)
    {

        Saksi::destroy($saksi->id);
        return redirect('/admin/master/saksi');
    }
}
