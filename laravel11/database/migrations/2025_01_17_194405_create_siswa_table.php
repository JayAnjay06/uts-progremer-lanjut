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
        Schema::create('siswa', function (Blueprint $table) {
            $table->id('ID_Siswa');
            $table->string('Nama');
            $table->date('Tanggal_Lahir');
            $table->string('Jenis_Kelamin');
            $table->string('Alamat');
            $table->foreignId('Kelas_ID')->constrained('kelas', 'ID_Kelas')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('siswa');
    }
};
