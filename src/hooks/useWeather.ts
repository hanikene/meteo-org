import { useState, useEffect } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import axios from "axios";
import { Data } from "../data.types";
const API_KEY = import.meta.env.VITE_OPEN_WEATHER_API_KEY;
const API_URL = "https://api.openweathermap.org/data/2.5/forecast?";

const useWeather = () => {
  const navigate = useNavigate();
  const params = useParams();
  const location = useLocation();
  const [data, setData] = useState<Data | undefined>(undefined);

  useEffect(() => {
    if (location.pathname === "/gps")
      navigator.geolocation.getCurrentPosition(getWeatherWithCoords);
    else getWeather();
  }, [location.pathname]);

  const getWeather = async () => {
    try {
      const response = await axios.get(
        `${API_URL}q=${params.query}&appid=${API_KEY}&lang=fr&units=metric`
      );
      setData(response.data);
    } catch (err) {
      navigate(`/404`);
    }
  };

  const getWeatherWithCoords = async (geoPos: GeolocationPosition) => {
    try {
      const { latitude, longitude } = geoPos.coords;
      const response = await axios.get(
        `${API_URL}lat=${latitude}&lon=${longitude}&appid=${API_KEY}&lang=fr&units=metric`
      );
      setData(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  return data;
};

export default useWeather;
