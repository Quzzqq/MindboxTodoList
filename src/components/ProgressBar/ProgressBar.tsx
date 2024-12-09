import styles from "./ProgressBar.module.css";

const ProgressBar = ({ progress }: { progress: number }) => {
  return (
    <div className={styles["ProgressBar"]}>
      <div
        className={styles["ProgressBarLeftSide"]}
        style={{
          width: `${progress}%`,
        }}
      >
        {progress > 0 && (
          <span className={styles.ProgressBarSpan}>
            {progress >= 6 && `${Math.ceil(progress)}%`}
          </span>
        )}
      </div>
      <div className={styles["ProgressBarSeparator"]}></div>
      <div
        className={styles["ProgressBarRightSide"]}
        style={{
          width: `${100 - progress}%`,
        }}
      ></div>
    </div>
  );
};

export default ProgressBar;
