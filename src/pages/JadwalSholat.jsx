import React, { useState, useEffect } from "react";
import axios from "axios";
import Input from "../components/atoms/Input";
import JadwalSholatCard from "../components/molecules/JadwalSholatCard";
import Button from "../components/atoms/Button";
import { Link } from "react-router-dom";
import { FaQuran, FaPray } from "react-icons/fa";

function JadwalSholat() {
  const [kota, setKota] = useState("Majalengka"); // Default kota
  const [suggestions, setSuggestions] = useState([]);
  const [jadwal, setJadwal] = useState(null);
  const [loading, setLoading] = useState(false);

  // Fetch jadwal sholat berdasarkan kota
  const fetchJadwalSholat = async (kota) => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://apidl.asepharyana.cloud/api/search/jadwal-sholat?kota=${kota}`
      );
      if (response.data.total > 0) {
        setJadwal(response.data.schedules[0]);
      } else {
        setJadwal(null);
      }
    } catch (error) {
      console.error("Error fetching jadwal sholat:", error);
    } finally {
      setLoading(false);
    }
  };

  // Fetch suggestions saat input berubah
  const fetchSuggestions = async (query) => {
    if (query.length > 2) {
      try {
        const response = await axios.get(
          `https://apidl.asepharyana.cloud/api/search/jadwal-sholat?kota=${query}`
        );
        if (response.data.total > 0) {
          const kotaList = response.data.schedules.map((item) => item.lokasi);
          setSuggestions(kotaList);
        } else {
          setSuggestions([]);
        }
      } catch (error) {
        console.error("Error fetching suggestions:", error);
      }
    } else {
      setSuggestions([]);
    }
  };

  // Handle perubahan input
  const handleInputChange = (e) => {
    const value = e.target.value;
    setKota(value);
    fetchSuggestions(value);
  };

  // Handle pilih suggestion
  const handleSelectSuggestion = (selectedKota) => {
    setKota(selectedKota);
    setSuggestions([]);
    fetchJadwalSholat(selectedKota);
  };

  // Fetch jadwal sholat default saat pertama kali render
  useEffect(() => {
    fetchJadwalSholat(kota);
  }, []);

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <Link to="/">
          <Button icon={<FaQuran />}>Baca Al-Quran</Button>
        </Link>
        <Link to="/doa">
          <Button icon={<FaPray />}>Kumpulan Doa</Button>
        </Link>
      </div>
      <h1 className="text-3xl font-bold mb-8">Jadwal Sholat</h1>

      <div className="mb-6">
        <Input
          value={kota}
          onChange={handleInputChange}
          suggestions={suggestions}
          onSelectSuggestion={handleSelectSuggestion}
        />
      </div>

      {loading ? (
        <div className="flex justify-center items-center min-h-[200px]">
          <div className="text-xl text-white">Loading...</div>
        </div>
      ) : jadwal ? (
        <JadwalSholatCard jadwal={jadwal} />
      ) : (
        <div className="text-white">Tidak ada jadwal sholat ditemukan.</div>
      )}
    </div>
  );
}

export default JadwalSholat;
