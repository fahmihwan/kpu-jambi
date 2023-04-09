<?php

namespace App\Http\Controllers;

use App\Helpers\SesiHelper;
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
        // $datas = Transaksi::selectRaw("transaksis.id, tps.nama as tps, qty")
        //     ->join('sesi_tps_saksis', 'transaksis.sesi_tps_saksi_id', '=', 'sesi_tps_saksis.id')
        //     ->join('saksis', 'sesi_tps_saksis.saksi_id', '=', 'saksis.id')
        //     ->join('tps', 'sesi_tps_saksis.tps_id', '=', 'tps.id')
        //     ->where('transaksis.sesi_pemilu_id', $sesiId)
        //     ->orderBy('transaksis.id', 'desc')->get();

        // saksi aktif


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

        // return $sum_suara_perkecamatan;


        return Inertia::render('Dashboard', [
            // 'polar_area_charts' => $datas,

            'stat_suara' => $stat_suara,
            'stat_tps' => $stat_tps,
            'stat_saksi' => $stat_saksi,
            'sum_suara_perkecamatan' => $sum_suara_perkecamatan,
            'sum_suara_perkota' => $sum_suara_perkota,

        ]);
    }
}
