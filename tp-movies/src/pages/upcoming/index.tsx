import { useEffect, useState } from "react";
import { Layout } from "../../components";
import { Movie } from "../../components";
import { loadImage } from "../../helpers/loadImage";
import { serviceMovies } from "../../services";
import { Movie as MovieType } from "../../types";

const UpcomingMovies = () => {
  const [items, setItems] = useState<MovieType[]>([]);

  useEffect(() => {
    serviceMovies.getUpcoming().then((data) => setItems(data));
  }, []);

  return (
    <Layout>
      <h2>Próximas películas</h2>
      {items.map((item) => (
        <Movie image={loadImage(item.poster_path)} />
      ))}
    </Layout>
  );
};

export { UpcomingMovies };
