<?php

namespace App\Http\Controllers;

use App\Models\Sesi_pemilu;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class AuthController extends Controller
{
    public function login()
    {

        return Inertia::render('Auth/Login', [
            'custome_description' => Sesi_pemilu::select('custome_login_description')->where('isActive', true)->first()
        ]);
    }
    public function authenticated(Request $request)
    {
        $validated = $request->validate([
            'username' => 'required',
            'password' => 'required',
        ]);


        if (Auth::attempt($validated)) {
            $request->session()->regenerate();
            return redirect()->intended('/admin/dashboard');
        }
        return redirect()->back()->with('error_message', 'username atau password salah');
    }
    public function logout(Request $request)
    {
        Auth::guard('web')->logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();
        return redirect('/admin');
    }
}
