export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Nanbon</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Full Stack</span>{" "}
            <br />
            Developer
          </h1>
          <p className="hero--section-description">
           I design and build modern, responsive websites and web applications
            that deliver seamless user experiences. With expertise in React, Node.js,
             PHP, and WordPress, I help businesses and startups turn their ideas into functional,<br />
              high-performance digital solutions 
          </p>
        </div>
        <button className="btn btn-primary">Scroll to veiw</button>
      </div>
      <div className="hero--section--img">
        <img src="./img/hero_img.png" alt="Hero Section" />
      </div>
    </section>
  );
}
