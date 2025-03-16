import React from "react";
import Text from "../atoms/Text";
import Button from "../atoms/Button";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

function SurahHeader({ surah, onNavigate, currentId }) {
  return (
    <div className="bg-black p-6 rounded-lg mb-8 border border-gray-700">
      <div className="flex flex-col md:flex-row justify-between items-center mb-4">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <Text variant="h1">{surah.namaLatin}</Text>
          <Text variant="h2" className="my-2">
            {surah.nama}
          </Text>
          <Text variant="latin">
            {surah.arti} | {surah.jumlahAyat} Ayat | {surah.tempatTurun}
          </Text>
        </div>
        <div className="flex gap-4">
          <Button
            onClick={() => onNavigate(Number(currentId) - 1)}
            disabled={!surah.suratSebelumnya}
            icon={<FaArrowLeft />}
          >
            Previous Surah
          </Button>
          <Button
            onClick={() => onNavigate(Number(currentId) + 1)}
            disabled={!surah.suratSelanjutnya}
            icon={<FaArrowRight />}
          >
            Next Surah
          </Button>
        </div>
      </div>
    </div>
  );
}

export default SurahHeader;
