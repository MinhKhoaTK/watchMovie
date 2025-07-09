import classNames from "classnames/bind";

import Styles from "./VideoPlayer.module.scss";

const cx = classNames.bind(Styles);

function VideoPlayer({ id, title, image, description, videoUrl }) {
  // const testMovie = moviesData.find((movie) => movie.id === 56);
  console.log("component Videoplayer : " + title, image, description, videoUrl);
  return (
    <div className={cx("wrapper")}>
      <video className={cx("player")} controls poster={image} key={videoUrl}>
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <h2 className={cx("title")}>{title}</h2>
      <p className={cx("description")}>{description}</p>
    </div>
  );
}
export default VideoPlayer;
