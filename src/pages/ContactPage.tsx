import { FormEvent, useState } from "react";
import emailjs from "@emailjs/browser";
import "aos/dist/aos.css";

const ContactPage = () => {
  const [form, setForm] = useState({
    fromName: "",
    fromEmail: "",
    message: "",
  });
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
      
    </section>
  );
};

export default ContactPage;
