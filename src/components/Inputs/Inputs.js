import classNames from "classnames/bind";

import Styles from "./Inputs.module.scss";

const cx = classNames.bind(Styles);
function Inputs({
  children,
  className,
  placeholder,
  onChange,
  custom = false,
  value,
  ...passProps
}) {
  let Comp = "input";
  const props = {
    onChange,
    value,
    ...passProps,
  };
  const classes = cx("input", {
    [className]: className,
    custom,
  });

  return (
    <div>
      <Comp
        onChange={onChange}
        placeholder={placeholder}
        className={classes}
        value={value}
        type="text"
        {...props}
      />
    </div>
  );
}

export default Inputs;
