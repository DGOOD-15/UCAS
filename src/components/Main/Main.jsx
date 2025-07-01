import background from "../../assets/about-bg.jpg";
import "./Main.css";

function Main() {
  return (
    <main className="main">
      <img className="main__bg-image" src={background} alt="The band image" />
    </main>
  );
}

export default Main;
