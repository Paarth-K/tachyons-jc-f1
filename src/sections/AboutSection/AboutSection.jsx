import styles from "./AboutSection.module.scss";

export default function AboutSection() {
  return (
    <div className={styles.aboutSection}>
      <div className={styles.aboutSectionLayout}>
        <div className={styles.aboutText}>
          <h1>F1 in Schools</h1>
          <p>
            <strong>F1 in Schools</strong> ignites students'{" "}
            <strong>passion for crafting</strong> high-performance racing cars
            akin to Formula 1 vehicles.{" "}
            <strong>It's more than a competition</strong> — it's an immersive
            journey into{" "}
            <strong>
              physics, aerodynamics, design, branding, teamwork, and innovation
            </strong>
            . As <strong>Tachyons</strong>, we proudly{" "}
            <strong>represent F1 in Schools Italy</strong>, pushing boundaries
            and embracing the thrill of the race.
          </p>
          <br />
          <h1>About Us</h1>
          <p>
            We are a <strong>group of 6</strong> international{" "}
            <strong>school students</strong>, based in{" "}
            <strong>Genoa Italy</strong>, who together form the F1 in schools
            team: <strong>Tachyons</strong>. Our Team values{" "}
            <strong>hard work, dedication and perseverance</strong>, believing
            that it is the only way to move forward. We put all of this into
            projects and activities, and embrace experiences such as the F1 in
            schools STEM challenge. We have a <strong>strong connection</strong>{" "}
            with Internationality, as many of us have lived all over the world.
            Through this, we discovered the{" "}
            <strong>beauty of differences</strong> and that contributions can
            come in different shapes and sizes. We are extremely enthusiastic to
            take part in this challenge and we are putting as much effort as
            possible into the project. We can’t wait to race!
          </p>
        </div>
        <div className={styles.aboutImageCont}>
          <img
            src={
              "https://res.cloudinary.com/dce66e96q/image/upload/f_auto:image,q_auto,w_1000/v1/about-section/tof6"
            }
            className={styles.aboutImage}
            alt={"Tachyons Finals Car"}
          ></img>
        </div>
      </div>
    </div>
  );
}
