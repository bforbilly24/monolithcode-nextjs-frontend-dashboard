"use client"

import { useState } from "react";
import world from "./worldmap.json";
import { VectorMap } from "@south-paw/react-vector-maps";

const SelectingLayers = ({ height = 250 }) => {

    const [selected, setSelected] = useState([]);

    const onClick = ({ target }) => {
        const id = target.attributes.id.value;
        selected.includes(id)
            ? setSelected(selected.filter(sid => sid !== id))
            : setSelected([...selected, id]);
    }
    return (
        <div>
            <div className={`w-full h-[${height}px]`}>
                <VectorMap {...world} layerProps={{ onClick }} className="h-full w-full object-cover dashtail-codeVmapWarning" />
            </div>
            <div className="text-center">
                <p className="text-sm font-medium text-card-foreground">Selected:</p>
                <pre className="text-sm font-medium text-card-foreground">{JSON.stringify(selected, null, 2)}</pre>
            </div>
        </div>

    );
};

export default SelectingLayers;
