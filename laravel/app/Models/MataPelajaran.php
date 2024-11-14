<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MataPelajaran extends Model
{
    use HasFactory;

    protected $fillable = [
        'nama_mata_pelajaran',
        'jumlah_jam',
    ];

    public function guru()
    {
        return $this->hasMany(Guru::class, 'id_mata_pelajaran');
    }

    public function jadwal()
    {
        return $this->hasMany(Jadwal::class, 'id_mata_pelajaran');
    }}
