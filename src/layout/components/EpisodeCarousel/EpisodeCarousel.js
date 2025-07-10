import classNames from "classnames/bind";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css";

import Styles from "./EpisodeCarousel.module.scss";
import ImageS from "../../../components/ImageS";
// import { moviesData } from "../../../components/Datalc";

const cx = classNames.bind(Styles);
function EpisodeCarousel({ episodes, currentEp, onSelect }) {
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
          {episodes.map((ep, index) => {
            const epNum = index + 1;
            return (
              <SwiperSlide key={ep.id || index}>
                <div
                  onClick={() => onSelect(epNum)}
                  className={cx("content", { active: currentEp === epNum })}
                >
                  <ImageS src={ep.thumbnail} className={cx("img")} />
                  <p className={cx("caption")}>{ep.title}</p>
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
