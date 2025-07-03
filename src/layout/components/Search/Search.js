import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css"; // Style mặc định
import classNames from "classnames/bind";
import { useState } from "react";

import Styles from "./Search.module.scss";
import { SearchIcon } from "../../../components/Icon/Icon";
import ImageS from "../../../components/ImageS";

const cx = classNames.bind(Styles);

function Search({ onSearch, results }) {
  const [value, setValue] = useState("");
  const handleChange = (e) => {
    setValue(e.target.value);
    onSearch(e.target.value);
  };
  const reMoveResults = () => {
    setValue("");
    onSearch("");
  };
  return (
    <>
      <Tippy
        visible={value.trim().length > 0 && results.length > 0}
        interactive={true}
        placement="bottom"
        onClickOutside={reMoveResults}
        render={(attrs) => (
          <div className={cx("search-results")} tabIndex="-1" {...attrs}>
            {results.map((movie) => (
              <div className={cx("results-item")} key={movie.id}>
                <div className={cx("tab1")}>
                  <ImageS className={cx("img-results")} src={movie.img} />
                </div>
                <div className={cx("tab2")}>
                  <span>{movie.title}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      >
        <div className={cx("group")}>
          <input
            className={cx("input")}
            type="search"
            placeholder="Anime you need to find"
            value={value}
            onChange={handleChange}
          />
          <SearchIcon className={cx("search__icon")} />
        </div>
      </Tippy>
    </>
  );
}

export default Search;
