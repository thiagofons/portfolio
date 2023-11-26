import "../styles/main.sass";

import Language from "../assets/icons/language.svg";
import Place from "../assets/icons/place-pin.svg";
import HomeOffice from "../assets/icons/home-office.svg";
import WorkExperience from "../components/data/WorkExperience";
import EducationExperience from "../components/data/EducationExpericence";

const AboutMePage = () => {
  return (
    <section id="aboutme" className="aboutme section">
      <header>
        <h2>About Me</h2>
      </header>
      <main>
        <section id="whoiam">
          <h3>Who I am</h3>
          <div className="text">
            <p>
              Raised in Rio de Janeiro, my <span className="important">first contact</span> with the world of
              programming was at the Electronic Engineering course at Federal
              University of Rio de Janeiro (UFRJ). After fall in love with it, I
              decided to change my undergraduate course to Computer Science, at
              Federal Fluminense University (UFF). <br /><br />
            </p>
            <p>
              Then, I started to learn all the basics of the computer world and
              discovered front-end development, which I fell in love instantly.
              A lot of this comes from my passion to develop beautiful,
              accessible and useful user interfaces. <br /><br />
            </p>
            <p>
              Now, I've been studying and working with several front-end
              development tools, such as React and Flutter, seeking to improve
              myself every day.
            </p>
          </div>
          <div className="info">
            <div className="bullet__info">
              <img src={Language} alt="" />
              <span>English/Portuguese</span>
            </div>
            <div className="bullet__info">
              <img src={Place} alt="" />
              <span>Niterói, Rio de Janeiro - Brazil</span>
            </div>
            <div className="bullet__info">
              <img src={HomeOffice} alt="" />
              <span>Available to work in home-office</span>
            </div>
          </div>
        </section>

        <section className="experiences" id="experiences">
          <section id="work-experience">
            <h3>Work Experience</h3>
            <div className="experiences">
              <WorkExperience
                role={"Developer"}
                type={"Internship"}
                company={"Opikode"}
                location={"Brazil"}
                start={"Jan 2023"}
                end={"May 2023"}
                description={"Development of a tool that unifies a DXP and a mail marketing platform. "}
              />
            </div>
          </section>
          <section id="education">
            <h3>Education</h3>
            <EducationExperience
              name={"Bachelor in Computer Science"}
              type={"Full time"}
              university={"Federal Fluminense University"}
              location={"Brazil"}
              start={"Sep 2020"}
              end={"Now"}
              description={"Learning the fundamental principles of Computer Science."}
            />
          </section>
        </section>
      </main>
    </section>
  );
};

export default AboutMePage;
