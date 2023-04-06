<?php

namespace App\Http\Controllers;

use App\Helpers\SesiHelper;
use App\Models\Saksi;
use App\Models\Sesi_pemilu;
use App\Models\Sesi_tps_saksi;
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
        return Inertia::render('UserTPS/Login');
    }

    public function authenticated(Request $request)
    {
        $validated = $request->validate([
            'username' => 'required',
            'password' => 'required',
        ]);

        $get_id =  Saksi::where(['username' => $validated['username'], 'password' => $validated['password']])->first()->id;

        if (Auth::guard('websaksi')->loginUsingId($get_id)) {
            $request->session()->regenerate();
            return redirect()->intended('/user-tps');
            // return 'ok';
        }
    }
    public function dashboard()
    {

        // $item = Sesi_tps_saksi::select(['id'])
        //     ->where([
        //         ['sesi_pemilu_id', '=', $this->sesiId->getSesiId()],
        //         ['saksi_id', '=', Auth::guard('websaksi')->user()->id]
        //     ],)
        //     ->first()->id;

        $periode_id = $this->sesiId->getSesiId();


        $item = Sesi_tps_saksi::with([
            'saksi:id,nama,username',
            'tps'
        ])->select(['id', 'saksi_id', 'tps_id'])
            ->where([
                ['sesi_pemilu_id', '=', $periode_id],
                ['saksi_id', '=', Auth::guard('websaksi')->user()->id]
            ])
            ->first();

        $isSubmit = Sesi_tps_saksi::with([
            'transaksis',
        ])->where([
            ['sesi_pemilu_id', '=', $periode_id],
            ['saksi_id', '=', Auth::guard('websaksi')->user()->id]
        ])->whereHas('transaksis', function ($q) use ($periode_id) {
            $q->where('sesi_pemilu_id', $periode_id);
        })->exists();


        return Inertia::render('UserTPS/Dashboard', [
            'item' => $item,
            'isSubmit' => $isSubmit
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
