import CompanyIcon from "../../assets/icons/company-light.svg";
import LocationIcon from "../../assets/icons/carbon-location-light.svg";
import CalendarIcon from "../../assets/icons/carbon-calendar-light.svg";

import "../../styles/components/experience.sass";

type WorkExperienceProps = {
  role: string;
  type: string;
  description: string;
  company: string;
  location: string;
  start: string;
  end: string;
};

const WorkExperience = (props: WorkExperienceProps) => {
  return (
    <div className="experience">
      <header>
        <span className="name">{props.role}</span>
        <span className="type">{props.type}</span>
      </header>
      <main>
        <section className="description">
          <p>
            {props.description}
          </p>
        </section>
        <section className="info">
          <div className="item company">
            <img src={CompanyIcon} alt="" />
            <span>{props.company}</span>
          </div>
          <div className="item location">
            <img src={LocationIcon} alt="" />
            <span>{props.location}</span>
          </div>
          <div className="item time">
            <img src={CalendarIcon} alt="" />
            <span>
              {props.start} - {props.end}
            </span>
          </div>
        </section>
      </main>
    </div>
  );
};

export default WorkExperience;
