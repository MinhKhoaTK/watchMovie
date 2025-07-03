import classNames from "classnames/bind";
import { Link } from "react-router-dom";

import Styles from "./Sidebar.module.scss";
import Images from "../../../components/ImageS";
import images from "../../../assets/images";
import ListSelection from "../ListSelection/ListSelection";
import { moviesData } from "../../../components/Datalc";
const cx = classNames.bind(Styles);
function Sidebar() {
  return (
    <div className={cx("wrapper")}>
      <span>Like Page Ủng hộ nha</span>
      <div className={cx("sb-content")}>
        <div className={cx("sb-wrap-image")}>
          <Images className={cx("sb-image")} src={images.logo} alt="" />
        </div>
        <div className={cx("sb-title")}>
          <Link className={cx("sb-link")} href="">
            <h3>AnimeFP.com</h3>
          </Link>
          <span>
            <ul className={cx("sb-list-tt")}>
              <li>Khám phá thế giới Anime </li>
              <li>Trãi nghiệm những khoảnh khắc tuyệt vời</li>
              <li>Theo dỗi Fan Page để không bỏ lỡ những bộ Anime tuyệt vời</li>
            </ul>
          </span>
        </div>
      </div>
      <ListSelection data={moviesData} />

      {/* <section>
        <div>
          <h2>Anime Mới cập Nhật</h2>
        </div>
        <div>

        </div>
      </section> */}
    </div>
  );
}

export default Sidebar;
