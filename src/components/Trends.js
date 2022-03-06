import React from "react";
import TrendItem from "./TrendItem";

function Trends({ trends }) {
  return (
    <>
      {trends &&
        trends.map((trend) => {
          return <TrendItem {...trend} key={trend.id} />;
        })}
    </>
  );
}

export default Trends;
