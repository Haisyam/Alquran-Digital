import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SurahDetail from "./pages/SurahDetail";
import Doa from "./pages/Doa";
import JadwalSholat from "./pages/JadwalSholat";
import Footer from "./components/molecules/Footer";

function App() {
  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/surah/:id" element={<SurahDetail />} />
          <Route path="/doa" element={<Doa />} />
          <Route path="/jadwal-sholat" element={<JadwalSholat />} />
        </Routes>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
