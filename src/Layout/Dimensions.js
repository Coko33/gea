import React from "react";
import useWindowDimensions from "../hooks/useWindowDimensions";
import "./Dimensions.css";

export default function Dimensions() {
  let dimensions = useWindowDimensions();

  return (
    <>
      <div className="dimensions">
        {
          <p>
            test: Ancho {dimensions.width} / Alto {dimensions.height}
          </p>
        }
      </div>
    </>
  );
}
