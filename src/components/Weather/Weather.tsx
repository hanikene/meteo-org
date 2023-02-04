import { WeatherList, Map } from "..";
import "./Weather.css";
import useWeather from "../../hooks/useWeather";
import "./Weather.css";

const Weather = () => {
  const data = useWeather();

  return data ? (
    <div className="Weather">
      <h1 className="Weather_title">
        {data.city.name}, {data.city.country}
      </h1>
      <WeatherList forecasts={data.list} timeZone={data.city.timezone} />
      <Map coord={data.city.coord} />
    </div>
  ) : (
    <div className="Weather">
      <h1 className="Weather_title">Chargement</h1>
    </div>
  );
};

export default Weather;
