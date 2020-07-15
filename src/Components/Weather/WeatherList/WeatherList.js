import React from 'react';
import moment from 'moment';
import 'moment/locale/fr';
import './WeatherList.css';

moment().locale('fr');

function WeatherList({ list, timeZone }) {
  let weatherItems;
  if (list.length > 0) {
    let arr = [];
    let dayReference = moment
      .unix(list[0].dt + timeZone)
      .utc()
      .format('DD');
    let hour = moment
      .unix(list[0].dt + timeZone)
      .utc()
      .format('HH');

    if (hour >= 12) {
      arr.push(list[0]);
      dayReference = moment
        .unix(arr[0].dt + timeZone)
        .utc()
        .format('DD');
    } else {
      list.forEach((item) => {
        if (
          arr.length === 0 &&
          moment
            .unix(item.dt + timeZone)
            .utc()
            .format('HH') >= 12
        ) {
          arr.push(item);
          dayReference = moment
            .unix(item.dt + timeZone)
            .utc()
            .format('DD');
        }
      });
    }

    list.forEach((item) => {
      if (
        arr.length < 5 &&
        moment
          .unix(item.dt + timeZone)
          .utc()
          .format('DD') > dayReference &&
        moment
          .unix(item.dt + timeZone)
          .utc()
          .format('HH') >= 12
      ) {
        arr.push(item);

        dayReference++;
      }
    });

    weatherItems = arr.map((item, index) => (
      <li key={item.dt} className='WeatherItem'>
        {index === 0 ? (
          <h3 className='WeatherItem_date WeatherItem_date-now'>Aujourd'hui</h3>
        ) : (
          <h3 className='WeatherItem_date'>
            {moment.unix(item.dt).format('dddd')}
            <br />
            {moment.unix(item.dt).format('Do MMM YYYY')}
          </h3>
        )}

        <img
          src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
          alt={item.weather[0].description}
          className='WeatherItem_image'
        />
        <h5 className='WeatherItem_description'>
          {item.weather[0].description}
        </h5>
        <h4 className='WeatherItem_temp'>Température: {item.main.temp}°C</h4>
      </li>
    ));
  }
  return <ul className='WeatherList'>{weatherItems}</ul>;
}

export default WeatherList;
