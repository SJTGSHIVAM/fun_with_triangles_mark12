import { useState } from "react";
import "./TriAngle.css";

const TriAngle = () => {
  const [ang1, setAng1] = useState<number>(NaN);
  const [ang2, setAng2] = useState<number>(NaN);
  const [ang3, setAng3] = useState<number>(NaN);
  const [valall, setValall] = useState(true);
  const [isCalcDone, setIsCalcDone] = useState(false);
  const invalidateAngle = (e: number): boolean =>
    isNaN(e) || e < 0.000000000001;

  return (
    <>
      <div className="bcard">
        <header className="head">
          <h1>
            Enter the angles in below input boxes and we will tell you if those
            angles make a Triangle
          </h1>
        </header>

        <section className="input">
          <label>
            <span className="label">Angle 1</span>
            <input
              type="number"
              value={ang1}
              placeholder={"Enter Angle 1"}
              onChange={(e) => {
                setAng1(parseFloat(e.target.value));
                setIsCalcDone(false);
              }}
            />
          </label>
          <label>
            <span className="label">Angle 2</span>
            <input
              type="number"
              value={ang2}
              placeholder={"Enter Angle 2"}
              onChange={(e) => {
                setAng2(parseFloat(e.target.value));
                setIsCalcDone(false);
              }}
            />
          </label>
          <label>
            <span className="label">Angle 3</span>
            <input
              type="number"
              value={ang3}
              placeholder={"Enter Angle 3"}
              onChange={(e) => {
                setAng3(parseFloat(e.target.value));
                setIsCalcDone(false);
              }}
            />
          </label>

          <button
            onClick={() => {
              if (
                invalidateAngle(ang1) ||
                invalidateAngle(ang2) ||
                invalidateAngle(ang3)
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
        </section>
        <span>
          {valall
            ? isCalcDone &&
              (ang1 + ang2 + ang3 == 180
                ? "Yuhu! these angles can make a triangle"
                : "Oops! these angles cannot make a triangle")
            : "Please enter values greater than 0 (only numbers are allowed in above fields)"}
        </span>
      </div>
    </>
  );
};
export default TriAngle;
