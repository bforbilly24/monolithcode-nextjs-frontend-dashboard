"use client"

import { useState } from "react"
import Leaflet from "leaflet"
import { MapContainer, TileLayer, Marker } from "react-leaflet"

Leaflet.Icon.Default.imagePath = "../node_modules/leaflet"

delete Leaflet.Icon.Default.prototype._getIconUrl

Leaflet.Icon.Default.mergeOptions({
    iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png'
})


const BasicMap = ({ height = 350 }) => {
    const [state, setState] = useState({
        lat: 51.505,
        lng: -0.09,
        zoom: 13,
    });
    const position = [state.lat, state.lng];
    return (
        <MapContainer
            center={position}
            zoom={state.zoom}
            style={{ height: height }}
        >
            <TileLayer
                attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}></Marker>
        </MapContainer>
    )
}
export default BasicMap;
