import styles from "./Feedback.module.css";

const Feedback = ({ feedBackType, totalFeedBack, positiveFeedBack }) => {
  return (
    <ul className={styles.feedBackList}>
      <li className={styles.feedBackListItem}>
        <p>Good: {feedBackType.good}</p>
      </li>
      <li className={styles.feedBackListItem}>
        <p>Neutral: {feedBackType.neutral}</p>
      </li>
      <li className={styles.feedBackListItem}>
        <p>Bad: {feedBackType.bad}</p>
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
