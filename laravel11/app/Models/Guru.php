<?php

namespace App\Models;

use App\Models\Guru;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Guru extends Model
{
    use HasFactory;

    protected $table = 'guru';
    protected $primaryKey = 'ID_Guru';

    protected $fillable = [
        'Nama',
        'Tanggal_Lahir',
        'Jenis_Kelamin',
        'Alamat',
        'Mata_Pelajaran',
    ];

    public function kelas()
    {
        return $this->hasMany(Kelas::class, 'Wali_Kelas_ID');
    }

    public function mataPelajaran()
    {
        return $this->hasMany(MataPelajaran::class, 'Guru_ID');
    }
}