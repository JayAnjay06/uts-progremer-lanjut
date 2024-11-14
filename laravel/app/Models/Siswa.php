<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Siswa extends Model
{
    use HasFactory;

    protected $fillable = [
        'nama',
        'tanggal_lahir',
        'alamat',
        'jenis_kelamin',
        'no_telepon',
        'orang_tua',
        'id_kelas',
    ];
    
    public function kelas()
    {
        return $this->belongsTo(Kelas::class, 'id_kelas');
    }
}
