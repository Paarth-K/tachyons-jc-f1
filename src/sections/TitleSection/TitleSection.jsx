import { useEffect, useRef, useState } from "preact/hooks";
import styles from "./TitleSection.module.scss";
export default function TitleSection() {
  const [x, setX] = useState(0);
  const [headerStick, setHeaderStick] = useState(true);
  const [visible, setVisible] = useState(false);
  const aeroElem = useRef(null);
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
        <div className={styles.aero}>
          <span
            style={{
              letterSpacing: `${x > 110 ? x - 110 : 0}px`,
              marginLeft: `${x > 90 ? (x - 90) * 0.5 : 0}px`,
            }}
            className={`${styles.teamName} ${visible ? styles.visible : ""}`}
          >
            TACHYONS
          </span>
          <img
            style={{ left: `calc(${x * 0.6}% - 150px)` }}
            className={styles.car}
            src="car.svg"
            alt="vroom vroom"
          />
        </div>
      </div>
      {headerStick ? <div style={"height: 1100px"}></div> : ""}
    </div>
  );
}
