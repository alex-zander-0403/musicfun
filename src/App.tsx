const tracks = [
  {
    id: 1,
    title: "title 1",
    url: "https://hello-music/track-1.mp3",
  },
  {
    id: 2,
    title: "title 2",
    url: "https://hello-music/track-2.mp3",
  },
  {
    id: 3,
    title: "title 3",
    url: "https://hello-music/track-3.mp3",
  },
];

function App() {
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
            <li key={track.id}>
              <div>{track.title}</div>
              <audio src={track.url} controls></audio>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
