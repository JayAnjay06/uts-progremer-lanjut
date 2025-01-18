<?php

namespace App\Models;

use App\Models\MataPelajaran;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class MataPelajaran extends Model
{
    use HasFactory;

    protected $table = 'mata_pelajaran';
    protected $primaryKey = 'ID_Mata_Pelajaran';

    protected $fillable = [
        'Nama_Mata_Pelajaran',
        'Guru_ID',
    ];

    public function guru()
    {
        return $this->belongsTo(Guru::class, 'Guru_ID');
    }
}