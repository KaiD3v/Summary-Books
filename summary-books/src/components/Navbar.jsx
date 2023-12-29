import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={styles.navbar_container}>
      <NavLink to={"/"} className={styles.brand}>
        Summary
        <span>Books</span>
      </NavLink>
      <ul className={styles.links_list}> 
        <li>
          <NavLink className={({isActive}) => (isActive ? styles.active : '')} to={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink className={({isActive}) => (isActive ? styles.active : '')} to={'/books'}>Livros</NavLink>
          
        </li>
        <li>
          <NavLink className={({isActive}) => (isActive ? styles.active : '')} to={"/about"}>Sobre</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
