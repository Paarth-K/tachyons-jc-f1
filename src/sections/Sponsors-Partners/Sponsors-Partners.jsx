import styles from "./Sponsors-Partners.module.scss";

export default function SponsorsPartners() {
  const sponsors = [
    {
      src: "https://res.cloudinary.com/dce66e96q/image/upload/f_auto,q_auto,w_600/v1/sponsors%2Bpartners/expert-ai",
      alt: "Expert AI",
      link: "https://expertai-lux.com/",
    },
    {
      src: "https://res.cloudinary.com/dce66e96q/image/upload/f_auto,q_auto,w_600/v1/sponsors%2Bpartners/dubby",
      alt: "Dubby",
      link: "https://www.dubby.gg/",
    },
    {
      src: "https://res.cloudinary.com/dce66e96q/image/upload/f_auto,q_auto,w_600/v1/sponsors%2Bpartners/quoffee",
      alt: "Quoffee",
      link: "",
    },
    {
      src: "https://res.cloudinary.com/dce66e96q/image/upload/f_auto,q_auto,w_600/v1/sponsors%2Bpartners/historic-future",
      alt: "Historic Future",
      link: "",
    },
    {
      src: "https://res.cloudinary.com/dce66e96q/image/upload/f_auto,q_auto,w_600/v1/sponsors%2Bpartners/trattoria-rosmarino",
      alt: "Trattoria Rosmarino",
      link: "https://www.trattoriarosmarino.it/",
    },
  ];
  const partners = [
    {
      src: "https://res.cloudinary.com/dce66e96q/image/upload/f_auto,q_auto,w_600/v1/sponsors%2Bpartners/uniofg",
      alt: "University of Genoa",
      link: "https://unige.it/en",
    },
  ];
  return (
    <div className={styles.sponsorsAndPartners}>
      <div className={styles.sponsors} id="sponsors">
        <h1>Our Sponsors</h1>
        <div className={styles.sponsorLogos}>
          {sponsors.map((sponsor, index) => {
            return (
              <a
                href={sponsor.link ? sponsor.link : "#sponsors"}
                target={sponsor.link ? "_blank" : ""}
                aria-label={sponsor.alt}
              >
                <img
                  className={styles.spimage}
                  src={sponsor.src}
                  alt={sponsor.alt}
                  key={index}
                ></img>
              </a>
            );
          })}
        </div>
      </div>
      <br />
      <br />
      <div className={styles.partners} id="partners">
        <h1>Our Partners</h1>
        <div className={styles.partnerLogos}>
          {partners.map((partner, index) => {
            return (
              <a
                href={partner.link ? partner.link : "#partners"}
                target={partner.link ? "_blank" : ""}
              >
                <img
                  className={styles.spimage}
                  src={partner.src}
                  alt={partner.alt}
                  key={index}
                ></img>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
