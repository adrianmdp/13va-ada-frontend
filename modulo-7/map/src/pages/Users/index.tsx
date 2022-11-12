import { FC } from "react";
import { inhabitants } from "../../data/inhabitants";

const Users: FC = () => {
  return (
    <div className="users">
      <table border={1}>
        <thead>
          <tr>
            <th>INDEX</th>
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
          {inhabitants.map((inhabitant, index) => {
            return (
              <tr key={inhabitant.name}>
                <td>{index}</td>
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
