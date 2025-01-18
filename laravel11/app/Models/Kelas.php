<?php

namespace App\Models;

use App\Models\Kelas;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Kelas extends Model
{
    use HasFactory;

    protected $table = 'kelas';
    protected $primaryKey = 'ID_Kelas';

    protected $fillable = [
        'Nama_Kelas',
        'Wali_Kelas_ID',
    ];

    public function waliKelas()
    {
        return $this->belongsTo(Guru::class, 'Wali_Kelas_ID');
    }

    public function siswa()
    {
        return $this->hasMany(Siswa::class, 'Kelas_ID');
    }
}
