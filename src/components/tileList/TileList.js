import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = ({tiles}) => {
  return (
    <div>
      {tiles.map(({name, ...description}, index) => {
        return <Tile name={name} key={index} description={description} />
      })}
     </div>
  );
};
