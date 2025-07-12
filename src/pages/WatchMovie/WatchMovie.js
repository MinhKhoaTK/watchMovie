import { useState, useEffect } from "react";
import classNames from "classnames/bind";
import { useLocation, useParams, useNavigate } from "react-router-dom";

import Styles from "./WatchMovie.module.scss";
import WatchMovieOnly from "../../layout/WatchMovieOnly";
import ScrollToTop from "../../components/ScrollToTop";
import { VideoPlayer, EpisodeCarousel } from "../../layout/components";
import { moviesData } from "../../components/Datalc";
import { slugify } from "../../untils";
import Button from "../../components/Button";
import { VideoIcon } from "../../components/Icon";

const cx = classNames.bind(Styles);
function WatchMovie() {
  ///// Tạo data có slug từ title
  const enhancedData = moviesData.map((m) => ({
    ...m,
    slug: slugify(m.title),
  }));

  const { slug, ep } = useParams();
  const location = useLocation();
  const [currentEp, setCurrentEp] = useState(Number(ep) || 1);
  const navigate = useNavigate();
  // Redirect nếu thiếu ep
  useEffect(() => {
    if (!ep) {
      navigate(`/watch/${slug}/1`, { replace: true });
    }
  }, [ep, slug, navigate]);
  // const movie = location.state || enhancedData.find((m) => m.id === Number(id));
  // Fallback nếu không có state khi reload hoặc mở từ tab mới
  const movie = location.state || enhancedData.find((m) => m.slug === slug);
  if (!movie) return <p className={cx("not-found")}>Phim không tồn tại</p>;

  const { id, description, image, episodes } = movie;
  const currentVideo = movie.episodes?.[currentEp - 1] || "";

  console.log("WatchMovie PAge : episodes : " + episodes);
  // console.log("WatchMovie PAge : movie.videoUrls : " + movieurl);

  console.log("WatchMovie PAge : movie.title : " + movie.title);
  console.log("WatchMovie PAge : currentVideo : " + movie.title);

  const handleClickChooseEp = (epNum) => {
    setCurrentEp(epNum);
    navigate(`/watch/${slugify(movie.title)}/${epNum}`);
  };
  return (
    <>
      <ScrollToTop />
      <div className={cx("container")}>
        <WatchMovieOnly>
          <div className={cx("wrapper")}>
            <div className={cx("video-player")}>
              <VideoPlayer
                id={id}
                title={`${movie.title} - Tập ${currentEp}`}
                description={description}
                image={image}
                videoUrl={currentVideo}
              />
            </div>
            <div className={cx("server")}>
              <Button className={cx("btn-server")}>server Normal</Button>
              <Button className={cx("btn-server")}>server VIP</Button>
            </div>
            <div className={cx("Episode-carousel")}>
              <p className={cx("title-ep")}>
                <VideoIcon className={cx("icon-flim")} /> Danh Sách Tập :
              </p>
              <EpisodeCarousel
                episodes={episodes}
                currentEp={currentEp}
                onSelect={(epNum) => handleClickChooseEp(epNum)}
              />
            </div>
          </div>
        </WatchMovieOnly>
      </div>
    </>
  );
}

export default WatchMovie;
