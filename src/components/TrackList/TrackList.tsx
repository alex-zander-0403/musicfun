import { useEffect, useState } from "react";
import { TrackItem } from "../TrackItem/TrackItem";
import { BASE_URL } from "../../App";

type TrackListResource = {
  id: string;
};

//
export function TrackList(props) {
  const { selectedTrackId, onTrackSelect } = props;

  const [tracks, setTracks] = useState<TrackListResource[] | null>(null);

  // оболочка сброс трека
  const handleResetClick = () => {
    onTrackSelect(null);
  };

  // оболочка выбора трека
  const handleTrackSelect = (trackId: string) => {
    onTrackSelect(trackId);
  };

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

  if (tracks === null) {
    return <div>Загрузка треков... (tracks === null)</div>;
  }

  if (tracks.length === 0) {
    return <div>Нет треков... (tracks.length === 0)</div>;
  }

  return (
    <ul>
      {/* сброс */}
      <button onClick={handleResetClick}>Сбросить</button>

      {tracks.map((track) => {
        return (
          <TrackItem
            key={track.id}
            track={track}
            isSelected={track.id === selectedTrackId}
            onSelect={handleTrackSelect}
          />
        );
      })}
    </ul>
  );
}
