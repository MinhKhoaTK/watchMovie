import className from "classnames/bind";
import Header from "../Header";
import styles from "./DefaultLayout.module.scss";
import SliderSwiper from "../Slider";
import MenuType from "../Menu";
import Footer from "../Footer/Footer";
const cx = className.bind(styles);
function DefaultLayout({ children }) {
  return (
    <div className={cx("wrapper")}>
      <Header />
      <div className={cx("menu")}>
        <MenuType />
      </div>
      <div className={cx("slider")}>
        <SliderSwiper />
      </div>
      <div className={cx("content")}>{children}</div>
      <Footer />
    </div>
  );
}

export default DefaultLayout;
