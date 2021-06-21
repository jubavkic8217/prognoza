import React from 'react';
import { Card, } from 'semantic-ui-react';
import { IState } from './Content';

interface IProps extends IState {
    baseTemp: number,
    selected: boolean
}

const calculateRandomTemperature = (baseTemperature: number): number => {
    return (baseTemperature + 8 * Math.random());
}
export default function WeatherCard(props: IProps) {



    const gradovi = ["Beograd", "Subotica", "Nis"];
    const dani = ["Ponedeljak", "Utorak", "Sreda", "Cetvrtak", "Petak", "Subota", "Nedelja"];

    const temperature = calculateRandomTemperature(props.baseTemp);
    const color = props.selected === true ? "lightseagreen" : "grey";

    return (
        <div style={{ height: "100%", width: "100%", padding: "1%" }}>
            <Card style={{ backgroundColor: color }}>
                <Card.Content>
                    <Card.Header>
                        {gradovi[(props.grad as number) - 1]}
                    </Card.Header>
                    <Card.Meta>
                        <span className='date'>{dani[(props.dan as number) - 1]}</span>
                    </Card.Meta>
                    <Card.Description>
                        <hr></hr>
                    Temp: {temperature.toFixed(0)}°C <br></br>  <br></br>
                    Maks.*: {(temperature + 5).toFixed(0)}°C  <br></br>  <br></br>
                    Min.*: {(temperature - 5).toFixed(0)}°C  <br></br>  <br></br>
                    </Card.Description>
                </Card.Content>
                {props.vlaga === true && <Card.Content extra>
                    Vlaga: {(40 + Math.random() * 30).toFixed(0)}%
                                        </Card.Content>}
                {props.pritisak === true && <Card.Content extra>
                    Pritisak:<br></br> {(700 + 700 * Math.random()).toFixed(0)} (hPa)
                                            </Card.Content>}
            </Card>
        </div>
    );

}