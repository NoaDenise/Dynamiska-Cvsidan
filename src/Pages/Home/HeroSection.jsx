import background from '../../img/hero_img.png'
export default function HeroSection() {
    return (
      <section id="heroSection" className="hero--section">
        <div className="hero--section--content--box">
          <div className="hero--section--content">
            <h1 className="hero--section--title">
              <span className="hero--section-title--color">Full Stack</span>{" "}
              <br />
              Developer
            </h1>
            <p className="hero--section-description">
              Name Name
            </p>
          </div>
        </div>
        <div className="hero--section--img">
          <img src={background} alt="Hero Section" />
        </div>
      </section>
    );
  }