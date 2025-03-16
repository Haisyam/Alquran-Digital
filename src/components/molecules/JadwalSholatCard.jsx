import React from "react";

function JadwalSholatCard({ jadwal }) {
  return (
    <div className="bg-black border border-gray-700 p-6 rounded-lg text-white">
      <div className="my-2 mb-5">
        <h2 className="text-2xl font-bold">{jadwal.lokasi}</h2>
        <p className="text-gray-400">{jadwal.daerah}</p>
        <p className="text-gray-400">
          Tanggal: <span className="text-white">{jadwal.jadwal.tanggal}</span>
        </p>
      </div>
      <hr className="my-2 text-gray-900" />
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="text-gray-400">Imsak</p>
          <p className="text-white">{jadwal.jadwal.imsak}</p>
          <hr className="my-2 text-gray-900" />
        </div>
        <div>
          <p className="text-gray-400">Subuh</p>
          <p className="text-white">{jadwal.jadwal.subuh}</p>
          <hr className="my-2 text-gray-900" />
        </div>
        <div>
          <p className="text-gray-400">Terbit</p>
          <p className="text-white">{jadwal.jadwal.terbit}</p>
          <hr className="my-2 text-gray-900" />
        </div>
        <div>
          <p className="text-gray-400">Dhuha</p>
          <p className="text-white">{jadwal.jadwal.dhuha}</p>
          <hr className="my-2 text-gray-900" />
        </div>
        <div>
          <p className="text-gray-400">Dzuhur</p>
          <p className="text-white">{jadwal.jadwal.dzuhur}</p>
          <hr className="my-2 text-gray-900" />
        </div>
        <div>
          <p className="text-gray-400">Ashar</p>
          <p className="text-white">{jadwal.jadwal.ashar}</p>
          <hr className="my-2 text-gray-900" />
        </div>
        <div>
          <p className="text-gray-400">Maghrib</p>
          <p className="text-white">{jadwal.jadwal.maghrib}</p>
        </div>
        <div>
          <p className="text-gray-400">Isya</p>
          <p className="text-white">{jadwal.jadwal.isya}</p>
        </div>
      </div>
    </div>
  );
}

export default JadwalSholatCard;
