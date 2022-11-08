// const App = () => {
//   return <div className="App">Hola mundo</div>;
// }

import Button from "./components/Button";

function App() {
  const clase = "btn";
  const saludo = "Hola";

  function saludar(nombre: string) {
    return saludo + " " + nombre;
  }

  return (
    <>
      <div>
        <div className="App">{saludar("Adrian")}</div>
        <Button clase="btn" texto="Enviar" tipo="submit" />
        <Button clase="btn-primary" texto="Hola mundo" tipo="reset" />
        <Button />
      </div>
      <div>Otro div</div>
    </>
  );
}

export default App;
