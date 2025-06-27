import classNames from "classnames/bind";
import { Swiper, SwiperSlide } from "swiper/react";

import Styles from "./BannerMovies.module.scss";
import { Sidebar } from "../../layout/components";
import BannerOnly from "../../layout/BannerOnly/BannerOnly";
import ImageS from "../../components/ImageS";
import images from "../../assets/images";
import { RateIcon, RateHalf } from "../../components/Icon";
import Button from "../../components/Button";
import { CardMovies } from "../../layout/components";
import { moviesData } from "../../components/Datalc";

const cx = classNames.bind(Styles);
function BannerMovies() {
  return (
    <div className={cx("wrapper")}>
      <BannerOnly>
        <div className={cx("wrapper-info")}>
          <div className={cx("banner")}>
            <ImageS className={cx("img-banner")} src={images.venom} alt="" />
            <div className={cx("backgr-op")} />
            <div className={cx("info")}>
              <div className={cx("info-tv")}>
                <p className={cx("text-info")}>TV Show</p>
                <h1>Venom Kèo Cuối</h1>
                <span className={cx("rating")}>
                  <RateIcon />
                  <RateIcon />
                  <RateIcon />
                  <RateIcon />
                  <RateHalf />
                </span>
                <p>
                  Venom: Kèo cuối là phim điện ảnh siêu anh hùng Mỹ phát hành
                  năm 2024 của đạo diễn kiêm biên kịch Kelly Marcel. Phim dựa
                  trên nhân vật cùng tên trong truyện tranh Marvel
                </p>
                <Button className={cx("btn-watching")}>Xem Phim</Button>
              </div>
              <div>
                <ImageS src={images.venom} className={cx("info-img")} />
              </div>
            </div>
          </div>
        </div>
        <div className={cx("container")}>
          <div className={cx("content-banner")}>
            <p>Phim đề xuất</p>

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
              {moviesData.map((datas) => (
                <SwiperSlide key={datas.id}>
                  <CardMovies image={datas.img} description={datas.title} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className={cx("sidebar-banner")}>
            <Sidebar />
          </div>
        </div>
      </BannerOnly>
    </div>
  );
}

export default BannerMovies;
