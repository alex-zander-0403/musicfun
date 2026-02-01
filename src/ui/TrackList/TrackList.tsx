import { useEffect, useState } from "react";
import { TrackItem } from "../TrackItem/TrackItem";
import { getAllTracks, TrackListItemResource } from "../../dal/api";

type PropsType = {
  selectedTrackId: string | null;
  onTrackSelect: (trackId: string | null) => void;
};

//
export function TrackList(props: PropsType) {
  const { selectedTrackId, onTrackSelect } = props;

  const [tracks, setTracks] = useState<TrackListItemResource[] | null>(null);

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
    getAllTracks().then((json) => {
      setTracks(json.data);
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
