import { Link } from "react-router-dom";
import classNames from "classnames/bind";

import Styles from "./NavigationList.module.scss";
import { useState } from "react";
import CardMovies from "../CardMovies";
import Button from "../../../components/Button";
import { moviesData, menuChooseType } from "../../../components/Datalc";

const cx = classNames.bind(Styles);

function NavigationList() {
  const [visible, setVisible] = useState(20);

  const loadMore = () => {
    setVisible((pre) => pre + 5);
  };
  const reMovemore = () => {
    setVisible((pre) => pre - pre + 20);
  };
  return (
    <nav className={cx("nav")}>
      <ul className={cx("list")}>
        {menuChooseType.map((menuCT, index) => (
          <li className={cx("item")} key={index}>
            <Link to={menuCT.link} className={cx("link")}>
              {menuCT.types}
            </Link>
          </li>
        ))}
      </ul>
      <div className={cx("list-movies")}>
        <ul className={cx("list-item")}>
          {moviesData.slice(0, visible).map((movie) => (
            <li className={cx("list-items")} key={movie.id}>
              <CardMovies
                image={movie.img}
                title={movie.title}
                description={movie.description}
                videoTrailer={movie.videoTrailer}
                id={movie.id}
                episodes={movie.episodes}
              />
            </li>
          ))}
        </ul>
        {visible < moviesData.length ? (
          <Button onClick={loadMore}>Xem thêm</Button>
        ) : (
          <Button onClick={reMovemore}>Thu gọn</Button>
        )}
      </div>
    </nav>
  );
}

export default NavigationList;
