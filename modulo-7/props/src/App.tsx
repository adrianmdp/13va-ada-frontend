import { Button } from "./components";
import { About, Contact, Home, Services } from "./pages";

function App() {
  const page = "About";

  return (
    <>
      <Button text="About" variant="secondary" type="button" />
      <Button text="Contact" variant="dark" type="button" />
      <Button text="Home" variant="warning" type="button" />
      <Button text="Services" variant="secondary" type="button" />

      <About />
      <Contact />
      <Home />
      <Services />
    </>
  );
}

export default App;
