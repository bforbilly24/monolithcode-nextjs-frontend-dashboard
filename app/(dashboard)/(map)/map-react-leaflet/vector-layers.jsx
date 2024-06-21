"use client"
import { useState } from "react"
import Leaflet from "leaflet"

import { useThemeStore } from "@/store";
import { useTheme } from "next-themes";
import { themes } from "@/config/thems";

import {
    MapContainer,
    TileLayer,
    Popup,
    Circle,
    CircleMarker,
    Polygon,
    Polyline,
    Rectangle,
} from "react-leaflet"

const polyline = [
    [51.505, -0.09],
    [51.51, -0.1],
    [51.51, -0.12],
]

const multiPolyline = [
    [
        [51.5, -0.1],
        [51.5, -0.12],
        [51.52, -0.12],
    ],
    [
        [51.5, -0.05],
        [51.5, -0.06],
        [51.52, -0.06],
    ],
]

const polygon = [
    [51.515, -0.09],
    [51.52, -0.1],
    [51.52, -0.12],
]

const multiPolygon = [
    [
        [51.51, -0.12],
        [51.51, -0.13],
        [51.53, -0.13],
    ],
    [
        [51.51, -0.05],
        [51.51, -0.07],
        [51.53, -0.07],
    ],
]

const rectangle = [
    [51.49, -0.08],
    [51.5, -0.06],
]

const VectorLayersMap = ({ height = 350 }) => {

    const { theme: config, setTheme: setConfig } = useThemeStore();
    const { theme: mode } = useTheme();
    const theme = themes.find((theme) => theme.name === config);


    const [state, setState] = useState({
        lat: 51.505,
        lng: -0.09,
        zoom: 13,
    })

    const position = [state.lat, state.lng]
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
            <Circle center={position}
                fillColor={`hsla(${theme?.cssVars[mode === "dark" ? "dark" : "light"].primary})`}
                radius={200} />
            <CircleMarker
                center={[51.51, -0.12]}
                color={`hsla(${theme?.cssVars[mode === "dark" ? "dark" : "light"].warning})`}
                radius={20}>
                <Popup>Popup in CircleMarker</Popup>
            </CircleMarker>
            <Polyline
                color={`hsla(${theme?.cssVars[mode === "dark" ? "dark" : "light"].primary})`}
                positions={polyline} />
            <Polyline
                color={`hsla(${theme?.cssVars[mode === "dark" ? "dark" : "light"].info})`}
                positions={multiPolyline}
            />
            <Polygon
                color={`hsla(${theme?.cssVars[mode === "dark" ? "dark" : "light"].warning})`}
                positions={polygon}
            />
            <Polygon
                color={`hsla(${theme?.cssVars[mode === "dark" ? "dark" : "light"].success})`}
                positions={multiPolygon}
            />
            <Rectangle
                bounds={rectangle}
                color={`hsla(${theme?.cssVars[mode === "dark" ? "dark" : "light"].primary})`}
            />
        </MapContainer>
    )
}
export default VectorLayersMap;
