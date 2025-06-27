import classNames from "classnames/bind";

import Styles from "./BannerOnly.module.scss";
import Header from "../components/Header";
import Footer from "../components/Footer/Footer";

const cx = classNames.bind(Styles);

function BannerOnly({ children }) {
  return (
    <div className={cx("wapper")}>
      <Header />
      <div className={cx("menu")}>{children}</div>
      <Footer />
    </div>
  );
}

export default BannerOnly;
