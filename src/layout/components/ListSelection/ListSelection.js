import classNames from "classnames/bind";

import Styles from "./ListSelection.module.scss";

const cx = classNames.bind(Styles);
function ListSelection({ data }) {
  return (
    <div>
      <section className={cx("wrapper")}>
        <div className={cx("inner")}>
          <div className={cx("title")}>
            <h3>Anime mới cập nhật</h3>
          </div>
          <div>
            {data.map((datas) => (
              <ul className={cx("list")} key={datas.id}>
                <li className={cx("list-item")}>{datas.title}</li>
              </ul>
            ))}
            <div className={cx("btn-sl")}>
              <span className={cx("btn")}>Load more</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ListSelection;
