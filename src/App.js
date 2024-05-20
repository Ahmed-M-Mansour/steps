import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function App() {
  const [step, setStep] = useState(1);
  const [isopen, setOpen] = useState(false);

  const next = () => step < 3 && setStep((s) => s + 1);
  const prev = () => step > 1 && setStep((s) => s - 1);

  return (
    <>
      <button className="close" onClick={() => setOpen(!isopen)}>
        &times;
      </button>
      {isopen && (
        <div className="steps">
          <div className="numbers">
            <div className={`${step >= 1 ? "active" : ""}`}> 1</div>
            <div className={`${step >= 2 ? "active" : ""}`}> 2</div>
            <div className={`${step >= 3 ? "active" : ""}`}> 3</div>
          </div>

          <p className="message">
            Step {step} {messages[step - 1]}
          </p>

          <div className="buttons">
            <button
              onClick={prev}
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
            >
              Pervious
            </button>
            <button
              onClick={next}
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
