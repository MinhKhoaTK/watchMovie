import { useState } from "react";
import classNames from "classnames/bind";
import { useLocation, useParams } from "react-router-dom";

import Styles from "./WatchMovie.module.scss";
import WatchMovieOnly from "../../layout/WatchMovieOnly";
import ScrollToTop from "../../components/ScrollToTop";
import { VideoPlayer, EpisodeCarousel } from "../../layout/components";
import { moviesData } from "../../components/Datalc";
import { slugify } from "../../untils";

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

  // const movie = location.state || enhancedData.find((m) => m.id === Number(id));
  // Fallback nếu không có state khi reload hoặc mở từ tab mới
  const movie = location.state || enhancedData.find((m) => m.slug === slug);
  if (!movie) return <p className={cx("not-found")}>Phim không tồn tại</p>;

  const { id, description, image, episodes, thumbnailUrls } = movie;
  const currentVideo = movie.videoUrl?.[currentEp - 1] || "";

  console.log("WatchMovie PAge : episodes : " + episodes);
  console.log("WatchMovie PAge : movie.videoUrls : " + movie.videoUrl);
  console.log("WatchMovie PAge : movie.title : " + movie.title);
  console.log("WatchMovie PAge : currentVideo : " + movie.title);
  console.log("WatchMovie PAge : movie.thumbnailUrls : " + movie.thumbnailUrls);

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
            <div className={cx("Episode-carousel")}>
              <EpisodeCarousel
                thumbnailUrls={thumbnailUrls}
                episodes={episodes}
                currentEp={currentEp}
                onSelect={setCurrentEp}
              />
            </div>
          </div>
        </WatchMovieOnly>
      </div>
    </>
  );
}

export default WatchMovie;
