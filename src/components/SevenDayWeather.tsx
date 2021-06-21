import React from 'react';
import WeatherCard from './WeatherCard';
import { IState } from './Content';


export default function SevenDayWeather(props: IState) {
    const base_temperature = Math.random() * 10;

    return (
        <>
            <div style={{ width: "13%", height: "100%", display: "inline-block" }} className='hoverableCard'>
                <WeatherCard dan={1} pritisak={props.pritisak} vlaga={props.vlaga} grad={props.grad} baseTemp={base_temperature} selected={props.dan === 1 || props.dan === 8} />
            </div>
            <div style={{ width: "13%", height: "100%", display: "inline-block" }} className='hoverableCard'>
                <WeatherCard dan={2} pritisak={props.pritisak} vlaga={props.vlaga} grad={props.grad} baseTemp={base_temperature} selected={props.dan === 2 || props.dan === 8} />
            </div>
            <div style={{ width: "13%", height: "100%", display: "inline-block" }} className='hoverableCard'>
                <WeatherCard dan={3} pritisak={props.pritisak} vlaga={props.vlaga} grad={props.grad} baseTemp={base_temperature} selected={props.dan === 3 || props.dan === 8} />
            </div>
            <div style={{ width: "13%", height: "100%", display: "inline-block" }} className='hoverableCard'>
                <WeatherCard dan={4} pritisak={props.pritisak} vlaga={props.vlaga} grad={props.grad} baseTemp={base_temperature} selected={props.dan === 4 || props.dan === 8} />
            </div>
            <div style={{ width: "13%", height: "100%", display: "inline-block" }} className='hoverableCard'>
                <WeatherCard dan={5} pritisak={props.pritisak} vlaga={props.vlaga} grad={props.grad} baseTemp={base_temperature} selected={props.dan === 5 || props.dan === 8} />
            </div>
            <div style={{ width: "13%", height: "100%", display: "inline-block" }} className='hoverableCard'>
                <WeatherCard dan={6} pritisak={props.pritisak} vlaga={props.vlaga} grad={props.grad} baseTemp={base_temperature} selected={props.dan === 6 || props.dan === 8} />
            </div>
            <div style={{ width: "13%", height: "100%", display: "inline-block" }} className='hoverableCard'>
                <WeatherCard dan={7} pritisak={props.pritisak} vlaga={props.vlaga} grad={props.grad} baseTemp={base_temperature} selected={props.dan === 7 || props.dan === 8} />
            </div>
        </>
    );

}