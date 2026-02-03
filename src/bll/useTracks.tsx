import { useEffect, useState } from "react";
import { getAllTracks, TrackListItemResource } from "../dal/api";

//
export function useTracks() {
  const [tracks, setTracks] = useState<TrackListItemResource[] | null>(null);

  // базовая загрузка списка треков
  useEffect(() => {
    getAllTracks().then((json) => {
      setTracks(json.data);
    });
  }, []);

  return { tracks };
}
