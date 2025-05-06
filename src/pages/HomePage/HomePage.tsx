import WordsGroup from "../../components/WordsGroup/WordsGroup";
import styles from "./home-page.module.scss"

const HomePage = () => {

  return (
    <main className={styles.content}>
      <WordsGroup />
      <WordsGroup />
      <WordsGroup />
      <WordsGroup />
      <WordsGroup />
      <WordsGroup />
      <WordsGroup />
      <div className={styles.plus}>
      </div>
    </main>
  )
}

export default HomePage;