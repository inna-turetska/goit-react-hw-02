import Options from "./Options/Options";
import Feedback from "./Feedback/Feedback";
import Notification from "./Notification/Notification";
import Description from "./Description/Description";
import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const feedBackfromLocalStorage = () => {
    const savedFeedBack = localStorage.getItem("feedBackCounts");
    return savedFeedBack
      ? JSON.parse(savedFeedBack)
      : { good: 0, neutral: 0, bad: 0 };
  };

  const [feedBackType, setFeedBackTypes] = useState(feedBackfromLocalStorage);

  const updateFeedBack = (feedBackType) => {
    setFeedBackTypes((prevState) => {
      const newState = {
        ...prevState,
        [feedBackType]: prevState[feedBackType] + 1,
      };

      localStorage.setItem("feedBackCounts", JSON.stringify(newState));
      return newState;
    });
  };

  const resetFeedBack = () => {
    const resetState = { good: 0, neutral: 0, bad: 0 };
    setFeedBackTypes(resetState);

    localStorage.setItem("feedBackCounts", JSON.stringify(resetState));
  };

  const totalFeedBack =
    feedBackType.good + feedBackType.neutral + feedBackType.bad;

  const positiveFeedBack = totalFeedBack
    ? Math.round((feedBackType.good / totalFeedBack) * 100)
    : 0;

  const hasFeedBack = totalFeedBack > 0;

  useEffect(() => {
    localStorage.setItem("feedBackCounts", JSON.stringify(feedBackType));
  }, [feedBackType]);

  return (
    <>
      <Description />
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
