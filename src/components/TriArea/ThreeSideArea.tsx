import { useState } from "react";

export default () => {
  const [side1, setSide1] = useState<number>(NaN);
  const [side2, setSide2] = useState<number>(NaN);
  const [side3, setSide3] = useState<number>(NaN);
  const [valall, setValall] = useState(true);
  const [valTri, setValTri] = useState(true);
  const [isCalcDone, setIsCalcDone] = useState(false);
  const invalidateSidele = (e: number): boolean =>
    isNaN(e) || e < 0.000000000001;
  const validateTriangle = (side1: number, side2: number, side3: number) =>
    side1 + side2 > side3 && side2 + side3 > side1 && side1 + side3 > side2;
  return (
    <>
      <div className="bcard">
        <header className="head">
          <h2>Enter the lengths of three sides </h2>
        </header>

        <section className="input">
          <label>
            <span className="label">Side 1:</span>
            <input
              type="number"
              value={side1}
              placeholder={"Enter Side 1"}
              onChange={(e) => {
                setSide1(parseFloat(e.target.value));
                setIsCalcDone(false);
              }}
            />
          </label>
          <label>
            <span className="label">Side 2:</span>
            <input
              type="number"
              value={side2}
              placeholder={"Enter Side 2"}
              onChange={(e) => {
                setSide2(parseFloat(e.target.value));
                setIsCalcDone(false);
              }}
            />
          </label>
          <label>
            <span className="label">Side 3:</span>
            <input
              type="number"
              value={side3}
              placeholder={"Enter Side 3"}
              onChange={(e) => {
                setSide3(parseFloat(e.target.value));
                setIsCalcDone(false);
              }}
            />
          </label>
        </section>

        <button
          className="checkBtn"
          onClick={() => {
            if (
              invalidateSidele(side1) ||
              invalidateSidele(side2) ||
              invalidateSidele(side3) ||
              !validateTriangle(side1, side2, side3)
            ) {
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
          {valall && valTri
            ? isCalcDone &&
              "Area is equal to " +
                Math.sqrt(
                  ((side1 + side2 + side3) / 2) *
                    ((side1 + side2 + side3) / 2 - side1) *
                    ((side1 + side2 + side3) / 2 - side2) *
                    ((side1 + side2 + side3) / 2 - side3)
                ).toFixed(2) +
                "."
            : "Please enter values greater than 0 (only numbers are allowed in above fields and sum of two sides should be greater than third)"}
        </span>
      </div>
    </>
  );
};
