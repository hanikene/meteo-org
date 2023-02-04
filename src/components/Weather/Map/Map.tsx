import GoogleMapReact from "google-map-react";
import { Coord } from "../../../data.types";
import "./Map.css";
const apiKey = import.meta.env.VITE_GOOGLE_API_KEY;

const Map = ({ coord }: { coord: Coord }) => {
  const position = { lat: coord.lat, lng: coord.lon };

  return <div />; // removed cause it is currently incompatible with React 18
  return (
    <div className="Map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: apiKey }}
        defaultCenter={position}
        defaultZoom={12}
      />
    </div>
  );
};

export default Map;
