import classNames from "classnames/bind";
import styles from "./Button.module.scss";

const cx = classNames.bind(styles);
function Button({ children, className, onClick, ...passProps }) {
  let Comp = "button";

  const props = {
    onClick,
    ...passProps,
  };
  const classes = cx("wrapper", {
    [className]: className,
  });
  return (
    <Comp className={classes} {...props}>
      <span className={cx("title")}>{children}</span>
    </Comp>
  );
}

export default Button;
