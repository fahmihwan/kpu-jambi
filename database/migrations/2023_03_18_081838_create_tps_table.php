<?php

use App\Models\Sesi_pemilu;
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
        Schema::create('tps', function (Blueprint $table) {
            $table->id();
            $table->string('nama', 30);
            // $table->string('provinsi', 50);
            $table->string('kota', 50);
            $table->string('kecamatan', 50);
            $table->string('kelurahan', 50);
            $table->foreignIdFor(Sesi_pemilu::class);
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tps');
    }
};
