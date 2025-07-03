import classNames from "classnames/bind";

import Styles from "./Home.module.scss";
import DefaultLayout from "../../layout/components/defaultLayout";
import NavigationList from "../../layout/components/NavigationList";
import Sidebar from "../../layout/components/Sidebar";

const cx = classNames.bind(Styles);
function Home() {
  return (
    <DefaultLayout>
      <div className={cx("wrapper")}>
        <NavigationList />
        <span className={cx("sidebar")}>
          <Sidebar />
        </span>
      </div>
    </DefaultLayout>
  );
}

export default Home;
