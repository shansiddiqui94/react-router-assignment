function PlanetDes(props) {
  return (
    <div className="planet-details">
      <h3>
        Planet <span>{props.name}</span>{" "}
      </h3>
      <p>
        Color: <span>{props.color}</span>
      </p>
      <p>
        {" "}
        Number of Moons : <span>{props.num_moons}</span>
      </p>
    </div>
  );
}

export default PlanetDes;
