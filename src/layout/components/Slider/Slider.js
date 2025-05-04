import classNames from "classnames/bind";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import styles from "./Slider.module.scss";
import ImageS from "../../../components/ImageS/ImageS";

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
          <SwiperSlide>
            <div className={cx("list-item")}>
              <div className={cx("inner")}>
                <ImageS
                  className={cx("image")}
                  src="https://i.pinimg.com/1200x/42/96/5d/42965d54e95f8f50ccc80649573e73f6.jpg"
                />
              </div>
              <div className={cx("overlay-content")}>
                <p>dicription sandk sakjdnaks asnkd</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={cx("list-item")}>
              <div className={cx("inner")}>
                <ImageS
                  className={cx("image")}
                  src="https://i.pinimg.com/1200x/42/96/5d/42965d54e95f8f50ccc80649573e73f6.jpg"
                />
              </div>
              <div className={cx("overlay-content")}>
                <p>dicription sandk sakjdnaks asnkd</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={cx("list-item")}>
              <div className={cx("inner")}>
                <ImageS
                  className={cx("image")}
                  src="https://i.pinimg.com/1200x/42/96/5d/42965d54e95f8f50ccc80649573e73f6.jpg"
                />
              </div>
              <div className={cx("overlay-content")}>
                <p>dicription sandk sakjdnaks asnkd</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={cx("list-item")}>
              <div className={cx("inner")}>
                <ImageS
                  className={cx("image")}
                  src="https://i.pinimg.com/1200x/42/96/5d/42965d54e95f8f50ccc80649573e73f6.jpg"
                />
              </div>
              <div className={cx("overlay-content")}>
                <p>dicription sandk sakjdnaks asnkd</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={cx("list-item")}>
              <div className={cx("inner")}>
                <ImageS
                  className={cx("image")}
                  src="https://i.pinimg.com/1200x/42/96/5d/42965d54e95f8f50ccc80649573e73f6.jpg"
                />
              </div>
              <div className={cx("overlay-content")}>
                <p>dicription sandk sakjdnaks asnkd</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={cx("list-item")}>
              <div className={cx("inner")}>
                <ImageS
                  className={cx("image")}
                  src="https://i.pinimg.com/1200x/42/96/5d/42965d54e95f8f50ccc80649573e73f6.jpg"
                />
              </div>
              <div className={cx("overlay-content")}>
                <p>dicription sandk sakjdnaks asnkd</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={cx("list-item")}>
              <div className={cx("inner")}>
                <ImageS
                  className={cx("image")}
                  src="https://i.pinimg.com/1200x/42/96/5d/42965d54e95f8f50ccc80649573e73f6.jpg"
                />
              </div>
              <div className={cx("overlay-content")}>
                <p>dicription sandk sakjdnaks asnkd</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={cx("list-item")}>
              <div className={cx("inner")}>
                <ImageS
                  className={cx("image")}
                  src="https://i.pinimg.com/1200x/42/96/5d/42965d54e95f8f50ccc80649573e73f6.jpg"
                />
              </div>
              <div className={cx("overlay-content")}>
                <p>dicription sandk sakjdnaks asnkd</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={cx("list-item")}>
              <div className={cx("inner")}>
                <ImageS
                  className={cx("image")}
                  src="https://i.pinimg.com/1200x/42/96/5d/42965d54e95f8f50ccc80649573e73f6.jpg"
                />
              </div>
              <div className={cx("overlay-content")}>
                <p>dicription sandk sakjdnaks asnkd</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      {/*
      
      */}
    </div>
  );
}

export default Sliders;
