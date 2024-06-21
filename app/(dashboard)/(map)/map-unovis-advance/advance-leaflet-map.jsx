"use client"
import { useCallback, useMemo, useRef } from 'react'
import { LeafletMap } from '@unovis/ts'
import { VisLeafletMap } from '@unovis/react'
import { data, totalEvents, mapStyleLight, mapStyleDark } from './data'

import { useThemeStore } from "@/store";
import { useTheme } from "next-themes";
import { themes } from "@/config/thems";

const AdvancedLeafletMap = ({ height = 350 }) => {

    const { theme: config, setTheme: setConfig } = useThemeStore();
    const { theme: mode } = useTheme();
    const theme = themes.find((theme) => theme.name === config);

    const mapRef = useRef(null);
    const pointId = (d) => d.name;
    const pointLatitude = (d) => d.latitude;
    const pointLongitude = (d) => d.longitude;
    const pointBottomLabel = (d) => d.name;
    const pointRadius = (d) => 10 + 4 * Math.sqrt((d.normal + (d.blocked || 0)) / totalEvents);
    const pointLabel = (d) => `${((d.blocked + d.normal) / 1000).toFixed(1)}K`;
    const clusterBottomLabel = (d) => `${d.point_count} sites`;

    const colorMap = {
        normal: { color: `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].primary})` },
        blocked: { color: `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].info})` },
    }

    const events = {
        [LeafletMap.selectors.point]: {
            click: d => {
                if (!d.properties?.cluster) mapRef.current?.component.zoomToPointById(d.id, true, 5)
            },
        },
        [LeafletMap.selectors.background]: {
            click: () => { mapRef.current?.component.unselectPoint() },
        },
    }

    const attribution = [
        '<a href="https://www.maptiler.com/copyright/" target="_blank">MapTiler</a>',
        '<a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap contributors</a>',
    ]

    return (
        <div className={`w-full  overflow-hidden relative h-[${height}px]`}>
            <VisLeafletMap
                ref={mapRef}
                data={data}
                style={mapStyleLight}
                styleDarkTheme={mapStyleDark}
                pointId={useCallback(pointId, [])}
                pointLatitude={useCallback(pointLatitude, [])}
                pointLongitude={useCallback(pointLongitude, [])}
                pointLabel={useCallback(pointLabel, [])}
                pointBottomLabel={useCallback(pointBottomLabel, [])}
                pointRadius={useCallback(pointRadius, [])}
                colorMap={useMemo(() => colorMap, [])}
                clusterRadius={useCallback(pointRadius, [])}
                clusterLabel={useCallback(pointLabel, [])}
                clusterBottomLabel={useCallback(clusterBottomLabel, [])}
                clusteringDistance={85}
                clusterExpandOnClick={true}
                attribution={useMemo(() => attribution, [])}
                events={useMemo(() => events, [])}
            />
        </div>
    )
}

export default AdvancedLeafletMap;