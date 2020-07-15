import React from 'react';
import { GoogleMap, useLoadScript } from '@react-google-maps/api';
import './Map.css';

const libraries = ['places'];

const Map = ({ coord }) => {
  const mapContainerStyles = { height: '100%', width: '100%' };
  const position = { lat: coord.lat, lng: coord.lon };

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_GOOGLE_MAPS_API_KEY,
    libraries,
  });

  if (loadError) return <h1>error loading map</h1>;
  if (!isLoaded) return <h1>not loaded</h1>;

  return (
    <div className='Map'>
      <GoogleMap
        mapContainerStyle={mapContainerStyles}
        zoom={12}
        center={position}
      />
    </div>
  );
};

export default Map;
