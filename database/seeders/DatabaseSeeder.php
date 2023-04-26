<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Saksi;
use App\Models\Sesi_pemilu;
use App\Models\Sesi_tps_saksi;
use App\Models\Tps;
use App\Models\Transaksi;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();

        User::create([
            'nama' => 'fahmi',
            'username' => 'fahmihwan',
            'password' => Hash::make('qweqwe123')
        ]);
        Sesi_pemilu::create([
            'kode' => 'PM001',
            'tanggal' => date('Y-m-d'),
            'keterangan' => 'pemilu seluruh kota',
            'isActive' => 1,
            'custome_login_description' => 'Sistem Informasi Penghitungan Suara DPRD TANJAB BARAT(SUTEJO)'
        ]);


        for ($i = 0; $i < 90; $i++) {
            Tps::create([
                'nama' => 'TPS0' . $i,
                'sesi_pemilu_id' => 1,
                'kota' => 'KOTA JAMBI',
                'kecamatan' =>  fake()->randomElement(['SUNGAI BAHAR', 'MESTONG', 'BAHAR UTARA', 'TAMAN RAJO']),
                'kelurahan' => fake()->randomElement(['MARGA', 'BUKIT MAS', 'SUKA MAKMUR', 'BERKAH']),
            ]);
        }

        Saksi::create([
            'nama' => 'fahmi',
            'token' => 'fahmi' . '+6282334337393',
            'telp' =>  '+6282334337393',
        ]);
        Saksi::create([
            'nama' => 'darunik',
            'token' => 'darunik' . '+6285233505012',
            'telp' =>  '+6285233505012',
        ]);

        // for ($i = 0; $i < 90; $i++) {
        //     Saksi::create([
        //         'nama' => fake()->name(),
        //         'token' => fake()->name() . fake()->e164PhoneNumber('+62'),
        //         'telp' =>  fake()->phoneNumber('+62'),
        //     ]);
        // }


        // Sesi_tps_saksi::create([
        //     'user_id' => 1,
        //     'saksi_id' => $i,
        //     'sesi_pemilu_id' => 1,
        //     'tps_id' => $i,
        // ]);
        // for ($i = 1; $i <= 90; $i++) {
        //     Sesi_tps_saksi::create([
        //         'user_id' => 1,
        //         'saksi_id' => $i,
        //         'sesi_pemilu_id' => 1,
        //         'tps_id' => $i,
        //     ]);
        // }

        // for ($i = 1; $i <= 90; $i++) {
        //     Transaksi::create([
        //         'sesi_pemilu_id' => 1,
        //         'sesi_tps_saksi_id' => $i,
        //         'qty' => fake()->numberBetween(100, 2000),
        //     ]);
        // }
    }
}
