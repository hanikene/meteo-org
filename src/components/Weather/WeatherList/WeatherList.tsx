import moment from "moment";
import "moment/locale/fr";
import "./WeatherList.css";
import { Forecast } from "../../../data.types";
import { updatedForecastsTime } from "../../../helpers";

moment().locale("fr");

interface WeatherListProps {
  forecasts: Forecast[];
  timeZone: number;
}

const WeatherList = ({ forecasts, timeZone }: WeatherListProps) => {
  if (forecasts.length < 1) return <ul className="WeatherList" />;
  const updatedForecasts = updatedForecastsTime(forecasts, timeZone);
  const weatherItems = updatedForecasts.map((forecast, index) => (
    <WeatherItem key={index} forecast={forecast} id={index} />
  ));

  return <ul className="WeatherList">{weatherItems}</ul>;
};

const WeatherItem = ({ forecast, id }: { forecast: Forecast; id: number }) => {
  return (
    <li key={forecast.dt} className="WeatherItem">
      {id === 0 ? (
        <h3 className="WeatherItem_date WeatherItem_date-now">Aujourd'hui</h3>
      ) : (
        <h3 className="WeatherItem_date">
          {moment.unix(forecast.dt).format("dddd")}
          <br />
          {moment.unix(forecast.dt).format("Do MMM YYYY")}
        </h3>
      )}

      <img
        src={`https://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`}
        alt={forecast.weather[0].description}
        className="WeatherItem_image"
      />
      <h5 className="WeatherItem_description">
        {forecast.weather[0].description}
      </h5>
      <h4 className="WeatherItem_temp">Température: {forecast.main.temp}°C</h4>
    </li>
  );
};

export default WeatherList;
