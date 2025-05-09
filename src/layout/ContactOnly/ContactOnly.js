import className from "classnames/bind";

import Styles from "./ContactOnly.scss";
import Header from "../components/Header";

const cx = className.bind(Styles);
function ContactOnly({ children }) {
  return (
    <div className={cx("wrapper")}>
      <Header />
      <div className={cx("menu")}>{children}</div>
    </div>
  );
}

export default ContactOnly;
