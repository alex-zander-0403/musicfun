import { TrackList } from "./ui/TrackList/TrackList.js";
import { TrackDetail } from "./ui/TrackDetail/TrackDetail.js";
import { useTrackId } from "./bll/useTrackId.js";

export const BASE_URL = "https://musicfun.it-incubator.app/api/1.0";

//
export function App() {
  const { trackId, setTrackId } = useTrackId();

  // выбор трека по клику
  const handleSelect = (trackId: string | null): void => {
    setTrackId(trackId);
  };

  return (
    <div>
      <h1>Hello, music!</h1>

      <div style={{ display: "flex", gap: "20px" }}>
        {/* плейлист */}
        <TrackList selectedTrackId={trackId} onTrackSelect={handleSelect} />

        {/* детали */}
        <TrackDetail selectedTrackId={trackId} />
      </div>
    </div>
  );
}
