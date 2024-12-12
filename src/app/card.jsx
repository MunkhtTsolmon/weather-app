import { CiLocationOn } from "react-icons/ci";
import Image from "next/image";
export function Card({ className, value }) {
  const nightColor =
    "bg-gradient-to-t from-[#111827] from-0% to-[#1F2937] to-200%";
  const dayColor =
    "bg-gradient-to-t from-[#F9FAFB00] from-200% to-[#F9FAFB] to-0%";
  const marginTopNight = "mt-[13.5rem]";
  const marginTopDay = "mt-[7rem]";
  const color = value === "night" ? nightColor : dayColor;
  const marginTop = value === "night" ? marginTopNight : marginTopDay;
  const imgNightMoon = "/nightMoon.png";
  const imgSun = "/Sun.png";
  const imgSource = value === "night" ? imgNightMoon : imgSun;
  const cityTextDay = "text-[#111827]";
  const cityTextNight = "text-[#fff]";
  const cityTextColor = value === "night" ? cityTextNight : cityTextDay;
  const degreeTextColorNight =
    "bg-gradient-to-t from-[#F9FAFB00] from-0% to-[#F9FAFB] to-100%";
  const degreeTextColorDay =
    "bg-gradient-to-t from-[#6B7280] from-0% to-[#111827] to-600%";
  const degreetextColor =
    value === "night" ? degreeTextColorNight : degreeTextColorDay;
  const moodTextColorNight = "text-[#777CCE]";
  const moodTextColorDay = "text-[#FF8E27]";
  const moodTextColor =
    value === "night" ? moodTextColorNight : moodTextColorDay;
  const locationColorDay = "opacity-50";
  const locationColorNight = "text-[#fff] opacity-50";
  const locationColor =
    value === "night" ? locationColorNight : locationColorDay;
  return (
    <div
      className={`w-[26rem] h-[52rem] ${color} mx-auto ${marginTop} rounded-[2rem] bg-blur-[200px] absolute left-[12rem] z-[10] `}
    >
      <div className="w-fit h-fit pt-[64px] pl-10 ">
        <p className="text-[#9CA3AF] font-medium text-[18px]">
          September 10, 2021
        </p>
        <h1 className={`${cityTextColor} text-[48px] font-extrabold`}>
          Krakow
        </h1>
      </div>
      <CiLocationOn
        className={`ml-[21rem] mt-[-60px] ${locationColor} text-[28px] font-extrabold`}
      />
      <Image
        className="mx-auto mt-[40px] drop-shadow-[0px_15px_45px_rgba(255,255,255,0.3)]"
        width={265}
        height={265}
        alt="night-moon"
        src={imgSource}
      />
      <div className="pl-10">
        <h1
          className={`font-extrabold text-[144px] leading-[197px] ${degreetextColor} inline-block text-transparent bg-clip-text`}
        >
          17°
        </h1>
        <h4 className={`${moodTextColor} text-[24px] font-extrabold `}>
          Clear
        </h4>
      </div>
    </div>
  );
}
