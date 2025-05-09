import classNames from "classnames/bind";

import Styles from "./Contact.module.scss";
import ContactOnly from "../../layout/ContactOnly";
import ImageS from "../../components/ImageS/ImageS";
import images from "../../assets/images";
import Button from "../../components/Button";
import Inputs from "../../components/Inputs";
import {
  TwitterIcon,
  InstagramIcon,
  FacebookIcon,
  PhoneIcon,
} from "../../components/Icon";
import { useState } from "react";

const cx = classNames.bind(Styles);
function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [yourMess, setYourMess] = useState("");
  return (
    <div>
      <ContactOnly>
        <div className={cx("content")}>
          <ImageS
            className={cx("imgContact")}
            src={images.contact}
            alt="contactUS"
          />
          <div className={cx("inner")}>
            <div className={cx("title")}>
              <h1>Contact Us</h1>
              <span>
                Thank you for visiting Anime For People! We love connecting with
                fellow anime fans and hearing your thoughts. If you have any
                questions, suggestions, or collaboration inquiries, feel free to
                reach out to us.
              </span>
              <span>
                📩 Email: For general inquiries, contact us at
                support@animeforpeople.com For partnerships and business
                inquiries, email business@animeforpeople.com
              </span>
            </div>
            <div className={cx("info-contacts")}>
              <div className={cx("icon-contact")}>
                <p>Follow us for the latest updates and anime discussions:</p>
                <div className={cx("item")}>
                  <TwitterIcon className={cx("icon")} />
                  <div className={cx("item-info")}>
                    <span>Twitter</span>
                    <p>Twitter@animeforpeople</p>
                  </div>
                </div>
                <div className={cx("item")}>
                  <InstagramIcon className={cx("icon")} />
                  <div className={cx("item-info")}>
                    <span>Instagram</span>
                    <p>Instagram@animeforpeople</p>
                  </div>
                </div>
                <div className={cx("item")}>
                  <FacebookIcon className={cx("icon")} />
                  <div className={cx("item-info")}>
                    <span>Facebook</span>
                    <p>Facebook@animeforpeople</p>
                  </div>
                </div>
                <div className={cx("item")}>
                  <PhoneIcon className={cx("icon")} />
                  <div className={cx("item-info")}>
                    <span>Phone</span>
                    <p>999-9999-999</p>
                  </div>
                </div>
              </div>
              <div className={cx("table-contact")}>
                <h1 className={cx("title-contact")}>Send Message</h1>
                <Inputs
                  placeholder={"Your Name..."}
                  className={cx("input-info")}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <Inputs
                  placeholder={"Your Email..."}
                  className={cx("input-info")}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Inputs
                  placeholder={"Your Message..."}
                  className={cx("input-info")}
                  value={yourMess}
                  onChange={(e) => setYourMess(e.target.value)}
                />
                <Button custom className={cx("btn-contact")}>
                  Send
                </Button>
              </div>
            </div>
            <div className={cx("addres-contact")}>
              <h2>Address Anime Building</h2>
              <span>
                Anime For People Headquarters 123 Anime Street, Tokyo, Japan .
              </span>
              <p>
                We’re always happy to chat with fellow anime lovers! Drop us a
                message, and we’ll get back to you as soon as possible. Stay
                awesome and keep enjoying anime!
              </p>
            </div>
          </div>
        </div>
      </ContactOnly>
    </div>
  );
}

export default Contact;
