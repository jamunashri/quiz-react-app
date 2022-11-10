import { useEffect, useState } from "react";
import { questions } from "./question";
import { PieChart } from "react-minimal-pie-chart";
import "./styles.css";

export default function App() {
  const [qNo, setQNo] = useState(0);
  const [ans, setAns] = useState("");
  const [result, setResult] = useState(false);
  const [score, setScore] = useState(0);
  const [data, setData] = useState([]);
  const handleSubmit = () => {
    let correctAns = questions.find((i) => i.rigthAns === ans);
    if (qNo + 1 === questions.length) {
      setResult(true);
    }
    if (correctAns) {
      setScore(score + 1);
    }
    setQNo(qNo + 1);
    setAns("");
  };
  useEffect(() => {
    setData([
      {
        title: "Correct Answer",
        value: score,
        color: "#FFC074",
      },
      {
        title: "Wrong Answer",
        value: questions.length - score,
        color: "#A2D2FF",
      },
    ]);
  }, [result]);
  return (
    <>
      <div class="image"></div>
      <div class="text">
        <span>Q</span>uiz<span>🤔</span>
      </div>
      <div class="text" id="two">
        <span>Game💡</span>
      </div>
      <div class="main-container">
        <div class="inner-container">
          <>
            {!result && (
              <>
                <h1 class="question">Q. {questions[qNo].question}</h1>
                <ul>
                  <li>
                    <input
                      type="radio"
                      name="answer"
                      id="ans1"
                      class="answer"
                      isChecked={ans === questions[qNo].a}
                      value={questions[qNo].a}
                      onChange={(e) => setAns(e.target.value)}
                    />
                    <label for="ans1" id="option1">
                      {questions[qNo].a}
                    </label>
                  </li>
                  <li>
                    <input
                      type="radio"
                      name="answer"
                      id="ans2"
                      class="answer"
                      isChecked={ans === questions[qNo].b}
                      value={questions[qNo].b}
                      onChange={(e) => setAns(e.target.value)}
                    />
                    <label for="ans2" id="option2">
                      {questions[qNo].b}
                    </label>
                  </li>
                  <li>
                    <input
                      type="radio"
                      name="answer"
                      id="ans3"
                      class="answer"
                      isChecked={ans === questions[qNo].c}
                      value={questions[qNo].c}
                      onChange={(e) => setAns(e.target.value)}
                    />
                    <label for="ans3" id="option3">
                      {questions[qNo].c}
                    </label>
                  </li>
                  <li>
                    <input
                      type="radio"
                      name="answer"
                      id="ans4"
                      class="answer"
                      isChecked={ans === questions[qNo].d}
                      value={questions[qNo].d}
                      onChange={(e) => setAns(e.target.value)}
                    />
                    <label for="ans4" id="option4">
                      {questions[qNo].d}
                    </label>
                  </li>
                </ul>
                <button id="submit" onClick={() => handleSubmit()}>
                  Submit
                </button>
              </>
            )}
          </>
          {result && (
            <div>
              Your Score percentage is {(score / questions.length) * 100} %
              <PieChart
                animate
                animationDuration={40}
                animationEasing="ease-in"
                center={[50, 50]}
                data={data}
                lineWidth={15}
                lengthAngle={360}
                paddingAngle={0}
                radius={50}
                rounded
                startAngle={0}
                viewBoxSize={[100, 100]}
                labelStyle={{
                  fontSize: "6px",
                  fontColor: "FFFFFA",
                  fontWeight: "500",
                  fontFamily: "monospace",
                }}
                label={(data) => data.dataEntry.title}
                labelPosition={70}
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
}
