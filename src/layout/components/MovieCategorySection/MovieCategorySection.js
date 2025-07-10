import PropTypes from "prop-types";
import classNames from "classnames/bind";
import { Swiper, SwiperSlide } from "swiper/react";

import Styles from "./MovieCategorySection.module.scss";
import { CardMovies } from "../../../layout/components";

const cx = classNames.bind(Styles);

function MovieCategorySection({ title, data = [] }) {
  if (data.length === 0) return null;
  console.log("movieCategory : " + title);
  const Datas = data.map((d) => d.category);
  console.log("data-movieCategory : " + Datas);
  return (
    <div className={cx("movie-category")}>
      <h2 className={cx("title-content")}>{title}</h2>
      <Swiper
        spaceBetween={5}
        slidesPerView={3}
        breakpoints={{
          300: { slidesPerView: 2 },
          660: { slidesPerView: 3 },
          768: { slidesPerView: 5 },
          1024: { slidesPerView: 7 },
        }}
      >
        {data.map((movie) => (
          <SwiperSlide key={movie.id}>
            <CardMovies
              id={movie.id}
              image={movie.img}
              title={movie.title}
              description={movie.description}
              videoTrailer={movie.videoTrailer}
              key={movie.id}
              episodes={movie.episodes}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

MovieCategorySection.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieCategorySection;
