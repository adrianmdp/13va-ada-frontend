import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { Layout } from "../../components";
import { loadImage } from "../../helpers/loadImage";
import { serviceMovies } from "../../services";
import { Movie } from "../../types";

const MovieDetail = () => {
  const [movie, setMovie] = useState<Movie>();

  const { id } = useParams();

  useEffect(() => {
    id && serviceMovies.get(id).then((data) => setMovie(data));
  }, [id]);

  return (
    <Layout>
      <Container>
        <Row>
          <Col>
            <img
              src={loadImage(movie?.poster_path!)}
              alt={movie?.title}
              className="img-fluid"
            />
          </Col>
          <Col>
            <h2>{movie?.title}</h2>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export { MovieDetail };
