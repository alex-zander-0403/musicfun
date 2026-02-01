import { useState } from "react";
import { TrackList } from "./ui/TrackList/TrackList.js";
import { TrackDetail } from "./ui/TrackDetail/TrackDetail.js";

export const BASE_URL = "https://musicfun.it-incubator.app/api/1.0";

//
export function App() {
  const [selectedTrackId, setSelectedTrackId] = useState<string | null>(null);

  // выбор трека по клику
  const handleSelect = (trackId: string | null): void => {
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
