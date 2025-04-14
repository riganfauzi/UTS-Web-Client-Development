// Deps
import classNames from "classnames";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// Assets
import Avatar from "../../assets/avatar.png";

// Components
import Input from "../../components/Input";
import Navbar from "../../components/Navbar";
import Button from "../../components/Button";
import Footer from "../../components/Footer";

// Libs
import fadeInAnimation from "../../libs/fadeInAnimation";

const contactDetails = [
  {
    name: import.meta.env.VITE_APP_OWNER_EMAIL_ADDRESS,
    link: `mailto:${import.meta.env.VITE_APP_OWNER_EMAIL_ADDRESS}`,
  },
  {
    name: import.meta.env.VITE_APP_OWNER_PHONE_NUMBER,
    link: `tel:${import.meta.env.VITE_APP_OWNER_PHONE_NUMBER}`,
  },
];

const socialLinks = [
  { name: "Linkedin", link: import.meta.env.VITE_APP_OWNER_LINKEDIN_URL },
  { name: "Instagram", link: import.meta.env.VITE_APP_OWNER_INSTAGRAM_URL },
  { name: "Twitter", link: import.meta.env.VITE_APP_OWNER_TWITTER_URL },
  { name: "Webflow", link: import.meta.env.VITE_APP_OWNER_WEBFLOW_URL },
  { name: "Figma", link: import.meta.env.VITE_APP_OWNER_FIGMA_URL },
];

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    window.open(
      `mailto:${import.meta.env.VITE_APP_OWNER_EMAIL_ADDRESS}?subject=${formData.subject}&body=Hello, my name is ${formData.name}. ${formData.subject}`,
      "_blank"
    );
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className={classNames("flex", "flex-col", "gap-y-10")}
    >
      <Navbar />
      <div className={classNames("flex", "pt-32", "px-10", "flex-col", "gap-y-20", "md:px-20", "md:flex-row")}> 
        <motion.div
          variants={fadeInAnimation}
          className={classNames("flex", "flex-1", "flex-col", "items-center", "md:items-start")}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1, transition: { duration: 0.6 } }}
            className={classNames("w-48", "mb-14", "md:w-64", "xl:w-72", "rounded-full", "aspect-square", "bg-slate-200", "overflow-hidden")}
          >
            <img src={Avatar} className={classNames("w-full", "h-full", "object-top", "object-cover")} />
          </motion.div>

          <div className={classNames("flex", "flex-col", "gap-y-8", "w-full")}>
            <Section title="Contact Details">
              {contactDetails.map((contact, i) => (
                <div className={classNames("flex")} key={`contact-${i}`}>
                  <motion.p
                    whileHover={{ scale: 1.05 }}
                    className={classNames("text-xl", "lg:text-2xl", "cursor-pointer", "hover:underline", "transition-transform")}
                    onClick={() => contact.link && window.open(contact.link, "_blank")}
                  >
                    {contact.name}
                  </motion.p>
                </div>
              ))}
            </Section>

            <Section title="Social">
              {socialLinks.map((social, i) => (
                <div className={classNames("flex")} key={`social-${i}`}>
                  <motion.p
                    whileHover={{ scale: 1.05 }}
                    className={classNames("text-xl", "lg:text-2xl", "cursor-pointer", "hover:underline", "transition-transform")}
                    onClick={() => social.link && window.open(social.link, "_blank")}
                  >
                    {social.name}
                  </motion.p>
                </div>
              ))}
            </Section>
          </div>
        </motion.div>

        <motion.div variants={fadeInAnimation} className={classNames("flex-1", "flex", "flex-col", "gap-y-9")}>
          <h1 className={classNames("text-2xl", "md:text-3xl", "lg:text-4xl", "xl:text-5xl", "font-medium")}>Let’s build something cool together</h1>

          <motion.form variants={fadeInAnimation} className={classNames("flex", "flex-col", "gap-y-8")} onSubmit={onSubmit}>
            <Input
              id="name"
              label="Name"
              placeholder="Ramadhanu"
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
            <Input
              id="email"
              label="Email"
              placeholder={`${import.meta.env.VITE_APP_OWNER_EMAIL_ADDRESS}`}
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
            <Input
              id="subject"
              label="Subject"
              placeholder="For web design work Enquire"
              type="text"
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
            />
            <Input
              id="message"
              label="Message"
              placeholder="Type your Message"
              isTextarea
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            />

            <motion.div whileHover={{ scale: 1.05 }}>
              <Button variant="dark" className={classNames("!px-16", "font-medium")}>Submit</Button>
            </motion.div>
          </motion.form>
        </motion.div>
      </div>
      <Footer simple />
    </motion.div>
  );
};

const Section = ({ title, children }) => (
  <motion.div variants={fadeInAnimation} className={classNames("flex", "flex-col", "gap-y-2")}>
    <h3 className={classNames("text-lg", "text-gray-900")}>{title}</h3>
    <div className={classNames("flex", "flex-col", "gap-y-1")}>{children}</div>
  </motion.div>
);

export default ContactPage;
