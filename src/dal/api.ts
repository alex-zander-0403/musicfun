import { mockDataTracks, mockDataTrack } from "./mockData.ts";

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
  return Promise.resolve(mockDataTracks);
}

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

export function getTrack() {
  return Promise.resolve(mockDataTrack);
}
