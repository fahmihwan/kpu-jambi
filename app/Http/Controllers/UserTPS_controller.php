<?php

namespace App\Http\Controllers;

use App\Helpers\SesiHelper;
use App\Models\Saksi;
use App\Models\Sesi_pemilu;
use App\Models\Sesi_tps_saksi;
use App\Models\Transaksi;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class UserTPS_controller extends Controller
{
    protected $sesiId;
    public function __construct()
    {
        $this->sesiId = new SesiHelper();
    }
    public function login()
    {

        return Inertia::render('UserTPS/Login', [
            'custome_description' => Sesi_pemilu::select('custome_login_description')->where('isActive', true)->first()
        ]);
    }

    public function authenticated(Request $request)
    {
        $validated = $request->validate([
            'token' => 'required',
        ]);

        try {

            $get_id =  Saksi::where(['token' => $validated['token']])->first()->id;
        } catch (\Throwable $th) {
            return redirect()->back()->with('error_message', 'token tidak tersedia');
        }

        if (Auth::guard('websaksi')->loginUsingId($get_id)) {
            $request->session()->regenerate();
            return redirect()->intended('/user-tps');
        }
    }
    public function dashboard()
    {

        $periode_id = $this->sesiId->getSesiId();

        $item = Sesi_tps_saksi::with([
            'saksi:id,nama',
            'tps'
        ])->select(['id', 'saksi_id', 'tps_id'])
            ->where([
                ['sesi_pemilu_id', '=', $periode_id],
                ['saksi_id', '=', Auth::guard('websaksi')->user()->id]
            ])
            ->first();


        $isSubmit = Sesi_tps_saksi::with([
            'transaksi',
        ])->where([
            ['sesi_pemilu_id', '=', $periode_id],
            ['saksi_id', '=', Auth::guard('websaksi')->user()->id]
        ])->whereHas('transaksis', function ($q) use ($periode_id) {
            $q->where('sesi_pemilu_id', $periode_id);
        });

        return Inertia::render('UserTPS/Dashboard', [
            'item' => $item,
            'kode_periode' => Sesi_pemilu::where('id', $periode_id)->where('isActive', 1)->first()->kode,
            'isSubmit' => $isSubmit->exists(),
            'qty' => isset($isSubmit->first()->transaksi->qty) ? $isSubmit->first()->transaksi->qty : 0,
            'id_transaksi' => isset($isSubmit->first()->transaksi->id) ? $isSubmit->first()->transaksi->id : false
        ]);
    }



    public function logout(Request $request)
    {
        Auth::guard('websaksi')->logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();
        return redirect('/');
    }
}
