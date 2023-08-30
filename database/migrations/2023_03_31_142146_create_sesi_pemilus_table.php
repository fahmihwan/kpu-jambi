<?php

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
        Schema::create('sesi_pemilus', function (Blueprint $table) {
            $table->id();
            $table->string('kode', 10);
            $table->date('tanggal');
            $table->string('keterangan', 100);
            $table->boolean('isActive');
            $table->string('custome_login_description', 100);
            $table->timestamps();
            // $table->onDelete('CASCADE');
            // $table->onUpdate('CASCADE');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('sesi_pemilus');
    }
};
