<?php

use App\Models\Sesi_pemilu;
use App\Models\Sesi_tps_saksi;

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
        Schema::create('transaksis', function (Blueprint $table) {
            $table->id();
            // $table->foreignIdFor(Sesi_pemilu::class);
            $table->foreignId('sesi_pemilu_id')->constrained()->onDelete('restrict');
            $table->foreignIdFor(Sesi_tps_saksi::class);
            $table->integer('qty');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('transaksis');
    }
};
