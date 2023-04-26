<?php

namespace App\Http\Controllers;

use App\Exports\TransaksiExport;
use Illuminate\Http\Request;
use Maatwebsite\Excel\Facades\Excel;

class Export_csv_controller extends Controller
{
    public function export_transaksi()
    {
        return Excel::download(new TransaksiExport, 'users.xlsx');
    }
}
