<?php

namespace App\Http\Controllers;

use App\Helpers\SesiHelper;
use App\Models\Sesi_tps_saksi;
use App\Models\Transaksi;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class LaporanController extends Controller
{

    protected $sesiId;
    public function __construct()
    {
        $this->sesiId = new SesiHelper;
    }

    public function laporan_suara()
    {

        $sesiId = $this->sesiId->getSesiId();

        $datas = Transaksi::selectRaw("transaksis.id, saksis.nama as saksi, tps.nama as tps, CONCAT(kota,' - ', kecamatan ,' - ',kelurahan) AS alamat, qty")
            ->join('sesi_tps_saksis', 'transaksis.sesi_tps_saksi_id', '=', 'sesi_tps_saksis.id')
            ->join('saksis', 'sesi_tps_saksis.saksi_id', '=', 'saksis.id')
            ->join('tps', 'sesi_tps_saksis.tps_id', '=', 'tps.id')
            ->where('transaksis.sesi_pemilu_id', $sesiId)
            ->orderBy('transaksis.id', 'desc')->get();

        $belum_mengisi = Sesi_tps_saksi::doesntHave('transaksis')
            ->selectRaw("saksis.nama as saksi, tps.nama as tps, CONCAT(kota,' - ', kecamatan ,' - ',kelurahan) AS alamat,telp")
            ->join('saksis', 'sesi_tps_saksis.saksi_id', '=', 'saksis.id')
            ->join('tps', 'sesi_tps_saksis.tps_id', '=', 'tps.id')
            ->where('sesi_tps_saksis.sesi_pemilu_id', $sesiId)
            ->get();


        return Inertia::render('Laporan/Laporan_suara', [
            'datas' => $datas,
            'belum_mengisi' => $belum_mengisi
        ]);
    }
    public function laporan_saksi()
    {
        return Inertia::render('Laporan/Laporan_saksi', [
            'datas' => []
        ]);
    }
}
