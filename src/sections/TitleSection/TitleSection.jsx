import { useEffect, useRef, useState } from "preact/hooks";
import styles from "./TitleSection.module.scss";
export default function TitleSection() {
  const [x, setX] = useState(0);
  const [headerStick, setHeaderStick] = useState(true);
  const aeroElem = useRef(null);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setX(window.scrollY);
    });
    setX(window.scrollY);
  }, []);

  useEffect(() => {
    if (x > 100 * 2) {
      setHeaderStick(false);
    } else {
      setHeaderStick(true);
    }
  }, [x]);

  return (
    <div>
      <div className={headerStick ? styles.headerStick : styles.headerFlow}>
        <div className={styles.aero}>
          <span
            style={{
              letterSpacing: `${x > 120 ? x - 120 : 0}px`,
            }}
            className={styles.teamName}
          >
            TACHYONS
          </span>
          <img
            style={{ left: `calc(${x * 0.5}% - 150px)` }}
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
