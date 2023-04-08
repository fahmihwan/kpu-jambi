<?php

use App\Models\Sesi_pemilu;
use App\Models\Tps;
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
        Schema::create('saksis', function (Blueprint $table) {
            $table->id();
            $table->string('nama', 50);
            $table->string('username', 15)->unique();
            $table->string('password');
            $table->string('telp', 20);
            // $table->foreignIdFor(Tps::class);
            // $table->foreignIdFor(Sesi_pemilu::class);
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('saksis');
    }
};
