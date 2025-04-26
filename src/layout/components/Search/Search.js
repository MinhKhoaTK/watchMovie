import classNames from "classnames/bind";
import Styles from "./Search.module.scss";
import { SearchIcon } from "../../../components/Icon/Icon";

const cx = classNames.bind(Styles);

function Search() {
  return (
    // <div className={cx("search")}>
    //   <input placeholder="Anime you need to find" />
    // </div>
    <div className={cx("group")}>
      <input
        className={cx("input")}
        type="search"
        placeholder="Anime you need to find"
      />
      <SearchIcon className={cx("search__icon")} />
    </div>
  );
}

export default Search;
