export function TrackList(props) {
  const { tracks, setSelectedTrack, selectedTrackId, setSelectedTrackId } =
    props;

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
