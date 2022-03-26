import React from "react";

function CircleIconButton({ color, hoverColor, icon, onClick }) {
  const classes = `
    w-9 
    h-9 
    p-2 
    fill-${color} 
    rounded-full 
    hover:fill-${hoverColor} 
    hover:bg-${hoverColor}/10
    `;
  return (
    <>
      {onClick ? (
        <button onClick={onClick} className={classes}>
          {icon}
        </button>
      ) : (
        <button className={classes}>{icon}</button>
      )}
    </>
  );
}

export default CircleIconButton;
