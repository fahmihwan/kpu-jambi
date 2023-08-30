<?php

namespace App\Http\Controllers;

use App\Models\Sesi_pemilu;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class Setting_primary_dataController extends Controller
{
    public function index()
    {
        $data = Sesi_pemilu::latest()->get();
        return Inertia::render('Setting/ListSesi', [
            'datas' => $data
        ]);
    }
    public function update_active($id)
    {
        try {
            DB::beginTransaction();

            $datas = Sesi_pemilu::all();
            foreach ($datas as $data) {
                Sesi_pemilu::where('id', $data['id'])->update([
                    'isActive' => 0,
                ]);
            }
            DB::commit();
        } catch (\Throwable $th) {
            dd($th->getMessage());
        }
        Sesi_pemilu::where('id', $id)->update([
            'isActive' => 1
        ]);
    }

    public function delete_sesi($id)
    {
        // Sesi_pemilu::where('id', $id)->delete();
        Sesi_pemilu::destroy($id);
        return redirect()->back();
    }
}
