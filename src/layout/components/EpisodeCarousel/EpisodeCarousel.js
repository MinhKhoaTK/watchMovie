import classNames from "classnames/bind";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css";

import Styles from "./EpisodeCarousel.module.scss";
import ImageS from "../../../components/ImageS";
// import { moviesData } from "../../../components/Datalc";

const cx = classNames.bind(Styles);
function EpisodeCarousel({ episodes, currentEp, thumbnailUrls, onSelect }) {
  console.log("Episodes Page : episodes " + episodes);
  console.log("Episodes Page : currentEp " + currentEp);

  return (
    <div className={cx("wrapper")}>
      <div className={cx("container")}>
        <Swiper
          spaceBetween={10}
          slidesPerView={4}
          breakpoints={{
            580: { slidesPerView: 2 },
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
          }}
        >
          {Array.from({ length: episodes }, (_, index) => {
            const ep = index + 1;
            // console.log("chuyển tập" + onSelect(ep));
            return (
              <SwiperSlide key={ep}>
                <div
                  onClick={() => onSelect(ep)}
                  className={cx("content", { active: currentEp === ep })}
                >
                  <ImageS src={thumbnailUrls[ep - 1]} className={cx("img")} />
                  <p className={cx("caption")}>Tập {ep}</p>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}

export default EpisodeCarousel;
