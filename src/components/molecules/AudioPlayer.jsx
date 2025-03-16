import React from "react";
import Button from "../atoms/Button";
import Select from "../atoms/Select";
import { FaPlay, FaPause } from "react-icons/fa";

const QORI_OPTIONS = [
  { value: "01", label: "Abdullah Al-Juhany" },
  { value: "02", label: "Abdul Muhsin Al-Qasim" },
  { value: "03", label: "Abdurrahman as-Sudais" },
  { value: "04", label: "Ibrahim Al-Dossari" },
  { value: "05", label: "Misyari Rasyid Al-Afasi" },
];

function AudioPlayer({ selectedQori, onQoriChange, isPlaying, onPlayToggle }) {
  return (
    <div className="bg-black p-4 rounded-lg border border-gray-700 mb-8">
      <div className="flex items-center justify-between">
        <Select
          value={selectedQori}
          onChange={onQoriChange}
          options={QORI_OPTIONS}
        />
        <Button
          variant="round"
          onClick={onPlayToggle}
          icon={isPlaying ? <FaPause /> : <FaPlay />}
        />
      </div>
    </div>
  );
}

export default AudioPlayer;
