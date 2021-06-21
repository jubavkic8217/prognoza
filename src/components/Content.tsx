import React from 'react';
import { Grid } from 'semantic-ui-react';
import CenterOptions from './CenterOptions';
import Navbar from './Navbar';
import WeatherForecase from './WeatherForecase';

export interface IState {
    grad: number | undefined,
    dan: number | undefined,
    vlaga: boolean,
    pritisak: boolean
}

export default function Content() {

    const [state, setState] = React.useState<IState>({
        grad: undefined,
        dan: undefined,
        vlaga: false,
        pritisak: false
    });

    const handleGradSelection = (value: number) => {
        setState({ ...state, grad: value });
    };

    const handleDanSelection = (value: number) => {
        setState({ ...state, dan: value });
    }

    const handleVlagaCheck = (value: boolean) => {
        setState({ ...state, vlaga: value });
    }

    const handlePritisakCheck = (value: boolean) => {
        setState({ ...state, pritisak: value });
    }

    return (
        <>
            <Navbar />
            <Grid>

                <Grid.Row stretched className="gridRow1">
                    <CenterOptions
                        handleDanSelection={handleDanSelection}
                        handleGradSelection={handleGradSelection}
                        handlePritisakCheck={handlePritisakCheck}
                        handleVlagaCheck={handleVlagaCheck}
                        grad={state.grad}
                        dan={state.dan}
                        pritisak={state.pritisak}
                        vlaga={state.vlaga}
                    />
                </Grid.Row>
                <Grid.Row stretched className="gridRow2">
                    {(state.dan !== undefined && state.grad !== undefined) ? <WeatherForecase dan={state.dan} grad={state.grad} vlaga={state.vlaga} pritisak={state.pritisak} /> : <></>}
                </Grid.Row>
            </Grid>
        </>
    )

}