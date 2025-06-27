import classNames from "classnames/bind";

import Styles from "./CardMovies.module.scss";
import ImageS from "../../../components/ImageS";

const cx = classNames.bind(Styles);
function CardMovies({ image, description }) {
  return (
    <div className={cx("container")}>
      <div className={cx("box")}>
        <span className={cx("title")}>
          <ImageS src={image} alt="" className={cx("img")} />
          <div className={cx("title")}>{description}</div>
        </span>
      </div>
    </div>
  );
}

export default CardMovies;
