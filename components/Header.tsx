import Link from "next/link";
import styles from '../styles/Header.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
      <Link href="/">CareFinder</Link>
      
      <ul className={styles.nav}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/#about">About</Link>
        </li>
        <li>
          <Link href="/hospitals">Find Hospitals</Link>
        </li>

        <button><Link href="/signup"> Sign up</Link></button>
        {/* <button>log in</button> */}
      </ul>
    </header>
  );
};

export default Header;
