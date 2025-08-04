import "./About.css";
import BandMemberCard from "../BandMemberCard/BandMemberCard";
import AJ from "../../assets/AJ.jpg";
import RJ from "../../assets/RJ.jpg";
import John from "../../assets/John.jpg";

function About() {
  const bandMembers = [
    {
      name: "Aaron Jackson Sholar",
      role: "Guitar / Vocals",
      image: AJ,
      instagram: "https://www.instagram.com/jax_son35/",
    },
    {
      name: "Ryan Jackson Sholar",
      role: "Drums",
      image: RJ,
      instagram: "https://www.instagram.com/ryan36js/",
    },
    {
      name: "John Kenton Reddick",
      role: "Bass Guitar",
      image: John,
      instagram: "https://www.instagram.com/johnny_clouds10/",
    },
  ];

  return (
    <section className="about">
      <h2 className="about__title">About the band</h2>
      <p className="about__description">
        Three Piece Rock Trio from Western Kentucky. EST 2013
      </p>
      <div className="about__member-cards-container">
        {bandMembers.map((member) => (
          <BandMemberCard key={member.name} {...member} />
        ))}
      </div>
    </section>
  );
}

export default About;
