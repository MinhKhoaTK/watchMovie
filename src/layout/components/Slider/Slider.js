import classNames from "classnames/bind";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import styles from "./Slider.module.scss";
import ImageS from "../../../components/ImageS/ImageS";
import { sliceMovies } from "../../../components/Datalc";

const cx = classNames.bind(styles);
function Sliders() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("update-movies")}>Anime Sắp Được Ra Mắt</div>
      <div className={cx("list")}>
        <Swiper
          spaceBetween={5}
          slidesPerView={3}
          breakpoints={{
            300: {
              slidesPerView: 2,
            },
            660: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 4,
            },
            1024: {
              slidesPerView: 7,
            },
          }}
        >
          {sliceMovies.map((video) => (
            <SwiperSlide key={video.id}>
              <div className={cx("list-item")}>
                <div className={cx("inner")}>
                  <ImageS className={cx("image")} src={video.img} />
                </div>
                <div className={cx("overlay-content")}>
                  <p>{video.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/*
      
      */}
    </div>
  );
}

export default Sliders;
