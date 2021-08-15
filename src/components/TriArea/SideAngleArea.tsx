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
  const invalidateangle = (e: number): boolean => e > 179 || e < 1;
  //?angle shoul not 180,360,0
  return (
    <>
      <div className="bcard">
        <header className="head">
          <h1>Enter the lengths of two sides and angle between them</h1>
        </header>

        <section className="input">
          <label>
            <span className="label">Sidele 1</span>
            <input
              type="number"
              value={side1}
              placeholder={"Enter Sidele 1"}
              onChange={(e) => {
                setSide1(parseFloat(e.target.value));
                setIsCalcDone(false);
              }}
            />
          </label>
          <label>
            <span className="label">Sidele 2</span>
            <input
              type="number"
              value={side2}
              placeholder={"Enter Sidele 2"}
              onChange={(e) => {
                setSide2(parseFloat(e.target.value));
                setIsCalcDone(false);
              }}
            />
          </label>
          <label>
            <span className="label">Angle</span>
            <input
              type="number"
              value={side3}
              placeholder={"Enter Angle"}
              onChange={(e) => {
                setSide3(parseFloat(e.target.value));
                setIsCalcDone(false);
              }}
            />
          </label>

          <button
            onClick={() => {
              if (
                invalidateSidele(side1) ||
                invalidateSidele(side2) ||
                invalidateSidele(side3) ||
                invalidateangle(side3)
              ) {
                setValall(false);
                setValTri(false);
              } else {
                setIsCalcDone(true);
                setValall(true);
                setValTri(true);
                console.log(isCalcDone);
              }
            }}
          >
            Check
          </button>
        </section>
        <span>
          {valall && valTri
            ? isCalcDone &&
              "Area is equal to " +
                (
                  (side1 * side2 * Math.sin((side3 * Math.PI) / 180)) /
                  2
                ).toFixed(2) +
                "."
            : "Please enter values greater than 0 (only numbers are allowed in above fields and angle should be between 1 and 179)"}
        </span>
      </div>
    </>
  );
};
