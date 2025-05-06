import { NavLink } from "react-router-dom"
import { AUTH_ROUTE, DICTIONARY_ROUTE, HOME_ROUTE } from "../../consts";

import authIcon from "../../assets/auth-icon.svg";
import dictionaryIcon from "../../assets/dictionary-icon.svg";
import styles from "./header.module.scss"

const Header = () => {

  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>
        <NavLink className={styles.logo} to={HOME_ROUTE}>
          Lingra
        </NavLink>
      </h1>
      <NavLink className={styles.button} to={HOME_ROUTE}>
        Home
      </NavLink>
      <NavLink className={styles.button} to={DICTIONARY_ROUTE}>
        <img className={styles.button_icon} src={dictionaryIcon} />
        Dictionary
      </NavLink>
      <NavLink className={styles.button} to={AUTH_ROUTE}>
        <img className={styles.button_icon} src={authIcon} />
        Auth
      </NavLink>
    </header>
  )
}

export default Header;
