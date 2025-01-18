<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    //
    public function up(): void
    {
        Schema::create('guru', function (Blueprint $table) {
            $table->id('ID_Guru');
            $table->string('Nama');
            $table->date('Tanggal_Lahir');
            $table->string('Jenis_Kelamin');
            $table->string('Alamat');
            $table->string('Mata_Pelajaran');
            $table->timestamps();
        });
    }
    
    public function down(): void
    {
        Schema::dropIfExists('guru');
    }
};
