import './AboutMe.css';
import myPhoto from '../../assets/images/headshot.jpg';

function AboutMe() {
  return (
    <section className="about-me-section">
      <img src={myPhoto} alt="Jack Cairns" className="about-me-photo" />
      <div className="about-me-text">
        <h1>Hello, I'm Jack Cairns</h1>
        <p>
          I'm a software engineer based in Boston, MA with 6 years of experience developing and deploying software systems. Containerization, CI/CD automation, and infrastructure as code (IaC) are all areas I have previously excelled in. My interests include all aspects of computer system development from CPU design to cloud computing platforms as a service. I built this application using React to showcase my work and share my experiences in a more creative manner.
        </p>
      </div>
    </section>
  );
}

export default AboutMe;