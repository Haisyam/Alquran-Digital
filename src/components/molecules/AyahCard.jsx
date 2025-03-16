import React from "react";
import Button from "../atoms/Button";
import Text from "../atoms/Text";
import { FaPlay, FaPause } from "react-icons/fa";

function AyahCard({ ayah, isPlaying, onPlay }) {
  return (
    <div className="bg-black p-6 rounded-lg border border-gray-700">
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 flex items-center justify-center bg-black border border-gray-700 rounded-full">
            {ayah.nomorAyat}
          </div>
          <Button
            variant="round"
            onClick={() => onPlay(ayah)}
            icon={isPlaying ? <FaPause /> : <FaPlay />}
          />
        </div>
        <Text variant="arabic">{ayah.teksArab}</Text>
      </div>
      <Text variant="latin" className="mb-2">
        {ayah.teksLatin}
      </Text>
      <Text variant="translation">{ayah.teksIndonesia}</Text>
    </div>
  );
}

export default AyahCard;
