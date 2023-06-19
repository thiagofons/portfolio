import GitHubIcon from "../img/github-icon.svg"
import LinkedInIcon from "../img/linkedin-icon.svg"

const Contact = () => {
  return (
    <section id="contact" className="section contact">
      <h2>Contact</h2>
      <form className="contact__me">
        <div className="insert insert__email">
          <label htmlFor="">E-mail</label>
          <input type="text" />
        </div>
        <div className="insert insert__message">
          <label htmlFor="">Message</label>
          <textarea name="" id="" cols={30} rows={10}></textarea>
        </div>
        <button className="send__button">Send</button>
      </form>
      <main className="social__icons">
        <div className="social__icon">
          <a href="https://github.com/thiagofons">
            <img src={GitHubIcon} alt="github link" />
            <span>GitHub</span>
          </a>
        </div>
        <div className="social__icon">
          <a href="https://www.linkedin.com/in/thiagofons/">
            <img src={LinkedInIcon} alt="linkedin link" />
            <span>LinkedIn</span>
          </a>
        </div>
      </main>
      
    </section>
  );
}

export default Contact;