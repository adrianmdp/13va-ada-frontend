import { Wall, Home } from "./pages";

function App() {
  const page = "Wall";

  return (
    <>
      {/* {page === "Home" && <Home />}
      {page === "Wall" && <Wall />} */}

      {page === "Home" && <Home />}
      {page === "Wall" && <Wall />}
    </>
  );
}

export default App;
