import React from "react";

function CircleIconButton({ color, hoverColor, icon, onClick, disabled }) {
  const dis = disabled && disabled === true ? true : false;
  const classes = `
    w-9 
    h-9 
    p-2 
    fill-${color} 
    rounded-full 
    hover:fill-${hoverColor} 
    hover:bg-${hoverColor}/10
    disabled:opacity-50
    disabled:hover:bg-white
    `;
  return (
    <>
      {onClick ? (
        <button onClick={onClick} className={classes} disabled={dis}>
          {icon}
        </button>
      ) : (
        <button className={classes} disabled={dis}>
          {icon}
        </button>
      )}
    </>
  );
}

export default CircleIconButton;
