<?php

namespace App\Http\Controllers;

use App\Helpers\SesiHelper;
use App\Models\Sesi_pemilu;
use App\Models\Tps;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TpsController extends Controller
{

    protected $sesiId;
    public function __construct()
    {
        $this->sesiId = new SesiHelper();
    }
    /**
     * Display a listing of the resource.
     */
    public function index()
    {

        $sesiId = $this->sesiId->getSesiId();
        if (!$sesiId) {
            return 'harap pilih periode';
        }
        // return Tps::where('sesi_pemilu_id', $sesiId)->latest()->get();


        return Inertia::render('Master/Tps/Index', [
            // 'datas' => Tps::where('sesi_pemilu_id', $sesiId)->latest()->paginate(10)
            'datas' => Tps::where('sesi_pemilu_id', $sesiId)->latest()->get()
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $getApi = new GetApiController();
        $response = $getApi->getApi("https://emsifa.github.io/api-wilayah-indonesia/api/regencies/15.json");

        return Inertia::render('Master/Tps/Create', [
            'api_kota' => json_decode($response)
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {

        // dd($this->sesiId->getSesiId());

        $validated =  $request->validate([
            'nama' => 'required',
            'kota' => 'required',
            'kecamatan' => 'required',
            'kelurahan' => 'required'
        ]);

        $sesiId = $this->sesiId->getSesiId();
        if (!$sesiId) {
            return 'harap pilih periode';
        }

        $validated['sesi_pemilu_id'] = $this->sesiId->getSesiId();

        Tps::create($validated);
        return redirect('/admin/master/tps');
    }

    /**
     * Display the specified resource.
     */
    public function show(Tps $tps)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    // public function edit(Tps $tps)
    public function edit($id)
    {
        $getApi = new GetApiController();
        $response = $getApi->getApi("https://emsifa.github.io/api-wilayah-indonesia/api/regencies/15.json");

        $tps =   Tps::where('id', $id)->first();

        return Inertia::render('Master/Tps/Edit', [
            'api_kota' => json_decode($response),
            'tps' => $tps
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $validated =  $request->validate([
            'nama' => 'required',
            'kota' => 'required',
            'kecamatan' => 'required',
            'kelurahan' => 'required'
        ]);

        Tps::where('id', $id)->update($validated);

        return redirect('/admin/master/tps');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        Tps::destroy($id);
        return redirect()->back();
        // return redirect('/admin/master/tps');
    }
}
