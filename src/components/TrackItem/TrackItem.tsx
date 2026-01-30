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

type PropsType = {
  track: TrackListItemResource;
  isSelected: boolean;
  onSelect: (trackId: string) => void;
};

export function TrackItem(props: PropsType) {
  const { track, isSelected, onSelect } = props;

  const handleClick = (trackId: string) => {
    onSelect(trackId);
  };

  return (
    <li
      key={track.id}
      style={{
        border: isSelected ? "1px solid red" : "",
        padding: isSelected ? "10px" : "",
      }}
    >
      <div onClick={() => handleClick(track.id)}>{track.attributes.title}</div>

      <audio src={track.attributes.attachments[0].url} controls></audio>
    </li>
  );
}
