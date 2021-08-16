import { useState } from "react";
import Quiz from "./Quiz";
import "./TriQuiz.css";
import qarray from "./Qarray";
let temparr = [...qarray];
const Qava = qarray.length;
const totalQ = 8;
const Qremaining = Qava - totalQ;
function levelplay(
  qarray: {
    question: string;
    answer: string[];
    correct: number;
    id: number;
  }[]
) {
  let qal = qarray.length;
  let possibleQ = Math.floor(Math.random() * qal);
  return possibleQ;
}

export default () => {
  const [qn, setQn] = useState(levelplay(qarray));
  const [score, setScore] = useState(0);
  const [arrlength, setArrlength] = useState(temparr.length);
  return (
    <div className="main-sec">
      <div className="mid-cover">
        {arrlength > Qremaining && (
          <>
            {" "}
            <h1>Click on the right answer to move forward</h1>
            <div className="ques">{temparr[qn].question}</div>
          </>
        )}
        {arrlength > Qremaining ? (
          Array(0, 1, 2, 3).map((i) => {
            // console.log(temparr[qn], "i");
            return (
              <div
                className="ans"
                onClick={() => {
                  if (i == temparr[qn].correct) {
                    setScore((p) => p + 1);
                    temparr.splice(qn, 1);
                    setArrlength((p) => p - 1);
                    setQn(levelplay(temparr));
                  } else {
                    temparr.splice(qn, 1);
                    setArrlength((p) => p - 1);
                    setQn(levelplay(temparr));
                  }
                }}
              >
                {temparr[qn].answer[i]}
              </div>
            );
          })
        ) : (
          <>
            <div className="msg">
              your score is {score}/{totalQ} a total of{" "}
              {((score / totalQ) * 100).toFixed(2)}%
            </div>
            <button
              className="checkBtn"
              onClick={() => {
                console.log(arrlength);
                temparr = [...qarray];
                setArrlength(Qava);
                setScore(0);
              }}
            >
              Click here to try again
            </button>
          </>
        )}
      </div>
    </div>
  );
};
