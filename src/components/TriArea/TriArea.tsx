import { useState } from "react";
import "./TriArea.css";
import LbArea from "./LbArea";
import SideAngleArea from "./SideAngleArea";
import ThreeSideArea from "./ThreeSideArea";
const methodList = [
  "Base and height",
  "Three sides",
  "Two sides and included angle",
];
const data: { [key: string]: JSX.Element } = {
  "Base and height": <LbArea />,
  "Two sides and included angle": <SideAngleArea />,
  "Three sides": <ThreeSideArea />,
};

export default () => {
  const [method, setMethod] = useState(methodList[0]);
  return (
    <div className="bcard mid-cover">
      <h2 className="fix">
        Choose the inputs by which you want to calculate area
      </h2>
      <div className="method-list">
        {methodList.map((i) => {
          return (
            <>
              <span
                className={"method-tile " + (method == i ? "highlight" : "")}
                onClick={() => {
                  setMethod(i);
                }}
                key={i}
              >
                {i}
              </span>
            </>
          );
        })}
      </div>
      {/* this is the best pices of code I wrote today cause it made me happy I dont know weather it is the way to do it or not 
      but it was definitly worth it !
      */}
      {(() => data[method])()}
    </div>
  );
};
