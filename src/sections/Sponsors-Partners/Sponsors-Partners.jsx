import styles from "./Sponsors-Partners.module.scss";

export default function SponsorsPartners() {
  const sponsors = [
    {
      src: "https://wsrv.nl/?url=https://res.cloudinary.com/dce66e96q/image/upload/q_auto,f_png,w_600/v1/sponsors%2Bpartners/expert-ai&il&af",
      alt: "Expert AI",
      link: "https://expertai-lux.com/",
    },
    {
      src: "https://wsrv.nl/?url=https://res.cloudinary.com/dce66e96q/image/upload/q_auto,f_png,w_600/v1/sponsors%2Bpartners/dubby&il&af",
      alt: "Dubby",
      link: "https://www.dubby.gg/",
    },
    {
      src: "https://wsrv.nl/?url=https://res.cloudinary.com/dce66e96q/image/upload/q_auto,f_png,w_600/v1/sponsors%2Bpartners/quoffee&il&af",
      alt: "Quoffee",
      link: "",
    },
    {
      src: "https://wsrv.nl/?url=https://res.cloudinary.com/dce66e96q/image/upload/q_auto,f_png,w_600/v1/sponsors%2Bpartners/historic-future&il&af",
      alt: "Historic Future",
      link: "",
    },
    {
      src: "https://wsrv.nl/?url=https://res.cloudinary.com/dce66e96q/image/upload/q_auto,f_png,w_600/v1/sponsors%2Bpartners/trattoria-rosmarino&il&af",
      alt: "Trattoria Rosmarino",
      link: "https://www.trattoriarosmarino.it/",
    },
    {
      src: "https://wsrv.nl/?url=https://res.cloudinary.com/dce66e96q/image/upload/q_auto,f_png,w_600/v1/sponsors%2Bpartners/s-and-d&il&af",
      alt: "S&D Consulting Europe",
      link: "https://www.sdconsulting-eu.com/",
    },
  ];
  const partners = [
    {
      src: "https://wsrv.nl/?url=https://res.cloudinary.com/dce66e96q/image/upload/q_auto,f_png,w_600/v1/sponsors%2Bpartners/uniofg&il&af",
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
