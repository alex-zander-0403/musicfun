import { useEffect, useState } from "react";
import { getTrack, TrackDetailsResource } from "../dal/api";

//
export function useTrackDetail(trackId: string | null) {
  const [trackDetails, setTrackDetails] = useState<TrackDetailsResource | null>(
    null,
  );

  // загрузка деталей по изменению selectedTrackId
  useEffect(() => {
    if (!trackId) {
      setTrackDetails(null);
      return;
    }

    getTrack(trackId).then((json) => setTrackDetails(json.data));
  }, [trackId]);

  return { trackDetails, setTrackDetails };
}
