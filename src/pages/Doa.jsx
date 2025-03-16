import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FaQuran, FaMosque } from "react-icons/fa";
import Button from "../components/atoms/Button";
import DoaCard from "../components/molecules/DoaCard";

function Doa() {
  const [doas, setDoas] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDoas = async () => {
      try {
        const response = await axios.get("https://open-api.my.id/api/doa");
        setDoas(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching doas:", error);
        setLoading(false);
      }
    };

    fetchDoas();
  }, []);

  const filteredDoas = doas.filter(
    (doa) =>
      doa.judul.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doa.terjemah.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-xl text-white">Loading...</div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <Link to="/">
          <Button icon={<FaQuran />}>Baca Al-Quran</Button>
        </Link>
        <Link to="/jadwal-sholat">
          <Button icon={<FaMosque />}>Jadwal Sholat</Button>
        </Link>
      </div>
      <h1 className="text-3xl font-bold mb-8">Kumpulan Doa Sehari-hari</h1>

      <div className="mb-6">
        <input
          type="text"
          placeholder="Cari doa..."
          className="w-full p-3 rounded-lg bg-black text-white border border-gray-700 focus:outline-none focus:border-white"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="space-y-6">
        {filteredDoas.map((doa) => (
          <DoaCard key={doa.id} doa={doa} />
        ))}
      </div>
    </div>
  );
}

export default Doa;
