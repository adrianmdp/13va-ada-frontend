import { FC } from "react";
import { inhabitants } from "../../data/inhabitants";

const Users: FC = () => {

  const findInhabitant = inhabitants.find(inhabitant => inhabitant.name === "Cogwitz Chromeweaver")

  return (
    <div className="users">

      <table border={1}>
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>thumbnail</th>
            <th>age</th>
            <th>weight</th>
            <th>height</th>
            <th>hair_color</th>
            <th>professions</th>
            <th>friends</th>
          </tr>
        </thead>
        <tbody>
          {
            <tr key={findInhabitant?.name}>
              <td>{findInhabitant?.id}</td>
              <td>{findInhabitant?.name}</td>
              <td>
                <img
                  src={findInhabitant?.thumbnail}
                  alt={`Foto de ${findInhabitant?.name}`}
                  height="100"
                />
              </td>
              <td>{findInhabitant?.age}</td>
              <td>{findInhabitant?.weight}</td>
              <td>{findInhabitant?.height}</td>
              <td>{findInhabitant?.hair_color}</td>
              <td>{findInhabitant?.professions?.join(", ")}</td>
              <td>{findInhabitant?.friends?.join(", ")}</td>
            </tr>
          }
        </tbody>
      </table>

      <hr />

      <table border={1}>
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>thumbnail</th>
            <th>age</th>
            <th>weight</th>
            <th>height</th>
            <th>hair_color</th>
            <th>professions</th>
            <th>friends</th>
          </tr>
        </thead>
        <tbody>
          {inhabitants
            .filter(inhabitant => inhabitant.hair_color === "Pink")
            .map((inhabitant) => {
              return (
                <tr key={inhabitant.name}>
                  <td>{inhabitant.id}</td>
                  <td>{inhabitant.name}</td>
                  <td>
                    <img
                      src={inhabitant.thumbnail}
                      alt={`Foto de ${inhabitant.name}`}
                      height="100"
                    />
                  </td>
                  <td>{inhabitant.age}</td>
                  <td>{inhabitant.weight}</td>
                  <td>{inhabitant.height}</td>
                  <td>{inhabitant.hair_color}</td>
                  <td>{inhabitant.professions?.join(", ")}</td>
                  <td>{inhabitant.friends?.join(", ")}</td>
                </tr>
              );
            })
          }
        </tbody>
      </table>

      <hr />

      <table border={1}>
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>thumbnail</th>
            <th>age</th>
            <th>weight</th>
            <th>height</th>
            <th>hair_color</th>
            <th>professions</th>
            <th>friends</th>
          </tr>
        </thead>
        <tbody>
          {inhabitants.map((inhabitant) => {
            return (
              <tr key={inhabitant.name}>
                <td>{inhabitant.id}</td>
                <td>{inhabitant.name}</td>
                <td>
                  <img
                    src={inhabitant.thumbnail}
                    alt={`Foto de ${inhabitant.name}`}
                    height="100"
                  />
                </td>
                <td>{inhabitant.age}</td>
                <td>{inhabitant.weight}</td>
                <td>{inhabitant.height}</td>
                <td>{inhabitant.hair_color}</td>
                <td>{inhabitant.professions?.join(", ")}</td>
                <td>{inhabitant.friends?.join(", ")}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export { Users };
