import { FC, useState } from "react";
import { Carousel as CarouselBTS } from "react-bootstrap";
import "./styles.scss";

interface Props {
  id: string;
  items: {
    image: string;
    title: string;
    description: string;
  }[];
  size?: number;
}

const Carousel: FC<Props> = ({ id, items, size = 500 }) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };

  return (
    <CarouselBTS id={id} activeIndex={index} onSelect={handleSelect} fade>
      {items.map(({ image, title, description }) => (
        <CarouselBTS.Item key={id + title}>
          <img
            className="d-block w-100"
            src={image}
            alt="First slide"
            style={{ height: size }}
          />
          <CarouselBTS.Caption>
            <h3>{title}</h3>
            <p>{description}</p>
          </CarouselBTS.Caption>
        </CarouselBTS.Item>
      ))}
    </CarouselBTS>
  );
};

export { Carousel };
