import className from "classnames/bind";
import { Link, Routes, Route } from "react-router-dom";

import { HomePage, ContactPage } from "../../../pages";
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
        <ul style={{ display: "flex" }}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
        </ul>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Contact" element={<ContactPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default DefaultLayout;
