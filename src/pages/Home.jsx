import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Button from "../components/atoms/Button";
import { FaPray, FaMosque } from "react-icons/fa";

function Home() {
  const [surahs, setSurahs] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSurahs = async () => {
      try {
        const response = await axios.get("https://equran.id/api/v2/surat");
        setSurahs(response.data.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching surahs:", error);
        setLoading(false);
      }
    };

    fetchSurahs();
  }, []);

  const filteredSurahs = surahs.filter(
    (surah) =>
      surah.namaLatin.toLowerCase().includes(searchQuery.toLowerCase()) ||
      surah.nama.includes(searchQuery)
  );

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <Link to="/doa">
          <Button icon={<FaPray />}>Kumpulan Doa</Button>
        </Link>
        <Link to="/jadwal-sholat">
          <Button icon={<FaMosque />}>Jadwal Sholat</Button>
        </Link>
      </div>
      <h1 className="text-3xl font-bold mb-8">Al-Quran Digital</h1>
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search surah..."
          className="w-full p-3 rounded-lg bg-black text-white border border-gray-700 focus:outline-none focus:border-white"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredSurahs.map((surah) => (
          <Link
            key={surah.nomor}
            to={`/surah/${surah.nomor}`}
            className="bg-black p-4 rounded-lg hover:bg-gray-700 transition-colors border border-gray-700"
          >
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 flex items-center justify-center bg-black border border-gray-700 rounded-full">
                {surah.nomor}
              </div>
              <div className="text-right">
                <h2 className="text-2xl font-bold">{surah.nama}</h2>
                <p className="text-gray-400">{surah.arti}</p>
              </div>
            </div>
            <div className="mt-2 text-right">
              <span className="text-lg font-arabic">{surah.namaLatin}</span>
            </div>
            <div className="mt-2 text-sm text-gray-400">
              {surah.jumlahAyat} Ayat | {surah.tempatTurun}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;
