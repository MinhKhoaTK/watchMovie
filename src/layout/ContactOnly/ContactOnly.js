import className from "classnames/bind";

import Styles from "./ContactOnly.scss";
import Header from "../components/Header";
import Footer from "../components/Footer/Footer";

const cx = className.bind(Styles);
function ContactOnly({ children }) {
  return (
    <div className={cx("wrapper")}>
      <Header />
      <div className={cx("menu")}>{children}</div>
      <Footer />
    </div>
  );
}

export default ContactOnly;
