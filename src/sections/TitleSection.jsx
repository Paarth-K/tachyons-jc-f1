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
              letterSpacing: `${x > 140 ? x - 140 : 0}px`,
              textAlign: "center",
            }}
          >
            𝙏𝘼𝘾𝙃𝙔𝙊𝙉𝙎
          </span>
          <img
            style={{ left: `calc(${x * 0.5}% - 150px)` }}
            className={styles.car}
            src="car.svg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
