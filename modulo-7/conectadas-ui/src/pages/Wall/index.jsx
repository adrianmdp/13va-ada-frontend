import { Footer, Header, Main } from "../../components/layout";

const Wall = () => {
  const date = new Date("2022-10-10");
  const date2 = new Date("2022-10-15");
  const now = new Date();

  // if(date < now && date < date2) {

  // }

  if (date < now && false) {
    console.log("Entró en hola mundo");
  } else {
    console.log("Entró en else");
  }

  console.log(
    false ||
      5 === "5" ||
      "Soy un true" == "Soy un false" ||
      "Hola" == "Chau" ||
      undefined ||
      undefined
  );

  console.log(
    (false &&
      5 === "5" &&
      "Soy un true" == "Soy un false" &&
      "Hola" == "Chau") ||
      undefined ||
      undefined
  );

  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
};

export { Wall };
