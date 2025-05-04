import classNames from "classnames/bind";

import Styles from "./Menu.module.scss";
import Button from "../../../components/Button";

const cx = classNames.bind(Styles);
const todolistmenu = [
  {
    name: "Trang Chủ",
  },
  {
    name: "Năm Phát Hành",
    data: [
      {
        id: 1,
        title: "2011",
      },
      {
        id: 2,
        title: "2012",
      },
      {
        id: 3,
        title: "2013",
      },
      {
        id: 4,
        title: "2014",
      },
    ],
  },
  {
    name: "Thể Loại",
    data: [
      {
        id: 1,
        title: "Action",
      },
      {
        id: 2,
        title: "Fantasy",
      },
      {
        id: 3,
        title: "Phiêu Lưu",
      },
      {
        id: 4,
        title: "Phép Thuật",
      },
    ],
  },
  {
    name: "Anime Blu-ray",
  },
  {
    name: "Danh Sách Anime",
    data: [
      {
        id: 1,
        title: "Theo Ngày",
      },
      {
        id: 2,
        title: "Theo Tháng",
      },
      {
        id: 3,
        title: "Theo Mùa",
      },
      {
        id: 4,
        title: "Theo Năm",
      },
      {
        id: 5,
        title: "Theo sờ thích",
      },
    ],
  },
  {
    name: "Lịch Chiếu Anime",
  },
];
const MenuItem = ({ item }) => {
  if (!item.data || item.data.length === 0) return null;
  return (
    <div className={cx("dropdown-content")}>
      {item.data.map((subItem) => (
        <span key={subItem.id} className={cx("dropdown-item")}>
          {subItem.title}
        </span>
      ))}
    </div>
  );
};

function Menu() {
  return (
    <div className={cx("list-menu")}>
      <ul className={cx("list-item")}>
        {todolistmenu.map((item, index) => (
          <li key={index}>
            <Button className={cx("menu-btn")}>{item.name}</Button>
            <MenuItem item={item} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Menu;
