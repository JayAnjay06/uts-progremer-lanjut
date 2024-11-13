<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class JadwalResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'kelas' => new KelasResource($this->kelas), // Menggunakan resource Kelas
            'mata_pelajaran' => new MataPelajaranResource($this->mataPelajaran), // Menggunakan resource Mata Pelajaran
            'waktu' => $this->waktu,
            'hari' => $this->hari,
            'ruangan' => $this->ruangan,
            'keterangan' => $this->keterangan,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ];
    }
}