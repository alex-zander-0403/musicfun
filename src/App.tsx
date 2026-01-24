import { useEffect, useState } from "react";
import { data } from "../mockData/mockTracks.json";

// const mockTracks = [
//   {
//     id: 1,
//     title: "title 1",
//     url: "https://hello-music/track-1.mp3",
//   },
//   {
//     id: 2,
//     title: "title 2",
//     url: "https://hello-music/track-2.mp3",
//   },
//   {
//     id: 3,
//     title: "title 3",
//     url: "https://hello-music/track-3.mp3",
//   },
// ];

function App() {
  const [tracks, setTracks] = useState(null);
  const [selectedTrackId, setSelectedTrackId] = useState(null);

  useEffect(() => {
    // fetch("", {
    //   headers: {
    //     "api-key": "16edba78-eeed-43ce-bc33-f0538130b694",
    //   },
    // })
    //   .then((res) => res.json())
    //   .then((data) => setTracks(data.data));

    setTimeout(() => {
      setTracks(data);
      console.log(data);
    }, 1000);
  }, []);

  if (tracks === null) {
    return <div>loading...</div>;
  }

  if (tracks.length === 0) {
    return <div>No tracks</div>;
  }

  return (
    <div>
      <h1>Hello, music!</h1>
      <ul>
        {tracks.map((track) => {
          return (
            <li
              key={track.id}
              style={{
                border: track.id === selectedTrackId ? "1px solid red" : "",
                padding: track.id === selectedTrackId ? "10px" : "",
              }}
            >
              <div onClick={() => setSelectedTrackId(track.id)}>
                {track.attributes.title}
              </div>
              <audio src={track.attributes.attachments[0].url} controls></audio>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
