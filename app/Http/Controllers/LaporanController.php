<?php

namespace App\Http\Controllers;

use App\Helpers\SesiHelper;
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

        // $users = DB::table('users')
        //     ->join('contacts', 'users.id', '=', 'contacts.user_id')
        //     ->join('orders', 'users.id', '=', 'orders.user_id')
        //     ->select('users.*', 'contacts.phone', 'orders.price')
        //     ->get();
        $sesiId = $this->sesiId->getSesiId();
        // $datas = Transaksi::select(['id', 'sesi_tps_saksi_id', 'qty'])->with([
        //     'sesi_tps_saksi:id,saksi_id,tps_id',
        //     'sesi_tps_saksi.saksi:id,nama',
        //     'sesi_tps_saksi.tps:id,nama,kota,kecamatan,kelurahan',
        // ])->where('sesi_pemilu_id', $sesiId)->paginate(10);
        // 'tps.nama', 'kota', 'kecamatan', 'kelurahan'

        // $datas = Transaksi::select(['transaksis.id', 'qty', 'saksis.nama as saksi', 'tps.nama as tps', 'concat(kota, kecamatan) as alamat', 'kecamatan', 'kelurahan'])
        $datas = Transaksi::selectRaw("transaksis.id, saksis.nama as saksi, tps.nama as tps, CONCAT(kota,' - ', kecamatan ,' - ',kelurahan) AS alamat, qty")
            ->join('sesi_tps_saksis', 'transaksis.sesi_tps_saksi_id', '=', 'sesi_tps_saksis.id')
            ->join('saksis', 'sesi_tps_saksis.saksi_id', '=', 'saksis.id')
            ->join('tps', 'sesi_tps_saksis.tps_id', '=', 'tps.id')
            ->where('transaksis.sesi_pemilu_id', $sesiId)
            ->orderBy('transaksis.id', 'desc')->get();




        return Inertia::render('Laporan/Laporan_suara', [
            'datas' => $datas
        ]);
    }
    public function laporan_saksi()
    {
        return Inertia::render('Laporan/Laporan_saksi', [
            'datas' => []
        ]);
    }
}
