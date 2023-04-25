<?php

namespace App\Http\Controllers;

use App\Http\Requests\SesiRequest;
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
    public function store(SesiRequest $request)
    {
        $validated = $request->validated();
        $validated['isActive'] = false;
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
            'kode' => 'required|unique:sesi_pemilus,kode,' . $id . ',id,deleted_at,NULL',
            'tanggal' => 'required',
            'keterangan' => 'required',
            'custome_login_description' => 'required'
        ]);

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
