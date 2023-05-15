import styles from "./Dropdown.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGift } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";

function Dropdown() {
  return (
    <>
      <div className={styles.bubble}>
        <div className={styles.menu}>kuromi님 안녕하세요!</div>

        <div className={styles.menu}>
          <Link to="/products">
            <FontAwesomeIcon className={styles.logo} icon={faGift} /> 상품리스트
            페이지
          </Link>
        </div>

        <div className={styles.menu}>
          <Link to="/bookmark">
            <FontAwesomeIcon className={styles.logo} icon={faStar} /> 북마크
            페이지
          </Link>
        </div>
      </div>
    </>
  );
}

export default Dropdown;
