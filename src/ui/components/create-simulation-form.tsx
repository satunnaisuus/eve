import * as React from "react";
import { useContext, useState } from "react";
import styled from "styled-components";
import { GridLoopType } from "../../simulation/types/grid-loop-type";
import { SimulationOptions } from "../../simulation/types/simulation-options";
import { RootStoreContext } from "../stores/root-store";
import { Button } from "./form/button";
import { FormRow } from "./form/form-row";
import { NumberInput } from "./form/number-input";
import { RangeRow } from "./form/range-row";
import { Select } from "./form/select";
import { Switch } from "./form/switch";

interface Props {
    options: SimulationOptions;
}

const LoopTypes = [
    {label: 'None', value: GridLoopType.NONE},
    {label: 'Torus', value: GridLoopType.TORUS},
    {label: 'Horizontal', value: GridLoopType.HORIZONTAL},
    {label: 'Vertical', value: GridLoopType.VERTICAL},
];

const FormStyled = styled.div`
    display: flex;
    height: 100%;
    flex-direction: column;
`;

const FieldsWrapperStyled = styled.div`
    flex-grow: 1;
    overflow-y: auto;
    padding-left: 5px;
    padding-right: 20px;
    margin-bottom: 15px;
`;

const Row = styled.div`
    display: flex;
    gap: 10px;

    > * {
        flex-grow: 1;
    }
`;

export const CreateSimulationForm = ({options}: Props) => {
    const store = useContext(RootStoreContext);
    
    const [loop, setLoop] = useState(options.loop);
    const [width, setWidth] = useState(options.width);
    const [height, setHeight] = useState(options.height);
    const [initialEnergy, setInitialEnergy] = useState(options.initialEnergy);
    const [population, setPopulation] = useState(options.population);
    const [lightDepth, setLightDepth] = useState(options.lightDepth);
    const [lightGradient, setLightGradient] = useState(options.lightGradient);
    const [mineralsDepth, setMineralsDepth] = useState(options.mineralsDepth);
    const [mineralsGradient, setMineralsGradient] = useState(options.mineralsGradient);
    const [programLength, setProgramLength] = useState(options.programLength);

    const create = (paused: boolean) => {
        store.newSimulation({
            loop: loop,
            width: width,
            height: height,
            initialEnergy: initialEnergy,
            population: population,
            lightDepth: lightDepth,
            lightGradient: lightGradient,
            mineralsDepth: mineralsDepth,
            mineralsGradient: mineralsGradient,
            programLength: programLength,
        }, paused);
    }

    return (
        <FormStyled>
            <FieldsWrapperStyled>
                <Row>
                    <FormRow label='Grid width'>
                        <NumberInput min={0} onChange={(value) => setWidth(value)} value={width} />
                    </FormRow>

                    <FormRow label='Grid height'>
                        <NumberInput min={0} onChange={(value) => setHeight(value)} value={height} />
                    </FormRow>
                </Row>

                <FormRow label='Loop'>
                    <Select onSelect={(value) => setLoop(value as GridLoopType)} options={LoopTypes} value={loop} />
                </FormRow>

                <RangeRow label='Program length' min={7} max={256} step={1} onChange={(value) => setProgramLength(value)} value={programLength} />

                <RangeRow label='Initial population' postfix='%' min={0} max={100} step={0.1} onChange={(value) => setPopulation(value)} value={population} />

                <RangeRow label='Initial energy' min={0} max={255} step={1} onChange={(value) => setInitialEnergy(value)} value={initialEnergy} />

                <RangeRow label='Light depth' postfix='%' min={0} max={100} step={0.1} onChange={(value) => setLightDepth(value)} value={lightDepth} />

                <RangeRow label='Minerals depth' postfix='%' min={0} max={100} step={0.1} onChange={(value) => setMineralsDepth(value)} value={mineralsDepth} />

                <Switch label='Light gradient' value={lightGradient} onChange={(checked) => setLightGradient(checked)} />

                <Switch label='Minerals gradient' value={mineralsGradient} onChange={(checked) => setMineralsGradient(checked)} />

            </FieldsWrapperStyled>

            <Row>
                <Button apperance='primary' width='100%' onClick={() => create(false)}>Start</Button>
                <Button apperance='secondary' width='100%' onClick={() => create(true)}>Create</Button>
            </Row>
        </FormStyled>

    );
};