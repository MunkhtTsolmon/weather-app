import { Card } from "./card.jsx";
import { SearchInput } from "./searchInput.jsx";

export default function Home() {
  return (
    <div className="w-[100rem] flex m-auto bg-white relative justify-center items-center overflow-hidden">
      <div className="w-[50rem] h-[75rem] bg-[#F3F4F6]">
        <SearchInput />
        <Card />
      </div>
      <div className="w-[50rem] h-[75rem] rounded-lg relative bg-[#F3F4F6]">
        <Card value="night" />

        <div className="w-full h-[550px] rounded-bl-[80px] bg-[#0F141E]"></div>
        <div className="w-[46.89rem] h-[100px] ml-[50px] bg-[#0F141E]"></div>
        <div className="w-full h-[550px] rounded-tl-[80px] bg-[#0F141E]"></div>

        <div className="h-[180px] w-[90px] bg-[#0F141E] absolute top-[500px] left-[40px]"></div>
      </div>
      <div className="rounded-full size-[145px] absolute z-[3] bg-[#F3F4F6]"></div>
      <div className="rounded-tl-full rounded-bl-full rounded-r-none  border h-[147px] w-[77px] mr-[70px] absolute"></div>

      <div className="size-[340px] rounded-full   absolute border"></div>
      <div className="size-[540px] rounded-full   absolute border"></div>
      <div className="size-[940px] rounded-full   absolute border"></div>
      <div className="size-[1340px] rounded-full   absolute border"></div>
      <div className="size-[1740px] rounded-full   absolute border"></div>
    </div>
  );
}
