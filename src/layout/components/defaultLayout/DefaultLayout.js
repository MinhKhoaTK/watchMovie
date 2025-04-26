import className from "classnames/bind";

import Header from "../Header";
import styles from "./DefaultLayout.module.scss";

const cx = className.bind(styles);
function DefaultLayout() {
  return (
    <div className={cx("wrapper")}>
      <Header />
      <div className={cx("container")}>asdassdad</div>
    </div>
  );
}

export default DefaultLayout;
