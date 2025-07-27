import "./About.css";
function About() {
  return (
    <section className="about">
      <h2 className="about__title">About the band</h2>
      <p className="about__description">
        Three Piece Rock Trio from Western Kentucky. EST 2013
      </p>
      <p className="about__members">
        <span className="about__member">
          Aaron Jackson Sholar: Guitar, Vocals:
        </span>
        <span className="about__member">Ryan Jackson Sholar: Drums</span>
        <span className="about__member">John Kenton Reddick: Bass Guitar</span>
      </p>
    </section>
  );
}

export default About;
