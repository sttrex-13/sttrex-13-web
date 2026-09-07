import { Link, NavLink } from 'react-router-dom'
import styles from './Header.module.scss'

const Header = () => (
  <header className={styles.header}>
    <Link className={styles.name} to="/">Sutee Vapeetam</Link>
    <NavLink className={styles.info} to="/info">Info</NavLink>
  </header>
)

export default Header
