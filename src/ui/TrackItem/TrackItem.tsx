import { TrackListItemResource } from "../../dal/api.ts";
import styles from "./TrackItem.module.css";
import clsx from "clsx";

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

  const className = clsx({
    [styles.trackItem]: true,
    [styles.selected]: isSelected,
  });

  return (
    <li
      key={track.id}
      className={className}
      // style={{ border: isSelected ? "2px solid tomato" : "" }}
    >
      <div onClick={() => handleClick(track.id)}>{track.attributes.title}</div>

      <audio src={track.attributes.attachments[0].url} controls></audio>
    </li>
  );
}
