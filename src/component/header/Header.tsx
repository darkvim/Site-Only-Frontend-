import { NavLink, useLocation } from "react-router-dom";
import { headerElements } from "../../links/header_menu";
import search from "/google_icons/search.svg";

import styles from "./Header.module.css";

export function Header() {
 const location = useLocation();

 return (
  <header className={styles.header}>
   <ul>
    {headerElements.map((value, key) => {
     const targetRoute = value.toLowerCase();

     return (
      <li key={key}>
       {value === "SEARCH" ? (
        <div id={styles.search_box}>
         <input type="search" placeholder={value.toLocaleLowerCase()} />
         <img src={search} alt="search icon" />
        </div>
       ) : value === "Home" ? (
        <NavLink
         to={`/`}
         className={({ isActive }) => (isActive ? styles.active : "")}
         end
         onClick={(e) => {
          if (location.pathname === `/${targetRoute}`) e.preventDefault();
         }}
        >
         {value}
        </NavLink>
       ) : (
        <NavLink
         to={`/${targetRoute}`}
         className={({ isActive }) => (isActive ? styles.active : "")}
         end
         onClick={(e) => {
          if (location.pathname === `/${targetRoute}`) e.preventDefault();
         }}
        >
         {value}
        </NavLink>
       )}
      </li>
     );
    })}
   </ul>
  </header>
 );
}
