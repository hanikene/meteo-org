import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import HomepageImage from '../../images/homepage-image.png';
import './Homepage.css';

export class Homepage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: '',
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  keyPressHandler = ({ key }) => {
    if (key === 'Enter') {
      this.startSearch();
    }
  };

  startSearch = () => {
    this.props.history.push(`/q/${this.state.search}`);
  };

  render() {
    const { search } = this.state;

    return (
      <div className='Homepage'>
        <div className='Homepage_container'>
          <h1 className='Homepage_title-primary'>
            La météo du monde <br /> en un seul clique
          </h1>
          <h3 className='Homepage_title-secondary'>
            Commencez maintenant en choisissant une région
          </h3>
          <div className='Homepage_search'>
            <input
              className='Homepage_search-input'
              type='text'
              placeholder='Recherche...'
              name='search'
              value={search}
              onChange={this.handleChange}
              onKeyPress={this.keyPressHandler}
            />
            <button
              className='Homepage_search-button'
              onClick={this.startSearch}
            >
              Recherche
            </button>
          </div>
        </div>
        <div className='Homepage_image'>
          <img src={HomepageImage} alt='Homepage' />
        </div>
      </div>
    );
  }
}

export default withRouter(Homepage);
