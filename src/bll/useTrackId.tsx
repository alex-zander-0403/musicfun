import { useState } from "react";

export function useTrackId() {
  const [trackId, setTrackId] = useState<string | null>(null);

  return {
    trackId,
    setTrackId,
  };
}
