<?php

namespace App\Http\Controllers;

use App\Helpers\SesiHelper;
use App\Models\Saksi;
use App\Models\Sesi_pemilu;
use App\Models\Sesi_tps_saksi;
use App\Models\Tps;
use App\Models\Transaksi;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class DashboardController extends Controller
{
    protected $sesiId;
    public function __construct()
    {
        $this->sesiId = new SesiHelper;
    }

    public function index()
    {
        $sesiId = $this->sesiId->getSesiId();

        $stat_suara = Transaksi::where('sesi_pemilu_id', $sesiId)->sum('qty');
        $stat_saksi = Sesi_tps_saksi::where('sesi_pemilu_id', $sesiId)->count();
        $stat_tps = Tps::where('sesi_pemilu_id', $sesiId)->count();

        $sum_suara_perkecamatan = Transaksi::select('kecamatan AS daerah', DB::raw('sum(qty) as totals'))
            ->join('sesi_tps_saksis', 'transaksis.sesi_tps_saksi_id', '=', 'sesi_tps_saksis.id')
            ->join('tps', 'sesi_tps_saksis.tps_id', '=', 'tps.id')
            ->where('transaksis.sesi_pemilu_id', $sesiId)
            ->groupBy('kecamatan')
            ->get();


        $sum_suara_perkota =  Transaksi::select('kota AS daerah', DB::raw('sum(qty) as totals'))
            ->join('sesi_tps_saksis', 'transaksis.sesi_tps_saksi_id', '=', 'sesi_tps_saksis.id')
            ->join('tps', 'sesi_tps_saksis.tps_id', '=', 'tps.id')
            ->where('transaksis.sesi_pemilu_id', $sesiId)
            ->groupBy('kota')
            ->get();

        return Inertia::render('Dashboard', [
            'stat_suara' => $stat_suara,
            'stat_tps' => $stat_tps,
            'stat_saksi' => $stat_saksi,
            'sum_suara_perkecamatan' => $sum_suara_perkecamatan,
            'sum_suara_perkota' => $sum_suara_perkota,
            'sudah_mengisi' => Transaksi::where('sesi_pemilu_id', $sesiId)->count() . "/" . Sesi_tps_saksi::where('sesi_pemilu_id', $sesiId)->count()


        ]);
    }
}
