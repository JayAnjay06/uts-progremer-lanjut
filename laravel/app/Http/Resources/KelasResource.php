<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class KelasResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'nama_kelas' => $this->nama_kelas,
            'guru' => new GuruResource($this->guru), // Menggunakan resource Guru
            'siswa_count' => $this->siswa()->count(), // Menghitung jumlah siswa di kelas
            'jadwal' => JadwalResource::collection($this->jadwal), // Menggunakan resource Jadwal
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ];
    }
}
