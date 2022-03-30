import React from "react";

function ReactionButton({ color, number, icon }) {
  let btnClasses = `group flex items-center gap-1 hover:text-blue shrink`;
  let iClasses = `w-8 h-8 xs:w-9 xs:h-9 p-2 fill-dark-gray rounded-full group-hover:fill-blue group-hover:bg-blue/10`;
  switch (color) {
    case "bule":
      btnClasses = `group flex items-center gap-1 hover:text-blue shrink`;
      iClasses = `w-8 h-8 xs:w-9 xs:h-9 p-2 fill-dark-gray rounded-full group-hover:fill-blue group-hover:bg-blue/10`;
      break;

    case "red":
      btnClasses = `group flex items-center gap-1 hover:text-red shrink`;
      iClasses = `w-8 h-8 xs:w-9 xs:h-9 p-2 fill-dark-gray rounded-full group-hover:fill-red group-hover:bg-red/10`;
      break;

    case "green":
      btnClasses = `group flex items-center gap-1 hover:text-green shrink`;
      iClasses = `w-8 h-8 xs:w-9 xs:h-9 p-2 fill-dark-gray rounded-full group-hover:fill-green group-hover:bg-green/10`;
      break;

    default:
      btnClasses = `group flex items-center gap-1 hover:text-blue shrink`;
      iClasses = `w-8 h-8 xs:w-9 xs:h-9 p-2 fill-dark-gray rounded-full group-hover:fill-blue group-hover:bg-blue/10`;
      break;
  }

  return (
    <button className={btnClasses}>
      <div className={iClasses}>{icon}</div>
      {number && (
        <div className="text-sm sm:text-md -translate-x-2 sm:translate-x-0">
          {number}
        </div>
      )}
    </button>
  );
}

export default ReactionButton;
