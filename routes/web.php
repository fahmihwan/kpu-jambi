<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\GetApiController;
use App\Http\Controllers\KandidatController;
use App\Http\Controllers\SaksiController;
use App\Http\Controllers\TpsController;
use App\Http\Controllers\UserTPS_controller;
use App\Models\Sesi_pemilu;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get("/", [UserTPS_controller::class, 'login']);
Route::get("/user-tps", [UserTPS_controller::class, 'dashboard']);


Route::get('/admin/dashboard', function () {
    return Inertia::render('Dashboard');
});

Route::get('/admin', [AuthController::class, 'login']);
Route::post('/admin/auth/', [AuthController::class, 'authenticated']);
Route::post('/admin/auth/logout', [AuthController::class, 'logout']);


Route::resource('/admin/master/saksi', SaksiController::class);
Route::resource('/admin/master/tps', TpsController::class);
Route::resource('/admin/akun', AdminController::class);
Route::resource('/admin/periode-pemilu', Sesi_pemilu::class);
// Route::resource('/admin/master/kandidat', KandidatController::class);


Route::get('/admin/{id}/get-district', [GetApiController::class, 'get_district']);
Route::get('/admin/{id}/get-village', [GetApiController::class, 'get_village']);
