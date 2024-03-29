import * as React from "react";
import { useContext, useEffect, useRef } from "react";
import { observer } from "mobx-react-lite";
import { useSize } from "../hooks/use-size";
import styled from "styled-components";
import { SimulationContext } from "./simulation";

const StyledViewport = styled.div`
    overflow: hidden;
    flex-grow: 1;
`;

export const Viewport = observer(() => {
    const {simulation} = useContext(SimulationContext);
    const canvasRef = useRef();
    const [width, height, containerRef] = useSize();

    useEffect(() => {
        simulation.getRendererStore().setElement(canvasRef.current);
    }, [canvasRef.current]);

    useEffect(() => {
        simulation.getRendererStore().requestRedraw();
    }, [width, height]);

    return (
        <StyledViewport ref={containerRef}>
            <canvas width={width} height={height} ref={canvasRef}></canvas>
        </StyledViewport>
    );
});