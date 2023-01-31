import { FC } from "react";
import { Card } from "react-bootstrap";

interface Props {
  image: string;
  onClick?: () => void;
}

const Movie: FC<Props> = ({ image, onClick }) => {
  return (
    <Card className="gallery-item" onClick={onClick}>
      <Card.Img variant="top" src={image} className="gallery-image" />
    </Card>
  );
};

export { Movie };
