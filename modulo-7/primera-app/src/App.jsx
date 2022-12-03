import ButtonTest from "./components/Button";
import { ButtonBig, ButtonSmall } from "./components/Button";
import { Product } from "./Product";

function App() {
  return (
    <div className="App">
      <header className="App-header">Hola mundo</header>

      <label htmlFor="" id=""></label>

      <img src="" alt="" />

      <article></article>

      <ul>
        <li></li>
      </ul>

      <ButtonTest />
      <ButtonBig />
      <ButtonSmall />

      <Product titulo="Zoapatilla Adidas ZX750" categoria="Deportes" descripcion="Lorem Ipsum" codigo={1234} stock={200} precio={80} imagen="http://..."  />
      <Product  titulo="Zoapatilla Adidas ZX700" categoria="Deportes" descripcion="Lorem Ipsum" codigo={1235} stock={100} precio={70} imagen="http://..." />
      <Product />
      <Product />
      <Product />
      <Product />
    </div>
  );
}

export default App;
