import { BASE_URL } from "../App";

// =========={ getTrack }==========

export type TrackDetailsResource = {
  id: string;
  attributes: {
    title: string;
    lyrics: string | null;
  };
};

export type getTrackDetailOutput = {
  data: TrackDetailsResource;
};

export function getTrack(selectedTrackId: string) {
  const track: Promise<getTrackDetailOutput> = fetch(
    `${BASE_URL}/playlists/tracks/${selectedTrackId}`,
    {
      headers: {
        "api-key": "16edba78-eeed-43ce-bc33-f0538130b694",
      },
    },
  ).then((res) => res.json());

  return track;
}

// =========={ getAllTracks }==========

type TrackAttachment = {
  url: string;
};

type TrackListItemAttributes = {
  title: string;
  attachments: TrackAttachment[];
};

export type TrackListItemResource = {
  id: string;
  attributes: TrackListItemAttributes;
};

export type getTrackListOutput = {
  data: TrackListItemResource[];
};

export function getAllTracks() {
  const tracks: Promise<getTrackListOutput> = fetch(
    `${BASE_URL}/playlists/tracks`,
    {
      headers: {
        "api-key": "16edba78-eeed-43ce-bc33-f0538130b694",
      },
    },
  ).then((res) => res.json());

  return tracks;
}
