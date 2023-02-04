import moment from "moment";
import { Forecast } from "./data.types";

export const updatedForecastsTime = (
  forecasts: Forecast[],
  timeZone: number
) => {
  let updatedForecasts: Forecast[] = [];
  let dayReference = parseInt(
    moment
      .unix(forecasts[0].dt + timeZone)
      .utc()
      .format("DD")
  );
  let hour = parseInt(
    moment
      .unix(forecasts[0].dt + timeZone)
      .utc()
      .format("HH")
  );

  if (hour >= 12) {
    updatedForecasts.push(forecasts[0]);
    dayReference = parseInt(
      moment
        .unix(updatedForecasts[0].dt + timeZone)
        .utc()
        .format("DD")
    );
  } else {
    forecasts.forEach((forecast) => {
      const forcastHour = parseInt(
        moment
          .unix(forecast.dt + timeZone)
          .utc()
          .format("HH")
      );
      if (updatedForecasts.length === 0 && forcastHour >= 12) {
        updatedForecasts.push(forecast);
        dayReference = parseInt(
          moment
            .unix(forecast.dt + timeZone)
            .utc()
            .format("DD")
        );
      }
    });
  }

  forecasts.forEach((forecast) => {
    const forecastHour = parseInt(
      moment
        .unix(forecast.dt + timeZone)
        .utc()
        .format("HH")
    );
    const ForecastDay = parseInt(
      moment
        .unix(forecast.dt + timeZone)
        .utc()
        .format("DD")
    );

    if (
      updatedForecasts.length < 5 &&
      ForecastDay > dayReference &&
      forecastHour
    ) {
      updatedForecasts.push(forecast);
      dayReference++;
    }
  });

  return updatedForecasts;
};
