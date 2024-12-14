"use client";
import { useEffect, useState } from "react";
import { Card } from "./card.jsx";
import { SearchInput } from "./searchInput.jsx";

const API_KEY = "eb7323f19ada4471b0072607241312";

export default function Home() {
  const [search, setSearch] = useState("");
  const [city, setCity] = useState("London");
  const [dayWeather, setDayWeather] = useState({
    tempDay: 0,
    condition: "",
  });
  const [nightWeather, setNightWeather] = useState({
    tempDay: 0,
    condition: "",
  });
  const onChangeText = (e) => {
    setSearch(e.target.value);
  };
  const onKeyDown = (event) => {
    if (event.code === "Enter") {
      setCity(search);
    }
  };

  useEffect(() => {
    fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=1&aqi=no&alerts=no`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // console.log(data.forecast.forecastday[0].day.maxtemp_c);
        // console.log(data.forecast.forecastday[0].day.condition.text);
        console.log();
        setDayWeather({
          tempDay: data.forecast.forecastday[0].day.maxtemp_c,
          condition: data.forecast.forecastday[0].day.condition.text,
        });
        setNightWeather({
          tempDay: data.forecast.forecastday[0].day.mintemp_c,
          condition: data.forecast.forecastday[0].hour[0].condition.text,
        });
      });
  }, [city]);
  console.log(city);
  return (
    <div className="w-[100rem] flex m-auto bg-white relative justify-center items-center overflow-hidden">
      <div className="w-[50rem] h-[75rem] bg-[#F3F4F6]">
        <SearchInput
          search={search}
          onChangeText={onChangeText}
          onKeyDown={onKeyDown}
        />
        <Card weather={dayWeather} city={city} />
      </div>
      <div className="w-[50rem] h-[75rem] rounded-lg relative bg-[#F3F4F6]">
        <Card weather={nightWeather} city={city} value="night" />

        <div className="w-full h-[550px] rounded-bl-[80px] bg-[#0F141E]"></div>
        <div className="w-[46.89rem] h-[100px] ml-[50px] bg-[#0F141E]"></div>
        <div className="w-full h-[550px] rounded-tl-[80px] bg-[#0F141E]"></div>

        <div className="h-[180px] w-[90px] bg-[#0F141E] absolute top-[500px] left-[40px]"></div>
      </div>
      <div className="rounded-full size-[145px] absolute z-[3] bg-[#F3F4F6]"></div>
      <div className="rounded-tl-full rounded-bl-full rounded-r-none  border h-[147px] w-[77px] mr-[70px] absolute"></div>

      <div className="size-[340px] rounded-full  opacity-[12%] absolute border-[#535353] border-[1px]"></div>
      <div className="size-[540px] rounded-full  opacity-[12%] absolute border-[#535353] border-[1px]"></div>
      <div className="size-[940px] rounded-full  opacity-[12%]  absolute border-[#535353] border-[1px]"></div>
      <div className="size-[1340px] rounded-full opacity-[12%] absolute border-[#535353] border-[1px]"></div>
      <div className="size-[1740px] rounded-full opacity-[12%] absolute border-[#535353] border-[1px]"></div>
    </div>
  );
}
