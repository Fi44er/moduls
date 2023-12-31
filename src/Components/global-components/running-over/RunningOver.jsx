import styles from "./RunningOver.module.css"

const RunningOver = ({ name, img, children }) => {
  return (
    <div className={styles.RunningOver}>
      <div
        className={styles.RunningOverMain}
        style={{ backgroundImage: `url(${img})` }}
      />
      <div className={styles.RunningOverTitle}>
        <h2>
          {name}
          <div />
        </h2>
        <div className={styles.RunningOverBlock}>{children}</div>
      </div>
    </div>
  )
}

export default RunningOver
