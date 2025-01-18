<?php

namespace App\Models;

use App\Models\Nilai;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;


class Nilai extends Model
{
    use HasFactory;

    protected $table = 'nilai';
    protected $primaryKey = 'ID_Nilai';

    protected $fillable = [
        'Siswa_ID',
        'Mata_Pelajaran_ID',
        'Nilai',
    ];

    public function siswa()
    {
        return $this->belongsTo(Siswa::class, 'Siswa_ID');
    }

    public function mataPelajaran()
    {
        return $this->belongsTo(MataPelajaran::class, 'Mata_Pelajaran_ID');
    }
}{
    //
}
