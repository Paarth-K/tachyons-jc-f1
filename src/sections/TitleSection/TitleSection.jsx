import { useEffect, useState } from "preact/hooks";
import styles from "./TitleSection.module.scss";
export default function TitleSection() {
  const [x, setX] = useState(0);
  const [headerStick, setHeaderStick] = useState(true);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setX(window.scrollY);
    });
    setX(window.scrollY);
    setVisible(true);
  }, []);

  // useEffect(() => {
  if (x > 100 * 2) {
    setHeaderStick(false);
  } else {
    setHeaderStick(true);
  }
  // }, [x]);

  return (
    <div>
      <div className={headerStick ? styles.headerStick : styles.headerFlow}>
        <div className={styles.tachyons}>
          <span
            style={{
              letterSpacing: `${x > 100 ? x - 100 : 0}px`,
              marginLeft: `${x > 90 ? (x - 90) * 0.5 : 0}px`,
            }}
            className={`${styles.teamName} ${visible ? styles.visible : ""}`}
          >
            TACHYONS
          </span>
          <img
            style={{ left: `calc(${x * 0.6}% - 150px)` }}
            className={`${styles.car}`}
            src="/car.svg"
            alt="vroom"
          />
        </div>
      </div>
      {headerStick ? <div style={"height: 1100px"}></div> : ""}
    </div>
  );
}
