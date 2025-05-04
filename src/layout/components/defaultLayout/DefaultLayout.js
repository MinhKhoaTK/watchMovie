import className from "classnames/bind";

import Header from "../Header";
import styles from "./DefaultLayout.module.scss";
import SliderSwiper from "../Slider";
import MenuType from "../Menu";
const cx = className.bind(styles);
function DefaultLayout() {
  return (
    <div className={cx("wrapper")}>
      <Header />
      <div className={cx("menu")}>
        <MenuType />
      </div>
      <div className={cx("slider")}>
        <SliderSwiper />
      </div>
    </div>
  );
}

export default DefaultLayout;
