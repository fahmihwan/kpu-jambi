<?php

use App\Models\Saksi;
use App\Models\Sesi_pemilu;
use App\Models\Tps;
use App\Models\User;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('sesi_tps_saksis', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(User::class);
            $table->foreignIdFor(Saksi::class);

            // $table->foreignId('sesi_pemilu_id')->constrained()->onUpdate('CASCADE')->onDelete('CASCADE');
            $table->foreignIdFor(Sesi_pemilu::class)->constrained()->onUpdate('CASCADE')->onDelete('CASCADE');
            // $table->foreign('sesi_pemilu_id')->references('id')->on('sesi_pemilus')->onDelete('restrict');


            $table->foreignIdFor(Tps::class);

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('sesi_tps_saksis');
    }
};
