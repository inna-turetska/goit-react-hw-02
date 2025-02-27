import Options from "./Options/Options";
import Feedback from "./Feedback/Feedback";
import Notification from "./Notification/Notification";
import "./App.css";
import { useState } from "react";

function App() {
  const [feedBackType, setFeedBackTypes] = useState({
    Good: 0,
    Neutral: 0,
    Bad: 0,
  });

  const updateFeedBack = (feedBackType) => {
    setFeedBackTypes((prevState) => ({
      ...prevState,
      [feedBackType]: prevState[feedBackType] + 1,
    }));
  };
  const resetFeedBack = () => {
    setFeedBackTypes({
      Good: 0,
      Neutral: 0,
      Bad: 0,
    });
  };

  const totalFeedBack =
    feedBackType.Good + feedBackType.Neutral + feedBackType.Bad;
  const positiveFeedBack = Math.round(
    (feedBackType.Good / totalFeedBack) * 100
  );

  const hasFeedBack = totalFeedBack > 0;

  return (
    <>
      <div>
        <h1>Sip Happens Café</h1>
        <p>
          Please leave your feedback about our service by selecting one of the
          options below.
        </p>
      </div>
      <Options
        feedBackType={feedBackType}
        upDateFeedback={updateFeedBack}
        resetFeedBack={resetFeedBack}
        totalFeedBack={totalFeedBack}
      />
      {!hasFeedBack && <Notification />}
      {hasFeedBack && (
        <Feedback
          feedBackType={feedBackType}
          totalFeedBack={totalFeedBack}
          positiveFeedBack={positiveFeedBack}
        />
      )}
    </>
  );
}

export default App;
