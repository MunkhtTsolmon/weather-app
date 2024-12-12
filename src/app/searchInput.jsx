import { SearchIcon } from "./searchIcon";
export function SearchInput() {
  return (
    <div className="w-[26rem] h-[4.5rem] mx-[2.5rem] my-[1.5rem] relative">
      <div className="flex h-full px-4 py-3 rounded-[2rem] bg-white overflow-hidden max-w-md mx-auto font-[sans-serif]">
        <SearchIcon />
        <input className="w-full h-full outline-none bg-transparent text-gray-600 text-sm" />
      </div>
    </div>
  );
}
