import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, Login, MovieDetail, SignUp, UpcomingMovies } from "./pages";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/movies/:id" element={<MovieDetail />} />
        <Route path="/upcoming" element={<UpcomingMovies />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
