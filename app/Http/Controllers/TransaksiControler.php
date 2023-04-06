<?php

namespace App\Http\Controllers;

use App\Helpers\SesiHelper;
use App\Models\Sesi_tps_saksi;
use App\Models\Transaksi;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class TransaksiControler extends Controller
{
    protected $sesiId;
    public function __construct()
    {
        $this->sesiId = new SesiHelper();
    }
    public function store(Request $request)
    {
        $validated = $request->validate([
            'qty' => 'required'
        ]);

        $item = Sesi_tps_saksi::select(['id'])
            ->where([
                ['sesi_pemilu_id', '=', $this->sesiId->getSesiId()],
                ['saksi_id', '=', Auth::guard('websaksi')->user()->id]
            ],)
            ->first()->id;

        $validated['sesi_pemilu_id'] = $this->sesiId->getSesiId();
        $validated['sesi_tps_saksi_id'] = $item;

        Transaksi::create($validated);
        return redirect()->back();
    }
}
