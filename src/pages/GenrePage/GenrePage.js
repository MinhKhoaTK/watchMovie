import classNames from "classnames/bind";

import Style from "./GenrePage.module.scss";
import GenrePageOnly from "../../layout/GenrePageOnly";
import { GenreSection } from "../../layout/components";
import { moviesData } from "../../components/Datalc";
import { Sidebar } from "../../layout/components";
const cx = classNames.bind(Style);
function GenrePage() {
  return (
    <div>
      <GenrePageOnly>
        <div className={cx("wrapper")}>
          <div className={cx("container")}>
            <div className={cx("list-item")}>
              <GenreSection data={moviesData} />
            </div>
            <div className={cx("row")} />
            <span className={cx("sidebar")}>
              <Sidebar />
            </span>
          </div>
        </div>
      </GenrePageOnly>
    </div>
  );
}

export default GenrePage;
