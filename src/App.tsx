import { BrowserRouter, NavLink } from "react-router-dom";
import WordsGroup from "./components/WordsGroup/WordsGroup";

import authIcon from "./assets/auth-icon.svg";
import dictionaryIcon from "./assets/dictionary-icon.svg";
import styles from "./app.module.scss";


function App() {

  return (
    <BrowserRouter>
      <header className={styles.header}>
        <h1 className={styles.logo}>Lingra</h1>
        <NavLink className={styles.button} to="">
          <img className={styles.button_icon} src={dictionaryIcon} />
          Dictionary
        </NavLink>
        <NavLink className={styles.button} to="">
          <img className={styles.button_icon} src={authIcon} />
          Auth
        </NavLink>
      </header>
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
    </BrowserRouter>
  )
}

export default App;
