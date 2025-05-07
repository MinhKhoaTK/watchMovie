import classNames from "classnames/bind";
import { Link } from "react-router-dom";

import config from "../../../config";
import styles from "./Header.module.scss";
import Search from "../Search";
import ImageS from "../../../components/ImageS/ImageS";
import Button from "../../../components/Button";
const cx = classNames.bind(styles);

function Header() {
  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        <Link to={config.routes.home}>
          <ImageS
            className={cx("logo")}
            src="https://www.pngall.com/wp-content/uploads/13/Anime-Logo-PNG-HD-Image.png"
            alt="Anime for all"
          />
        </Link>
        <Search />
        <div className={cx("action")}>
          <Button>Login</Button>
        </div>
      </div>
    </header>
  );
}

export default Header;
