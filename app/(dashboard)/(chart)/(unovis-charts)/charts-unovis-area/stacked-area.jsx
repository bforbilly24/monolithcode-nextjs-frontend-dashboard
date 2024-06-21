"use client"
import { useCallback } from 'react';
import { VisXYContainer, VisAxis, VisArea, VisXYLabels } from '@unovis/react';
import { stackedData } from './data';

import { useTheme } from "next-themes";
import { useThemeStore } from "@/store";
import { themes } from "@/config/thems";
export default function StackedArea() {

        const { theme: config, setTheme: setConfig } = useThemeStore();
        const { theme: mode } = useTheme();
        const theme = themes.find((theme) => theme.name === config);

    const Format = {
        Vinyl: 'vinyl',
        Cassette: 'cassette',
        Cd: 'cd',
        Download: 'download',
        Streaming: 'streaming',
    };
    const formats = [Format.Vinyl, Format.Cassette, Format.Cd, Format.Download, Format.Streaming];

    function getMaxItems(array, keys) {
        const maxIndex = (k) => array.reduce((max, curr, i) => curr[k] > array[max][k] ? i : max, 0);

        const entries = keys.map((key) => [
            key,
            array[maxIndex(key)],
        ]);

        return Object.fromEntries(entries);
    }
    function getLabels(data) {
        const peakItems = getMaxItems(data.slice(0, data.length - 3), formats);
        return formats.reduce((obj, format, i) => {
            const offset = Array(i).fill(0).reduce((sum, _, j) => sum + peakItems[format][formats[j]], 0);
            const [x, y] = [peakItems[format].year, offset + peakItems[format][format] / 2];

            obj[x] = {
                label: format === 'cd' ? format.toUpperCase() : format.charAt(0).toUpperCase() + format.slice(1),
                value: y,
                color: 'none',
            };

            return obj;
        }, {});
    }

    const labels = getLabels(stackedData);

    return (
        <>
            <VisXYContainer data={stackedData} height={'50vh'}>
                <VisArea x={useCallback((d) => d.year, [])} y={formats.map((g) => useCallback((d) => d[g], []))} />
                <VisAxis type='x' label='Year' numTicks={10} gridLine={false} domainLine={false} />
                <VisAxis type='y' label='Revenue (USD, billions)' numTicks={10} />
                <VisXYLabels
                    x={useCallback((d) => (labels[d.year] ? d.year : undefined), [])}
                    y={useCallback((d) => labels[d.year]?.value, [])}
                    label={useCallback((d) => labels[d.year]?.label, [])}
                    backgroundColor={useCallback((d) => labels[d.year]?.color ?? 'none', [])}
                    clusterBackgroundColor="none"
                    clusterLabel={() => ''}
                />
            </VisXYContainer>
        </>
    );
}
