import { fetchRandomPlanet } from "../service/Planetapi";
import { useState, useEffect } from "react";
import PlanetDes from "./Planetdescrip";
// dnt map the return.
function RandomPlanet(props) {
  const [random, setRandom] = useState([]);

  const randomData = async () => {
    const data = await fetchRandomPlanet();
    setRandom(data.data.planet);
    console.log(data);
  };

  useEffect(() => {
    randomData();
  }, []);
  return (
    <div className="Rando">
      <h1>Random Planet</h1>
      <button onClick={randomData}>See Planet</button>

      {random.map((RandoPlanet, index) => {
        return (
          <div>
            <h3>Random Celestial</h3>
            <PlanetDes {...RandoPlanet} key={index} />
          </div>
        );
      })}
    </div>
  );
}

export default RandomPlanet;
