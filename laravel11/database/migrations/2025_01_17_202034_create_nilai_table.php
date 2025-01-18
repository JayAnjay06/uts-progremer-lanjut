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
        Schema::create('nilai', function (Blueprint $table) {
            $table->id('ID_Nilai');
            $table->foreignId('Siswa_ID')->constrained('siswa', 'ID_Siswa')->onDelete('cascade');
            $table->foreignId('Mata_Pelajaran_ID')->constrained('mata_pelajaran', 'ID_Mata_Pelajaran')->onDelete('cascade'); // Foreign key
            $table->integer('Nilai');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('nilai');
    }
};
