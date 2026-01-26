import { useEffect } from "react";
import { BASE_URL } from "../../App";

//
export function TrackList(props) {
  const { tracks, setTracks, setSelectedTrack, setSelectedTrackId } = props;

  // базовая загрузка
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
    <ul>
      <button
        onClick={() => {
          setSelectedTrackId(null);
          setSelectedTrack(null);
        }}
      >
        Сбросить
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
              }}
            >
              {track.attributes.title}
            </div>

            <audio src={track.attributes.attachments[0].url} controls></audio>
          </li>
        );
      })}
    </ul>
  );
}
