import { FC } from "react";
import { Movie } from "../movie";
import "./styles.scss";

interface Props {
  id: string;
  items: {
    id: number;
    title: string;
    description: string;
    image: string;
  }[];
  onItemdClicked?: (id: string | number) => void;
}

const Gallery: FC<Props> = ({ id, items, onItemdClicked }) => {
  return (
    <div id={id} className="gallery">
      <div className="gallery-items">
        {items.map((item) => (
          <Movie
            key={id + item.title}
            {...item}
            onClick={onItemdClicked ? () => onItemdClicked(item.id) : undefined}
          />
        ))}
      </div>
    </div>
  );
};

export { Gallery };
