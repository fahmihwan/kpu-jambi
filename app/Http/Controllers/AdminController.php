<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;

class AdminController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $users = User::latest()->paginate(10);

        return Inertia::render('UserAdmin/Index', [
            'datas' => $users
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('UserAdmin/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'nama' => 'required',
            'username' => 'required',
            'password' => 'required'
        ]);
        $validated['password'] = Hash::make($request->password);


        User::create($validated);
        return redirect('admin/akun');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $item = User::where('id', $id)->first();
        return Inertia::render('UserAdmin/Edit', [
            'item' => $item
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $validated = $request->validate([
            'nama' => 'required',
            'username' => 'required',
        ]);
        if ($request->toggleSwitch) {
            $validated['password'] = Hash::make($request->password);
        }
        User::where('id', $id)->update($validated);
        return redirect('admin/akun');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        User::destroy($id);
        return redirect('admin/akun');
    }
}
