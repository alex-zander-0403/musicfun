import { useTrackDetail } from "../../bll/useTrackDetail";

type PropsType = {
  selectedTrackId: string | null;
};

//
export function TrackDetail(props: PropsType) {
  const { selectedTrackId } = props;

  const { trackDetails } = useTrackDetail(selectedTrackId);

  //
  return (
    <div>
      <h3>Details</h3>

      {!selectedTrackId && !trackDetails && (
        <div>
          <p>Трек не выбран</p>
        </div>
      )}

      {selectedTrackId && !trackDetails && (
        <div>
          <p>Загрузка 1...</p>
        </div>
      )}

      {selectedTrackId &&
        trackDetails &&
        selectedTrackId !== trackDetails.id && (
          <div>
            <p>Загрузка 2... смена трека</p>
          </div>
        )}

      {trackDetails && (
        <div>
          <h3>{trackDetails.attributes.title}</h3>
          <p>{trackDetails.attributes.lyrics ?? "Нет текста"}</p>
        </div>
      )}
    </div>
  );
}
