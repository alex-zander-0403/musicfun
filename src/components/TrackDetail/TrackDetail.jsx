import { useEffect } from "react";
import { BASE_URL } from "../../App";

export function TrackDetail(props) {
  //
  const { selectedTrack, setSelectedTrack, selectedTrackId } = props;

  // загрузка деталей по изменению selectedTrackId
  useEffect(() => {
    if (!selectedTrackId) {
      return <div>Трек не выбран</div>;
    }

    fetch(`${BASE_URL}/playlists/tracks/${selectedTrackId}`, {
      headers: {
        "api-key": "16edba78-eeed-43ce-bc33-f0538130b694",
      },
    })
      .then((res) => res.json())
      .then((data) => setSelectedTrack(data.data));
  }, [selectedTrackId]);

  //
  return (
    <div>
      <h3>Details</h3>

      {!selectedTrackId && !selectedTrack && (
        <div>
          <p>Трек не выбран</p>
        </div>
      )}

      {selectedTrackId && !selectedTrack && (
        <div>
          <p>Загрузка 1 ...</p>
        </div>
      )}

      {selectedTrackId &&
        selectedTrack &&
        selectedTrackId !== selectedTrack.id && (
          <div>
            <p>Загрузка 2 ...</p>
          </div>
        )}

      {selectedTrack && (
        <div>
          <h3>{selectedTrack.attributes.title}</h3>
          <p>{selectedTrack.attributes.lyrics ?? "Нет текста"}</p>
        </div>
      )}
    </div>
  );
}
