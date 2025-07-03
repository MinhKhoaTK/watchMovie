import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import { moviesData } from "../../../components/Datalc";
import config from "../../../config";
import styles from "./Header.module.scss";
import Search from "../Search";
import ImageS from "../../../components/ImageS/ImageS";
import Button from "../../../components/Button";
const cx = classNames.bind(styles);

function Header() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);

  // const filtered = moviesData.filter((m) =>
  //   m.title.toLowerCase().includes(searchTerm.toLowerCase())
  // );

  useEffect(() => {
    const timer = setTimeout(() => {
      const filtered = searchTerm.trim()
        ? moviesData.filter((m) =>
            m.title.toLowerCase().includes(searchTerm.toLowerCase())
          )
        : [];
      setFilteredResults(filtered);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchTerm]);

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
        <Search onSearch={setSearchTerm} results={filteredResults} />
        <div className={cx("action")}>
          <Button>Login</Button>
        </div>
      </div>
    </header>
  );
}

export default Header;
