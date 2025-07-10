import classNames from "classnames/bind";
import Tippy from "@tippyjs/react";
import { useNavigate } from "react-router-dom";
import "./TippyCard.scss";

import Styles from "./CardMovies.module.scss";
import ImageS from "../../../components/ImageS";
import config from "../../../config";

const cx = classNames.bind(Styles);
function CardMovies({ id, image, description, title, videoTrailer, episodes }) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(config.routes.baner, {
      state: {
        id,
        title,
        image,
        description,
        videoTrailer,
        episodes,
      },
    });
  };
  return (
    <div className={cx("container")}>
      <Tippy
        delay={(1000, 100)}
        content={
          <div className="wapper-content">
            <strong className="tooltip-title">{title}</strong>
            <div className="tooltip-divider" />

            <div className="tooltip-desc">{description}</div>
          </div>
        }
        appendTo={document.body} // Đảm bảo tooltip render ở cấp cao
        offset={[0, 10]}
        placement="top-end"
        interactive={true}
      >
        <div className={cx("box")} onClick={handleClick}>
          <span className={cx("title")}>
            <ImageS src={image} alt="" className={cx("img")} />
            <div className={cx("title")}>{title}</div>
          </span>
        </div>
      </Tippy>
    </div>
  );
}

export default CardMovies;
