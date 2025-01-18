<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    // 
    public function up(): void
    {
        Schema::create('kelas', function (Blueprint $table) {
            $table->id('ID_Kelas');
            $table->string('Nama_Kelas');
            $table->foreignId('Wali_Kelas_ID')->constrained('guru', 'ID_Guru')->onDelete('cascade');
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('kelas');
    }
};
