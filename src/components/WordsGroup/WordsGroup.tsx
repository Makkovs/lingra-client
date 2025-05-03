import styles from "./words-group.module.scss";

const WordsGroup = () => {

  return (
    <div className={styles.words_group}>
      <div className={styles.burger_menu}>
        <div className={styles.burger_line}></div>
        <div className={styles.burger_line}></div>
        <div className={styles.burger_line}></div>
      </div>
      <span className={styles.group_name}>Some Words</span>
      <div className={styles.group_info}>
        <span>Words: 24</span>
        <span>Accuracy: 87%</span>
      </div>
    </div>
  )
}

export default WordsGroup;