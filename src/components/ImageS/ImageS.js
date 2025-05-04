import classNames from "classnames";
import styles from "./ImageS.module.scss";
import images from "../../assets/images";
import { useState } from "react";

function ImageS(
  { src, alt, className, fallBack = images.errorImg, ...props },
  ref
) {
  const [_fallBack, setFallBack] = useState("");

  const handleError = () => {
    setFallBack(fallBack);
  };
  return (
    <img
      src={_fallBack || src}
      alt={alt}
      className={classNames(styles.wrapper, className)}
      onError={handleError}
    />
  );
}

export default ImageS;
