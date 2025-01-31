import { AccountMain } from "../../component/account/main/AccountMain";
import { Header } from "../../component/header/Header";
import styles from "./Account.module.css";

export function Account() {
 return (
  <div className={styles.accountContainer}>
   <Header />
   <AccountMain />
  </div>
 );
}
