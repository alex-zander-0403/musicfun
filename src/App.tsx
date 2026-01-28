import { useEffect, useState } from "react";
import { TrackList } from "./components/TrackList/TrackList.js"; // предполагаемые пути
import { TrackDetail } from "./components/TrackDetail/TrackDetail.js"; // предполагаемые пути
// import { data } from "../mockData/mockTracks.json";

export const BASE_URL = "https://musicfun.it-incubator.app/api/1.0";

//
export function App() {
  const [tracks, setTracks] = useState(null);
  const [selectedTrack, setSelectedTrack] = useState(null);
  const [selectedTrackId, setSelectedTrackId] = useState(null);

  // базовая загрузка списка треков
  useEffect(() => {
    fetch(`${BASE_URL}/playlists/tracks`, {
      headers: {
        "api-key": "16edba78-eeed-43ce-bc33-f0538130b694",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setTracks(data.data);
      });
  }, []);

  //
  if (tracks === null) {
    return <div>Загрузка... (tracks === null)</div>;
  }

  if (tracks.length === 0) {
    return <div>Нет треков... (tracks.length === 0)</div>;
  }

  //
  return (
    <div>
      <h1>Hello, music!</h1>

      <div style={{ display: "flex", gap: "20px" }}>
        {/* плейлист */}
        <TrackList
          tracks={tracks}
          setSelectedTrack={setSelectedTrack}
          selectedTrackId={selectedTrackId}
          setSelectedTrackId={setSelectedTrackId}
        />

        {/* детали */}
        <TrackDetail
          selectedTrack={selectedTrack}
          setSelectedTrack={setSelectedTrack}
          selectedTrackId={selectedTrackId}
        />
      </div>
    </div>
  );
}
