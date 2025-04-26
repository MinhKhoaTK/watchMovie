import classNames from "classnames";
import styles from "./ImageS.module.scss";
import images from "../../assets/images";
import { useState } from "react";

function ImageS(
  { src, alt, classname, fallBack = images.errorImg, ...props },
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
      className={classNames(styles.wrapper, classname)}
      onError={handleError}
    />
  );
}

export default ImageS;
