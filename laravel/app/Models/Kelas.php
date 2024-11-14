<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Kelas extends Model
{
    use HasFactory;

    protected $fillable = [
        'nama_kelas',
        'id_guru',
    ];

    public function guru()
    {
        return $this->belongsTo(Guru::class, 'id_guru'); // Relasi ke model Guru
    }

    public function siswa()
    {
        return $this->hasMany(Siswa::class, 'id_kelas'); // Relasi ke model Siswa
    }

    public function jadwal()
    {
        return $this->hasMany(Jadwal::class, 'id_kelas'); // Relasi ke model Jadwal
    }
}
