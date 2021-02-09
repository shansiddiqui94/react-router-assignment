import { fetchPlanets } from "../service/Planetapi";
import { useState, useEffect } from "react";

function Planets(props) {
  const [planetList, setPlanetList] = useState([]);
  const planetData = async () => {
    const data = await fetchPlanets();
    setPlanetList(data.data.planets);
    console.log(data);
  };

  useEffect(() => {
    planetData();
  }, []);

  return (
    <div>
      <h1>Planet List</h1>
      {planetList.map((planet, index) => {
        return <p key={index}>{planet.name}</p>;
      })}
    </div>
  );
}

export default Planets;
