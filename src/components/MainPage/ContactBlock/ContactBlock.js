import React, { useState, useEffect, useRef, useContext } from "react";

import PositionContext from "../../../store/position-context";
import StringTwinkle from "../../UI/StringTwinkle/StringTwinkle";

import styles from "./ContactBlock.module.css";

const viewHeight = window.innerHeight;

const ContactBlock = () => {
  const { height } = useContext(PositionContext);
  const [contactIsShow, setContactIsShow] = useState(false);
  const contactRef = useRef();

  useEffect(() => {
    const contactRectY = contactRef.current.getBoundingClientRect().y;
    const contactOffsetHeight = contactRef.current.offsetHeight;

    if (
      !contactIsShow &&
      contactRectY < viewHeight - 100 &&
      contactRectY + contactOffsetHeight > 100
    ) {
      setContactIsShow(true);
    } else if (
      contactIsShow &&
      (contactRectY >= viewHeight - 100 ||
        contactRectY + contactOffsetHeight <= 100)
    ) {
      setContactIsShow(false);
    }
  }, [height, contactIsShow]);

  return (
    <section id="contact" className={styles.contact} ref={contactRef}>
      {contactIsShow && (
        <div className={styles.container}>
          <div className={styles.line}></div>
          <div className={styles.infoCard}>
            <div className={styles.info}>
              <h3>
                <StringTwinkle string="My Contact Information" isShort={true} />
              </h3>
              <a
                rel="noreferrer"
                target="_blank"
                href="https://www.facebook.com/adam.chiu.73/"
              >
                <StringTwinkle string="Facebook: Adam Chiu" isShort={true} />
              </a>
              <a
                rel="noreferrer"
                target="_blank"
                href="https://www.instagram.com/chiuyuan0214/"
              >
                <StringTwinkle
                  string="Instagram: chiuyuan0214"
                  isShort={true}
                />
              </a>
              <a href="mailto:rumble88481@gmail.com">
                <StringTwinkle
                  string="E-mail: rumble88481@gmail.com.tw"
                  isShort={true}
                />
              </a>
              <a href="tel:0902-350-579">
                <StringTwinkle string="Phone: 0902-350-579" isShort={true} />
              </a>
              <span className={styles.japan}>
                ※メールへの対応は少しの時間がかかるので、もしお急ぎの場合、どうか携帯で連絡して下さい。
              </span>
            </div>
          </div>
          <div className={styles.line}></div>
        </div>
      )}
    </section>
  );
};

export default ContactBlock;
