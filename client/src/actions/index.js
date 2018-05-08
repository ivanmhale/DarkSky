import { GET_WEATHER } from "./types";
import axios from "axios";

export const weatherByCoords = position => {

  const url = `/forecast/${position.latitude},${position.longitude}`;
  const request = axios.get(url);
  return {
    type: GET_WEATHER,
    payload: request
  };
};
