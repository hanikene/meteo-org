import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { WeatherList, Map } from '../';
import axios from 'axios';
import './Weather.css';

export class Weather extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {},
    };
  }

  async componentDidMount() {
    try {
      if (this.props.localisation) {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(this.getCoords);
        } else {
          this.props.history.push(`/404`);
        }
      } else {
        let callRequest = await axios.get(
          `https://api.openweathermap.org/data/2.5/forecast?q=${this.props.match.params.query}&appid=${process.env.REACT_OWM_API_KEY}&lang=fr&units=metric`
        );
        this.setState({ data: callRequest.data });
      }
    } catch (err) {
      this.props.history.push(`/404`);
    }
  }

  async componentWillReceiveProps(newProps) {
    try {
      if (this.props.localisation) {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(this.getCoords);
        } else {
          this.props.history.push(`/404`);
        }
      } else {
        let callRequest = await axios.get(
          `https://api.openweathermap.org/data/2.5/forecast?q=${this.props.match.params.query}&appid=${process.env.REACT_OWM_API_KEY}&lang=fr&units=metric`
        );
        this.setState({ data: callRequest.data });
      }
    } catch (err) {
      this.props.history.push(`/404`);
    }
  }

  getCoords = ({ coords }) => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${coords.latitude}&lon=${coords.longitude}&appid=${process.env.REACT_OWM_API_KEY}&lang=fr&units=metric`
      )
      .then(({ data }) => {
        this.setState({ data });
      });
  };

  render() {
    const { data } = this.state;
    return Object.keys(data).length > 0 && data.constructor === Object ? (
      <div className='Weather'>
        <h1 className='Weather_title'>
          {data.city.name}, {data.city.country}
        </h1>
        <WeatherList list={data.list} timeZone={data.city.timezone} />
        <Map coord={data.city.coord} />
      </div>
    ) : (
      <div className='Weather'>
        <h1 className='Weather_title'>Chargement</h1>
      </div>
    );
  }
}

export default withRouter(Weather);
