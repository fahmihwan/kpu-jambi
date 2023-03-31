<?php

use App\Http\Controllers\GetApiController;
use App\Http\Controllers\KandidatController;
use App\Http\Controllers\SaksiController;
use App\Http\Controllers\TpsController;
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

Route::get('/admin/dashboard', function () {

    return Inertia::render('Dashboard');
});

Route::resource('/admin/master/saksi', SaksiController::class);
Route::resource('/admin/master/tps', TpsController::class);
Route::resource('/admin/master/kandidat', KandidatController::class);


Route::get('/admin/{id}/get-district', [GetApiController::class, 'get_district']);
Route::get('/admin/{id}/get-village', [GetApiController::class, 'get_village']);
