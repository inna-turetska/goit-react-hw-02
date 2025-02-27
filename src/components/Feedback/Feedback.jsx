import styles from "./Feedback.module.css";

const Feedback = ({ feedBackType, totalFeedBack, positiveFeedBack }) => {
  return (
    <ul className={styles.feedBackList}>
      <li className={styles.feedBackListItem}>
        <p>Good: {feedBackType.Good}</p>
      </li>
      <li className={styles.feedBackListItem}>
        <p>Neutral: {feedBackType.Neutral}</p>
      </li>
      <li className={styles.feedBackListItem}>
        <p>Bad: {feedBackType.Bad}</p>
      </li>

      <li className={styles.feedBackListItem}>
        <p>Total: {totalFeedBack}</p>
      </li>
      <li className={styles.feedBackListItem}>
        <p>Positive: {positiveFeedBack} %</p>
      </li>
    </ul>
  );
};

export default Feedback;
