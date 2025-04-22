import styles from "./ProgressBar.module.css";

interface ProgressBarProps {
  progress: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
  const roundedProgress = Math.round(progress);

  return (
    <div className={styles.progressBarContainer}>
      <div
        className={styles.progressBarFill}
        style={{ width: `${roundedProgress}%` }}
        aria-valuenow={roundedProgress}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        {roundedProgress > 5 && (
          <span className={styles.progressText}>{roundedProgress}%</span>
        )}
      </div>
    </div>
  );
};

export default ProgressBar;
