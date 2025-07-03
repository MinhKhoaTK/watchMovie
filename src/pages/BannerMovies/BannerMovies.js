import classNames from "classnames/bind";
import { useLocation } from "react-router-dom";

import Styles from "./BannerMovies.module.scss";
import BannerOnly from "../../layout/BannerOnly/BannerOnly";
import ImageS from "../../components/ImageS";
import { RateIcon, RateHalf } from "../../components/Icon";
import Button from "../../components/Button";
import { moviesData } from "../../components/Datalc";
import { MovieCategorySection } from "../../layout/components";
import ScrollToTop from "../../components/ScrollToTop";

const cx = classNames.bind(Styles);
function BannerMovies() {
  const actionMovies = moviesData.filter((item) => item.category === "action");
  const animeMovies = moviesData.filter((item) => item.category === "anime");
  const dramaMovies = moviesData.filter((item) => item.category === "drama");
  const comedyMovies = moviesData.filter((item) => item.category === "comedy");

  const { state } = useLocation();
  if (!state) return <p>không có dữ liệu phim</p>;

  const { title, description, image } = state;

  return (
    <>
      <ScrollToTop />
      <div className={cx("wrapper")}>
        <BannerOnly>
          <div className={cx("wrapper-info")}>
            <div className={cx("banner")}>
              <ImageS className={cx("img-banner")} src={image} alt="" />
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
                  <Button className={cx("btn-watching")}>Xem Phim</Button>
                </div>
                <div>
                  <ImageS src={image} className={cx("info-img")} />
                </div>
              </div>
            </div>
          </div>
          <div className={cx("container")}>
            <div className={cx("content-banner")}>
              <MovieCategorySection
                title="Phim Hành Động"
                data={actionMovies}
              />
              <MovieCategorySection title="Drama" data={dramaMovies} />
              <MovieCategorySection title="Phim Hoạt Hình" data={animeMovies} />
              <MovieCategorySection
                title="Thể Loại Comedy"
                data={comedyMovies}
              />
            </div>
          </div>
        </BannerOnly>
      </div>
    </>
  );
}

export default BannerMovies;
