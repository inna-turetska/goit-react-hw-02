import styles from "./Options.module.css";

const Options = ({ upDateFeedback, totalFeedBack, resetFeedBack }) => {
  return (
    <>
      <ul className={styles.buttonList}>
        <li className={styles.buttonItem}>
          <button
            className={styles.button}
            onClick={() => upDateFeedback("good")}
          >
            Good
          </button>
        </li>
        <li className={styles.buttonItem}>
          <button
            className={styles.button}
            onClick={() => upDateFeedback("neutral")}
          >
            Neutral
          </button>
        </li>
        <li className={styles.buttonItem}>
          <button
            className={styles.button}
            onClick={() => upDateFeedback("bad")}
          >
            Bad
          </button>
        </li>
        {totalFeedBack > 0 && (
          <li className={styles.buttonItem}>
            <button className={styles.buttonReset} onClick={resetFeedBack}>
              Reset
            </button>
          </li>
        )}
      </ul>
    </>
  );
};

export default Options;
