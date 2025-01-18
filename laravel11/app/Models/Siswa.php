<?php

namespace App\Models;

use App\Models\Siswa;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Siswa extends Model
{
    use HasFactory;

    protected $table = 'siswa';
    protected $primaryKey = 'ID_Siswa';

    protected $fillable = [
        'Nama',
        'Tanggal_Lahir',
        'Jenis_Kelamin',
        'Alamat',
        'Kelas_ID',
    ];

    public function kelas()
    {
        return $this->belongsTo(Kelas::class, 'Kelas_ID');
    }

    // public function nilai()
    // {
    //     return $this->hasMany(Nilai::class, 'Siswa_ID');
    // }
}
