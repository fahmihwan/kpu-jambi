<?php

namespace App\Http\Controllers;

use App\Helpers\SesiHelper;
use App\Models\Saksi;

use App\Models\Sesi_tps_saksi;
use App\Models\Tps;

use Illuminate\Http\Request;

use Inertia\Inertia;

class Kelola_saksiController extends Controller
{

    protected $sesiId;
    public function __construct()
    {
        $this->sesiId = new SesiHelper();
    }
    public function index()
    {
        $datas = Sesi_tps_saksi::select(['sesi_tps_saksis.id', 'telp', 'saksis.nama as saksi', 'token', 'tps.nama as tps'])
            ->join('saksis', 'sesi_tps_saksis.saksi_id', '=', 'saksis.id')
            ->join('tps', 'sesi_tps_saksis.tps_id', '=', 'tps.id')
            ->where('sesi_tps_saksis.sesi_pemilu_id', $this->sesiId->getSesiId())
            ->orderBy('id', 'desc')->get();


        return Inertia::render('Kelola_saksi/Index', [
            'datas' => $datas
        ]);
    }
    public function create()
    {
        $sesiId = $this->sesiId->getSesiId();
        if (!$sesiId) {
            return 'harap pilih periode';
        }


        $datas = Sesi_tps_saksi::select(['sesi_tps_saksis.id', 'saksis.nama as saksi', 'tps.nama as tps', 'sesi_tps_saksis.created_at'])
            ->join('saksis', 'sesi_tps_saksis.saksi_id', '=', 'saksis.id')
            ->join('tps', 'sesi_tps_saksis.tps_id', '=', 'tps.id')
            ->where('sesi_tps_saksis.sesi_pemilu_id', $sesiId)
            ->latest()
            ->get();

        // sesi_tps_saksi where saksi_id

        return Inertia::render('Kelola_saksi/Create', [
            'saksi' => Saksi::latest()->get(),
            'tps' => Tps::where('sesi_pemilu_id', $sesiId)->latest()->get(),
            'datas' => $datas
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'saksi_id' => 'required',
            'tps_id' => 'required'
        ]);

        // react-select lib
        $validated['saksi_id'] = $validated['saksi_id']['value'];
        $validated['tps_id'] = $validated['tps_id']['value'];

        $sesiId = $this->sesiId->getSesiId();
        if (!$sesiId) {
            return 'harap pilih periode';
        }
        $validated['user_id'] = auth()->user()->id;
        $validated['sesi_pemilu_id'] = $sesiId;


        $isWakilAlreadyExists = Sesi_tps_saksi::where('saksi_id', '=', $validated['saksi_id'])
            ->where('tps_id', '=', $validated['tps_id'])
            ->where('sesi_pemilu_id', '=', $validated['sesi_pemilu_id'])
            ->exists();

        if ($isWakilAlreadyExists) {
            return redirect()->back()->with('error_message', 'wakil TPS sudah tersedia');
        }

        try {
            Sesi_tps_saksi::create($validated);
        } catch (\Throwable $th) {
            return $th->getMessage();
        }

        return redirect()->back();
    }

    public function destroy_sesi_tps_saksi($id)
    {
        Sesi_tps_saksi::destroy($id);
        return redirect()->back();
    }
}
