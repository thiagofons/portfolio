import { FormEvent, useState } from "react";
import GitHubIcon from "../img/github-icon.svg";
import LinkedInIcon from "../img/linkedin-icon.svg";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [form, setForm] = useState({
    fromName: "",
    fromEmail: "",
    message: "",
  });
  const [emailSended, setEmailSended]=  useState(false)

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_dqp6eul",
        "template_jv3i9vt",
        e.currentTarget,
        "kWg3JPeu5bfPhQAnk"
      )
      .then((response) => {
        setForm({
          fromName: "",
          fromEmail: "",
          message: "",
        });
        console.log("success");
        
      })
      .catch((error) => console.log("Erro: ", error));
  };

  return (
    <section id="contact" className="section contact">
      <h2>Contact</h2>
      <form className="contact__me" onSubmit={sendEmail}>
        <div className="insert insert__email">
          <label htmlFor="nameFrom">From</label>
          <input
            type="text"
            name="from_name"
            id="nameFrom"
            value={form.fromName}
            onChange={(e) => setForm({ ...form, fromName: e.target.value })}
          />
        </div>
        <div className="insert insert__email">
          <label htmlFor="emailFrom">Contact e-mail</label>
          <input
            type="text"
            name="from_email"
            id="emailFrom"
            value={form.fromEmail}
            onChange={(e) => setForm({ ...form, fromEmail: e.target.value })}
          />
        </div>
        <div className="insert insert__message">
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            cols={30}
            rows={10}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
          ></textarea>
        </div>
        <button type="submit" className="send__button">
          Send
        </button>
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
      <footer>
        <p>&copy; All rights reserved</p>
      </footer>
    </section>
  );
};

export default Contact;
