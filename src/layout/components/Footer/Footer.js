import classNames from "classnames/bind";
import { Link } from "react-router-dom";

import Styles from "./Footer.module.scss";
import Button from "../../../components/Button";
import {
  TwitterIcon,
  InstagramIcon,
  FacebookIcon,
  PhoneIcon,
} from "../../../components/Icon";

const cx = classNames.bind(Styles);

function Footer() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("inner")}>
        <div className={cx("footer-start")}>
          <p>
            <strong>Anime For People</strong>
            is run by fans, for fans
          </p>
          <Button className={cx("btn-footer")}>Support us on Patreon</Button>
          <p>
            Learn about more ways to support
            <br />
            <Link to="/contact" className={cx("linkto")}>
              Anime-For-People
            </Link>
          </p>
        </div>
        <div className={cx("footer-midle")}>
          <div className={cx("icon-contact")}>
            <div className={cx("item")}>
              <TwitterIcon className={cx("icon")} />
              <div className={cx("item-info")}>
                <span>Twitter</span>
                <p>
                  <Link to="" className={cx("linkto")}>
                    Twitter@animeforpeople
                  </Link>
                </p>
              </div>
            </div>
            <div className={cx("item")}>
              <InstagramIcon className={cx("icon")} />
              <div className={cx("item-info")}>
                <span>Instagram</span>
                <p>
                  <Link to="" className={cx("linkto")}>
                    Instagram@animeforpeople
                  </Link>
                </p>
              </div>
            </div>
            <div className={cx("item")}>
              <FacebookIcon className={cx("icon")} />
              <div className={cx("item-info")}>
                <span>Facebook</span>
                <p>
                  <Link to="" className={cx("linkto")}>
                    Facebook@animeforpeople
                  </Link>
                </p>
              </div>
            </div>
            <div className={cx("item")}>
              <PhoneIcon className={cx("icon")} />
              <div className={cx("item-info")}>
                <span>Phone</span>
                <p>
                  <Link to="" className={cx("linkto")}>
                    999-9999-999
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={cx("footer-end")}>
          <ul className={cx("ft-list")}>
            <li>
              <Link className={cx("linkto")}>Contact</Link>
            </li>
            <li>
              <Link className={cx("linkto")}>About</Link>
            </li>
            <li>
              <Link className={cx("linkto")}>Terms of Use</Link>
            </li>
            <li>
              <Link className={cx("linkto")}>Terms of Use</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
