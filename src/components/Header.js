import styles from "./Header.module.scss";
import globe from "../images/globe.png";

const Header = () => {
  return (
    <div className={styles.container}>
      <img src={globe} className={styles.logo} />
      <h2>my travel journal</h2>
    </div>
  );
};
export default Header;
