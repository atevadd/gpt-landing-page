import "./possibility.css";
import possibilty from "../../assets/possibility.png";

const Possibility = () => {
  return (
    <section className="gpt3__possibility section__padding" id="possibility">
      <div className="gpt3__possibility-image">
        <img src={possibilty} alt="possibility" loading="lazy" />
      </div>
      <div className="gpt3__possibility-content">
        <p>Request Early Access to Get Started</p>
        <h3 className="gradient__text">
          The possibilities are beyond your imagination
        </h3>
        <p>
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <p>Request Early Access to Get Started</p>
      </div>
    </section>
  );
};

export default Possibility;
