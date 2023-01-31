import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { Carousel, Layout } from "../../components";
import { Gallery } from "../../components/common";
import { serviceMovies } from "../../services";
import { Movie } from "../../types";

const Home = () => {
  const [popular, setPopular] = useState<Movie[]>([]);
  const [upcoming, setUpcoming] = useState<Movie[]>([]);
  const [topRated, setTopRated] = useState<Movie[]>([]);

  const navigate = useNavigate();

  useEffect(() => {
    serviceMovies.getUpcoming().then((data) => setUpcoming(data));
    serviceMovies.getPopular().then((data) => setPopular(data));
    serviceMovies.getTopRated().then((data) => setTopRated(data));
  }, []);

  return (
    <Layout>
      <Carousel
        id="now-playing-movies-carousel"
        items={upcoming
          .slice(0, 5)
          .map(({ title, backdrop_path, overview }) => ({
            title,
            image: `https://image.tmdb.org/t/p/original/${backdrop_path}`,
            description: overview,
          }))}
      />

      <section id="now-playing-movies" className="py-4">
        <Container>
          <h2>Películas populares</h2>
          <Gallery
            id="now-playing-movies-gallery"
            items={popular.map(({ id, title, poster_path, overview }) => ({
              id,
              title,
              image: `https://image.tmdb.org/t/p/original/${poster_path}`,
              description: overview,
            }))}
            onItemdClicked={(id) => navigate(`/movies/${id.toString()}`)}
          />
        </Container>
      </section>

      <section>
        <Container>
          <h2>Mejores películas</h2>
          <Gallery
            id="now-playing-movies-gallery"
            items={topRated.map(({ id, title, poster_path, overview }) => ({
              id,
              title,
              image: `https://image.tmdb.org/t/p/original/${poster_path}`,
              description: overview,
            }))}
            onItemdClicked={(id) => navigate(`/movies/${id.toString()}`)}
          />
        </Container>
      </section>
    </Layout>
  );
};

export { Home };
