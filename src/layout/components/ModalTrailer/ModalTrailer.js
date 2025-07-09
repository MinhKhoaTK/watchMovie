import classNames from "classnames/bind";
import Styles from "./ModalTrailer.module.scss";
import Button from "../../../components/Button";
const cx = classNames.bind(Styles);

function ModalTrailer({ videoTrailer, isOpen, onClose }) {
  // console.log(" Trang ModelTrailer,🎥 videoTrailer:", videoTrailer);

  if (!isOpen) return null;
  return (
    <div className={cx("modal-overlay")} onClick={onClose}>
      <div className={cx("modal-content")} onClick={(e) => e.stopPropagation()}>
        <iframe
          className="modal-iframe"
          src={`https://www.youtube.com/embed/${videoTrailer}?autoplay=1`}
          allow="autoplay; encrypted-media"
          allowFullScreen
          title="Trailer"
        />
        <Button className={cx("modal-btn")} onClick={onClose}>
          X
        </Button>
      </div>
    </div>
  );
}

export default ModalTrailer;
