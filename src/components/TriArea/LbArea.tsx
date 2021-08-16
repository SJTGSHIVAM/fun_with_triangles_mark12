import { useState } from "react";

export default () => {
  const [side1, setSide1] = useState<number>(NaN);
  const [side2, setSide2] = useState<number>(NaN);
  // const [side3, setSide3] = useState<number>(NaN);
  const [valall, setValall] = useState(true);
  const [isCalcDone, setIsCalcDone] = useState(false);
  const invalidateSidele = (e: number): boolean =>
    isNaN(e) || e < 0.000000000001;

  return (
    <>
      <div className="bcard">
        <header className="head">
          <h2>Enter the height and base </h2>
        </header>

        <section className="input">
          <label>
            <span className="label">Height:</span>
            <input
              type="number"
              value={side1}
              placeholder={"Enter height"}
              onChange={(e) => {
                setSide1(parseFloat(e.target.value));
                setIsCalcDone(false);
              }}
            />
          </label>
          <label>
            <span className="label">Base:</span>
            <input
              type="number"
              value={side2}
              placeholder={"Enter Base"}
              onChange={(e) => {
                setSide2(parseFloat(e.target.value));
                setIsCalcDone(false);
              }}
            />
          </label>
        </section>

        <button
          className="checkBtn"
          onClick={() => {
            if (invalidateSidele(side1) || invalidateSidele(side2)) {
              setValall(false);
            } else {
              setIsCalcDone(true);
              setValall(true);
              console.log(isCalcDone);
            }
          }}
        >
          Check
        </button>

        <span className="msg">
          {valall
            ? isCalcDone &&
              "Area is equal to " + (0.5 * side1 * side2).toFixed(2) + "."
            : "Please enter values greater than 0 (only numbers are allowed in above fields)"}
        </span>
      </div>
    </>
  );
};
