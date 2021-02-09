import axios from "axios";

const BASE_URL = `https://wdi-nyc-planets-api.herokuapp.com`;

export const fetchPlanets = async () => {
  const data = await axios.get(`${BASE_URL}/planets`);
  return data;
};

export const fetchRandomPlanet = async () => {
  const data = await axios.get(`${BASE_URL}/planets/random`);
  return data;
};
