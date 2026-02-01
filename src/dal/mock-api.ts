import { getTrackDetailOutput, getTrackListOutput } from "./api";
// import { mockData } from "./mockData.json";

// =========={ getTrack }==========

export function getTrack(selectedTrackId: string) {
  const track: Promise<getTrackDetailOutput> = Promise.resolve({
    data: {
      id: "e9fe1062-d95c-4f0d-9fa9-a151fa1e8ccd",
      type: "tracks",
      attributes: {
        title: "test",
        lyrics: "",
        user: {
          id: "228",
          name: "asdfghnatali_d34",
        },
        releaseDate: "2026-01-15T18:43:15.746Z",
        addedAt: "2026-01-15T18:43:26.895Z",
        updatedAt: "2026-01-29T17:34:07.027Z",
        duration: 0,
        attachments: [
          {
            id: "715df446-32bd-4145-863b-913580fed3af",
            addedAt: "2026-01-15T18:43:25.352Z",
            updatedAt: "2026-01-15T18:43:25.352Z",
            version: 1,
            url: "https://production-it-incubator.s3.eu-central-1.amazonaws.com/apihub-spotifun/Video/778e494a-2122-4452-9e04-f0d67e8e0eda_1.mp3",
            contentType: "audio/mpeg",
            originalName: "1.mp3",
            fileSize: 70217,
          },
        ],
        images: {
          main: [],
        },
        tags: [],
        artists: [],
        likesCount: 0,
        dislikesCount: 1,
        currentUserReaction: 0,
        publishedAt: "2026-01-15T18:43:44.486Z",
        isPublished: true,
      },
    },
  });

  return track;
}

// =========={ getAllTracks }==========

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
