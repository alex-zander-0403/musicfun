import { useTracks } from "../../bll/useTracks";
import { TrackItem } from "../TrackItem/TrackItem";
import styles from "./TrackList.module.css";

type PropsType = {
  selectedTrackId: string | null;
  onTrackSelect: (trackId: string | null) => void;
};

//
export function TrackList(props: PropsType) {
  const { selectedTrackId, onTrackSelect } = props;

  const { tracks } = useTracks();

  // оболочка сброс трека
  const handleResetClick = () => {
    onTrackSelect?.(null);
  };

  // оболочка выбора трека
  const handleTrackSelect = (trackId: string) => {
    onTrackSelect?.(trackId);
  };

  if (tracks === null) {
    return <div>Загрузка треков... (tracks === null)</div>;
  }

  if (tracks.length === 0) {
    return <div>Нет треков... (tracks.length === 0)</div>;
  }

  return (
    <ul className={styles.trackList}>
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
