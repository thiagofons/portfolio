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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
              quidem nihil distinctio praesentium. Temporibus quo velit at
              repellendus voluptatem repudiandae facilis, nostrum provident est
              libero ea possimus vero aut molestiae!
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
                description={"sou gay e dou o cu"}
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
              description={""}
            />
          </section>
        </section>
      </main>
    </section>
  );
};

export default AboutMePage;
