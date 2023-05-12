import React from "react";
import Image from "next/image";
import ReturnIcon from "../returnIcon";
import GetWeatherAtTime from "../returnCurrentWeather";

type weatherType = {
	date: string;
	temperatureAvg: number;
	temperatureMax: number;
	temperatureMin: number;
	weathercode: number;
	windSpeed: number[];
	apparentTemp: number[];
	temps: number[];
	weathercodes: number[];
};

type displayedWeather = { temp: number; apparentTemp: number; wind: number; weatherCode: number };

export default function WeatherOfDay(props: any) {
	const weather: weatherType = props.weather;

	const weatherToDisplay: displayedWeather = GetWeatherAtTime(weather, props.displayedHour);

	return (
		<div className="text-white">
			{/* Temperature */}
			<div className="flex justify-center mt-10 font-extrabold">
				<h1 className="text-5xl sm:text-6xl lg:text-7xl">{weatherToDisplay.temp}</h1>
				<span className="text-4xl font-light">°</span>
			</div>

			{/* Icon with date */}

			<Image
				width={250}
				height={250}
				alt="Weather icon"
				className="scale-50 mx-auto -mt-12 md:my-0 -mb-10 sm:scale-75 md:scale-90 lg:scale-100"
				src={ReturnIcon(weatherToDisplay.weatherCode, props.displayedHour)}
			/>

			{/* Icon with date */}
			<div className="flex flex-col md:flex-row gap-x-8 items-center text-sm sm:text-md justify-center ">
				<span className="">Feels like: {weatherToDisplay.apparentTemp}°</span>
				<span className="">Wind speed: {weatherToDisplay.wind} km/h</span>
			</div>
		</div>
	);
}
