import * as React from "react";
import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { faForwardStep } from "@fortawesome/free-solid-svg-icons/faForwardStep";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ToolbarItem } from "./item";
import { SimulationContext } from "../simulation";

export const StepItem = observer(() => {
    const {simulation} = useContext(SimulationContext);

    return (
        <ToolbarItem disabled={! simulation.isPaused()} onClick={() => simulation.makeStep()}>
            <FontAwesomeIcon icon={faForwardStep} />
        </ToolbarItem>
    );
});