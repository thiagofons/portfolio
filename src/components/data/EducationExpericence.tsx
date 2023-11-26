import CollegeIcon from "../../assets/icons/college-light.svg";
import LocationIcon from "../../assets/icons/carbon-location-light.svg";
import CalendarIcon from "../../assets/icons/carbon-calendar-light.svg";
import Chevron from "../../assets/icons/chevron-light.svg";

import "../../styles/components/experience.sass";
import { useState } from "react";

type EducationExperienceProps = {
  name: string;
  type: string;
  description: string;
  university: string;
  location: string;
  start: string;
  end: string;
};

const EducationExperience = (props: EducationExperienceProps) => {
  const [open, setOpen] = useState(true);

  return (
    <div className="experience">
      <header>
        <span className="name">{props.name}</span>
        <span className="type">{props.type}</span>
      </header>
      <main>
        <section className="description">
          <div className="opener" onClick={(e) => setOpen(!open)}>
            <img
              src={Chevron}
              alt=""
              className={`chevron ${open ? "clicked" : ""}`}
            />
            <span>Description</span>
          </div>

          <p className={`description__text ${open ? "open" : ""}`}>
            {props.description}
          </p>
        </section>
        <section className="info">
          <div className="item company">
            <img src={CollegeIcon} alt="" />
            <span>{props.university}</span>
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

export default EducationExperience;
