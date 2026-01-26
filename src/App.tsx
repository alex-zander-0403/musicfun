import { useState } from "react";
// import { data } from "../mockData/mockTracks.json";

export const BASE_URL = "https://musicfun.it-incubator.app/api/1.0";

//
function App() {
  const [tracks, setTracks] = useState(null);
  const [selectedTrack, setSelectedTrack] = useState(null);
  const [selectedTrackId, setSelectedTrackId] = useState(null);

  return (
    <div>
      <h1>Hello, music!</h1>
      <div style={{ display: "flex", gap: "20px" }}>
        {/* список */}
        <TrackList
          tracks={tracks}
          setTracks={setTracks}
          setSelectedTrack={setSelectedTrack}
          setSelectedTrackId={setSelectedTrackId}
        />

        {/* детали */}
        <TrackDetail
          selectedTrack={selectedTrack}
          selectedTrackId={selectedTrackId}
        />
      </div>
    </div>
  );
}

export default App;
