import classNames from "classnames/bind";

import Styles from "./ListSelection.module.scss";
import ImageS from "../../../components/ImageS";

const cx = classNames.bind(Styles);
function ListSelection({ data }) {
  const shuffled = [...data].sort(() => Math.random() - 0.5).slice(0, 6);

  return (
    <div>
      <section className={cx("wrapper")}>
        <div className={cx("inner")}>
          <div className={cx("title")}>
            <h3>Anime mới cập nhật</h3>
          </div>
          <div>
            {shuffled.map((datas) => (
              <ul className={cx("list")} key={datas.id}>
                <li className={cx("list-item")}>
                  <ImageS
                    src={datas.img}
                    alt={datas.title}
                    className={cx("img-item")}
                  />
                  <span className={cx("title-item")}>
                    {datas.title}
                    <p>
                      số tập : {datas.episodes} / {datas.episodes}
                    </p>
                    <p>lượt xem : {datas.views}</p>
                  </span>
                </li>
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
