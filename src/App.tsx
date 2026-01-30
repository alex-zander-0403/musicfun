import { useState } from "react";
import { TrackList } from "./components/TrackList/TrackList.js"; // предполагаемые пути
import { TrackDetail } from "./components/TrackDetail/TrackDetail.js"; // предполагаемые пути
// import { data } from "../mockData/mockTracks.json";

export const BASE_URL = "https://musicfun.it-incubator.app/api/1.0";

//
export function App() {
  const [selectedTrackId, setSelectedTrackId] = useState<string | null>(null);

  // выбор трека по клику
  const handleSelect = (trackId: string | null) => {
    setSelectedTrackId(trackId);
  };

  //
  return (
    <div>
      <h1>Hello, music!</h1>

      <div style={{ display: "flex", gap: "20px" }}>
        {/* плейлист */}
        <TrackList
          selectedTrackId={selectedTrackId}
          onTrackSelect={handleSelect}
        />

        {/* детали */}
        <TrackDetail selectedTrackId={selectedTrackId} />
      </div>
    </div>
  );
}
