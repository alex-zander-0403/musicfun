import { TrackItem } from "../TrackItem/TrackItem";

export function TrackList(props) {
  const { tracks, setSelectedTrack, selectedTrackId, setSelectedTrackId } =
    props;

  // сброс трека по клику
  const handleClickReset = () => {
    setSelectedTrackId(null);
    setSelectedTrack(null);
  };

  // выбор трека по клику
  const handleClick = (trackId) => {
    setSelectedTrackId(trackId);
  };

  //
  return (
    <ul>
      {/* сброс */}
      <button onClick={handleClickReset}>Сбросить</button>

      {tracks.map((track) => {
        return (
          <TrackItem
            key={track.id}
            track={track}
            isSelected={track.id === selectedTrackId}
            onSelect={handleClick}
          />
        );
      })}
    </ul>
  );
}
