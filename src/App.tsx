import { useEffect, useState } from "react";
// import { data } from "../mockData/mockTracks.json";

const BASE_URL = "https://musicfun.it-incubator.app/api/1.0";

//
function App() {
  const [tracks, setTracks] = useState(null);
  const [selectedTrackId, setSelectedTrackId] = useState(null);
  const [selectedTrack, setSelectedTrack] = useState(null);

  const isLoading = selectedTrackId && !selectedTrack;

  const getTrackDetails = (trackId) => {
    fetch(`${BASE_URL}/playlists/tracks/${trackId}`, {
      headers: {
        "api-key": "16edba78-eeed-43ce-bc33-f0538130b694",
      },
    })
      .then((res) => res.json())
      .then((data) => setSelectedTrack(data.data));
  };

  //
  useEffect(() => {
    fetch(`${BASE_URL}/playlists/tracks`, {
      headers: {
        "api-key": "16edba78-eeed-43ce-bc33-f0538130b694",
      },
    })
      .then((res) => res.json())
      .then((data) => setTracks(data.data));
  }, []);

  if (tracks === null) {
    return <div>loading...</div>;
  }

  if (tracks.length === 0) {
    return <div>No tracks</div>;
  }

  return (
    <div>
      <h1>Hello, music!</h1>
      <div style={{ display: "flex", gap: "20px" }}>
        {/* список */}
        <ul>
          <button
            onClick={() => {
              setSelectedTrackId(null);
              setSelectedTrack(null);
            }}
          >
            reset
          </button>
          {tracks.map((track) => {
            return (
              <li
                key={track.id}
                style={{
                  border: track.id === selectedTrackId ? "1px solid red" : "",
                  padding: track.id === selectedTrackId ? "10px" : "",
                }}
              >
                <div
                  onClick={() => {
                    setSelectedTrackId(track.id);
                    getTrackDetails(track.id);
                  }}
                >
                  {track.attributes.title}
                </div>
                <audio
                  src={track.attributes.attachments[0].url}
                  controls
                ></audio>
              </li>
            );
          })}
        </ul>

        {/* детали */}
        <div>
          <h3>Details</h3>

          {!selectedTrackId && !selectedTrack && (
            <div>
              <p>Трек не выбран</p>
            </div>
          )}

          {selectedTrackId && !selectedTrack && (
            <div>
              <p>Загрузка...</p>
            </div>
          )}

          {selectedTrackId &&
            selectedTrack &&
            selectedTrackId !== selectedTrack.id && (
              <div>
                <p>Загрузка 2...</p>
              </div>
            )}

          {selectedTrack && (
            <div>
              <h3>{selectedTrack.attributes.title}</h3>
              <p>{selectedTrack.attributes.lyrics ?? "Нет текста"}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
