import Ufo from "../Ufo/Ufo";
import "./About.css";
function About() {
  return (
    <section className="about">
      <h2 className="about__title">About the band</h2>
      <p className="about__description">
        Under Clouds and Surveillance was formed in Gracey, Ky at the end of
        2012 by identical twins Aaron (A.J.) and Ryan (R.J.) Sholar after
        messing around on two electric guitars late one night in the Fall. After
        countless conversations with their Mom telling them they need to get
        their best friend in the band, they asked John Reddick to join even
        though he didn't play an instrument. Shortly after, John picked up the
        bass and quickly became attached to the instrument. Under Clouds and
        Surveillance then became a 3-piece. What started off as a strings only
        band with 3 acoustic guitars eventually would transform into a 3-piece
        alternative rock band with Ryan on drums, John on bass and Aaron on
        guitar and vocals. Although the dreamy, psychedelic, rainy day style
        melodies continued to be heard, the songs then developed a heavier,
        gritty side to the melancholy once the volumes were turned up. New album
        “Artificial Air” out now!
      </p>
      <Ufo></Ufo>
    </section>
  );
}

export default About;
