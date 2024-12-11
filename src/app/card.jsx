import { CiLocationOn } from "react-icons/ci";
import Image from "next/image";
export function Card() {
  return (
    <div className="w-[26rem] h-[52rem] bg-gradient-to-t from-[#111827] from-0% to-[#1F2937] to-200% mx-auto mt-[13.5rem] rounded-[2rem]">
      <div className="w-fit h-fit">
        <p>September 10, 2021</p>
        <h1>Krakow</h1>
      </div>
      <CiLocationOn className="ml-[21rem]" />
      <Image width={50} height={50} alt="night-moon" src="/nightMoon.png" />
      <h1>17°</h1>
      <h4>Clear</h4>
    </div>
  );
}
