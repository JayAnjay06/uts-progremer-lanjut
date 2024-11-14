<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class SiswaResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'nama' => $this->nama,
            'tanggal_lahir' => $this->tanggal_lahir,
            'alamat' => $this->alamat,
            'jenis_kelamin' => $this->jenis_kelamin,
            'no_telepon' => $this->no_telepon,
            'orang_tua' => $this->orang_tua,
            'kelas' => new KelasResource($this->kelas), // Menggunakan resource Kelas
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ];
    }
}