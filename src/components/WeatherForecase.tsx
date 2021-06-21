import React from 'react';
import { IState } from './Content';
import SevenDayWeather from './SevenDayWeather';

export default function WeatherForeacast(props: IState) {

    return (
        <div style={{ width: "100%", height: "100%", paddingLeft: "15px", paddingRight: "15px" }}>
            <SevenDayWeather dan={props.dan} grad={props.grad} pritisak={props.pritisak} vlaga={props.vlaga} />
        </div>
    )

}