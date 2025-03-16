import React from "react";
import Text from "../atoms/Text";

function DoaCard({ doa }) {
  return (
    <div className="bg-black border border-gray-700 p-6 rounded-lg text-white">
      <div className="flex justify-between items-start mb-4">
        <div className="w-10 h-10 flex items-center justify-center bg-black border border-gray-700 rounded-full">
          {doa.id}
        </div>
        <Text variant="arabic">{doa.arab}</Text>
      </div>
      <Text variant="h1" className="mb-2 text-xl">
        {doa.judul}
      </Text>
      <Text variant="latin" className="mb-2">
        {doa.latin}
      </Text>
      <Text variant="translation">{doa.terjemah}</Text>
    </div>
  );
}

export default DoaCard;
