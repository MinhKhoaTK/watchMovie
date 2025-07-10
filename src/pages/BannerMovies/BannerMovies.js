import classNames from "classnames/bind";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { useState } from "react";

import Styles from "./BannerMovies.module.scss";
import BannerOnly from "../../layout/BannerOnly/BannerOnly";
import ImageS from "../../components/ImageS";
import { RateIcon, RateHalf } from "../../components/Icon";
import Button from "../../components/Button";
import { moviesData, genreSections } from "../../components/Datalc";
import { MovieCategorySection } from "../../layout/components";
import ScrollToTop from "../../components/ScrollToTop";
import ModalTrailer from "../../layout/components/ModalTrailer";
import config from "../../config";
import { slugify } from "../../untils";

const cx = classNames.bind(Styles);
function BannerMovies() {
  // const actionMovies = moviesData.filter((item) => item.category === "action");
  // const animeMovies = moviesData.filter((item) => item.category === "anime");
  // const dramaMovies = moviesData.filter((item) => item.category === "drama");
  // const comedyMovies = moviesData.filter((item) => item.category === "comedy");
  // const horrorMovies = moviesData.filter((item) => item.category === "horror");
  // const spyMovies = moviesData.filter((item) => item.category === "spy");

  const { state } = useLocation();
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  if (!state) return <p>không có dữ liệu phim</p>;

  const { id, title, description, image, videoTrailer, episodes } = state;
  console.log(
    "trang chi tiết <Banner> " + id,
    title,
    description,
    image,
    videoTrailer,
    episodes
  );
  const handleOpenTrailer = () => {
    setIsModalOpen(true);
  };
  const handleCloseTrailer = () => {
    setIsModalOpen(false);
  };
  const handleWatchMovie = () => {
    const movieToWatch = { ...state };
    const slug = slugify(movieToWatch.title);

    navigate(`${config.routes.watch}/${slug}`, { state });
    console.log("👉 Đường dẫn navigate:", `${config.routes.watch}/${state}`);
  };

  return (
    <>
      <ScrollToTop />
      <div className={cx("wrapper")}>
        <BannerOnly>
          <div className={cx("wrapper-info")}>
            <div className={cx("banner")}>
              <ImageS className={cx("img-banner")} src={image} alt="" />
              <ModalTrailer
                videoTrailer={videoTrailer}
                isOpen={isModalOpen}
                onClose={handleCloseTrailer}
              />

              <div className={cx("backgr-op")} />
              <div className={cx("info")}>
                <div className={cx("info-tv")}>
                  <p className={cx("text-info")}>TV Show</p>
                  <h1 className={cx("fade-in-title")}>{title}</h1>
                  <span className={cx("rating")}>
                    <RateIcon />
                    <RateIcon />
                    <RateIcon />
                    <RateIcon />
                    <RateHalf />
                  </span>
                  <p>{description}</p>
                  <Button
                    className={cx("btn-watching")}
                    onClick={handleWatchMovie}
                  >
                    Xem Phim
                  </Button>
                  <Button
                    className={cx("btn-watching")}
                    onClick={handleOpenTrailer}
                  >
                    Xem Trailer
                  </Button>
                </div>
                <div>
                  <ImageS src={image} className={cx("info-img")} />
                </div>
              </div>
            </div>
          </div>
          <div className={cx("container")}>
            <div className={cx("content-banner")}>
              {genreSections.map((genre) => {
                const movies = moviesData.filter(
                  (item) => item.category === genre.slug
                );
                return (
                  <Link key={genre.slug} to={`/genre/${genre.slug}`}>
                    <MovieCategorySection title={genre.title} data={movies} />
                  </Link>
                );
              })}
            </div>
          </div>
        </BannerOnly>
      </div>
    </>
  );
}

export default BannerMovies;
