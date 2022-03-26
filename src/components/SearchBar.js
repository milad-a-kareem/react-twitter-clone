import React from "react";
import { ReactComponent as SearchIcon } from "../assets/icons/outline/search.svg";

function SearchBar() {
  return (
    <div className="bg-dark-gray/5 h-[35px] sm:h-[45px] w-full rounded-full flex justify-start items-center px-5 gap-4 focus:border focus:border-primary">
      <div className="w-5 h-5 fill-dark-gray">
        <SearchIcon />
      </div>
      <input
        className="bg-transparent outline-none p-3 w-full"
        type="text"
        name=""
        id=""
        placeholder="Search Twitter"
      />
    </div>
  );
}

export default SearchBar;
