import { useEffect, useState } from "preact/hooks";
import styles from "./Footer.module.scss";

export default function footer() {
  const [year, setYear] = useState("[year]");
  useEffect(() => {
    setYear(new Date().getFullYear());
  });

  return (
    <div className={styles.footer}>
      <div className={styles.footerLayout}>
        <div className={styles.tachyonDef}>
          <span className={styles.tachyonText}>tachyon</span>
          <span className={styles.tachyonTextPronunciation}>
            /ˈtækiɒn/ (ta · kee · uhn)
          </span>
          <p>
            a hypothetical particle that always travels{" "}
            <span className={styles.glitch}>
              <span aria-hidden="true">faster than light</span>
              faster than light
              <span aria-hidden="true">faster than light</span>
            </span>
          </p>
        </div>
        <div className={styles.line}></div>
        <div className={styles.socials}>
          <a href={"https://www.instagram.com/f1_tachyons/"} target={"_blank"}>
            <div className={styles.socialIconCont}>
              <iconify-icon
                className={styles.socialIcon}
                icon="mdi:instagram"
              ></iconify-icon>
            </div>
          </a>

          <a href={"https://www.tiktok.com/@tachyons.f1/"} target={"_blank"}>
            <div className={styles.socialIconCont}>
              <iconify-icon
                className={styles.socialIcon}
                icon="ic:baseline-tiktok"
              ></iconify-icon>
            </div>
          </a>

          <a href={"https://www.youtube.com/@Tachyons.f1/"} target={"_blank"}>
            <div className={styles.socialIconCont}>
              <iconify-icon
                className={styles.socialIcon}
                icon="bxl:youtube"
              ></iconify-icon>
            </div>
          </a>

          <a href={"mailto:F1.tachyons@gmail.com"}>
            <div className={styles.socialIconCont}>
              <iconify-icon
                className={styles.socialIcon}
                icon="material-symbols:alternate-email"
              ></iconify-icon>
            </div>
          </a>
        </div>
      </div>
      <div className={styles.copyright}>
        made with ❤️ by{" "}
        <a
          href={"https://www.paarthkukreja.com/"}
          className={styles.externalLink}
          target={"_blank"}
        >
          paarth
        </a>{" "}
        -{" "}
        <a
          href={"https://github.com/Paarth-K/tachyons-jc-f1"}
          className={styles.externalLink}
          target={"_blank"}
        >
          view source code
        </a>{" "}
        - TACHYONS © {year} all rights reserved
      </div>
    </div>
  );
}
