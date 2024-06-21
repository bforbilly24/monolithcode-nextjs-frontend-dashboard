"use client"
import GoogleMapReact from 'google-map-react';

const Map = ({ height = 300, defaultProps }) => {
  const GoogleMapApiKey = "AIzaSyAbvyBxmMbFhrzP9Z8moyYr6dCr-pzjhBE";

  return (
    <div style={{ height: height, width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: GoogleMapApiKey }}
        defaultCenter={defaultProps}
        defaultZoom={11}
      >

      </GoogleMapReact>
    </div>
  );
};

export default Map;