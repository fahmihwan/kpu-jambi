<?php

namespace App\Exports;

use App\Helpers\SesiHelper;
use App\Models\Transaksi;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithHeadings;

class TransaksiExport implements FromCollection, WithHeadings
{
    protected $sesiId;
    public function __construct()
    {
        $this->sesiId = new SesiHelper();
    }
    /**
     * @return \Illuminate\Support\Collection
     */
    public function collection()
    {
        // return Transaksi::all();
        $sesiId = $this->sesiId->getSesiId();

        $datas = Transaksi::selectRaw("saksis.nama as saksi, tps.nama as tps, CONCAT(kota,' - ', kecamatan ,' - ',kelurahan) AS alamat, qty")
            ->join('sesi_tps_saksis', 'transaksis.sesi_tps_saksi_id', '=', 'sesi_tps_saksis.id')
            ->join('saksis', 'sesi_tps_saksis.saksi_id', '=', 'saksis.id')
            ->join('tps', 'sesi_tps_saksis.tps_id', '=', 'tps.id')
            ->where('transaksis.sesi_pemilu_id', $sesiId)
            ->orderBy('qty', 'desc')
            ->get();
        return $datas;
    }

    public function headings(): array
    {
        return ["saksi", "tps", "alamat", "qty"];
    }
}
