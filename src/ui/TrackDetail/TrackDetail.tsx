import { useEffect, useState } from "react";
import { getTrack, TrackDetailsResource } from "../../dal/api";

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
    if (!selectedTrackId) {
      setSelectedTrack(null);
      return;
    }

    getTrack(selectedTrackId).then((json) => setSelectedTrack(json.data));
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
