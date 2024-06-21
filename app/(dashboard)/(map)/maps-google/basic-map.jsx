"use client"
import GoogleMapReact from 'google-map-react';
import { GoogleMapApiKey } from './constant';

const BasicMap = ({ height = 500 }) => {
    const defaultProps = {
        center: {
            lat: 10.99835602,
            lng: 77.01502627
        },
        zoom: 11
    };

    return (
        <div style={{ height: height, width: '100%' }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: GoogleMapApiKey }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
            >
            </GoogleMapReact>
        </div>
    );
};

export default BasicMap;