import { useEffect, useState } from "react";
import { BASE_URL } from "../../App";

type TrackDetailsResource = {
  id: string;
  attributes: {
    title: string;
    lyrics: string | null;
  };
};

type PropsType = {
  selectedTrackId: string | null;
};

export function TrackDetail(props: PropsType) {
  //
  const { selectedTrackId } = props;

  const [selectedTrack, setSelectedTrack] =
    useState<TrackDetailsResource | null>(null);

  // загрузка деталей по изменению selectedTrackId
  useEffect(() => {
    if (!selectedTrackId) return;

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

      {/* {!selectedTrackId && (
        <div>
          <p>Трек не выбран</p>
        </div>
      )} */}

      {!selectedTrackId && !selectedTrack && (
        <div>
          <p>Трек не выбран</p>
        </div>
      )}

      {selectedTrackId && !selectedTrack && (
        <div>
          <p>Загрузка 1...</p>
        </div>
      )}

      {selectedTrackId &&
        selectedTrack &&
        selectedTrackId !== selectedTrack.id && (
          <div>
            <p>Загрузка 2... смена трека</p>
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
