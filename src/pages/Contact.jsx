import React, { useContext } from "react";
import AnimatedText from "../components/AnimatedText";
import { EmailIcon, LocationIcon, TelePhonIcon } from "../components/Icons";
import ContactForm from "../components/ContactForm";
import { ThemeContext } from "../context";
import BorderBottom from "../components/BorderBottom";

const ContactDetail = ({ IconComponent, title }) => {
  const { isDark } = useContext(ThemeContext);

  return (
    <article className="flex flex-row space-y-4">
      <IconComponent
        className={` ${isDark ? "fill-light/75" : "fill-dark/75"}
`}
      />

      <p className="my-2 text-left text-md ml-2 md:ml-5 md:text-xl">{title}</p>
    </article>
  );
};

const Contact = () => {
  return (
    <div id="contact" className={` flex flex-col w-full  pt-20`}>
      <AnimatedText text="Let's Contact Proshanto" className="mb-2 text-4xl" />
      <BorderBottom para4="---------------------------" />

      <div className=" flex w-full justify-center items-center">
        <div className="flex flex-col justify-center items-center w-full md:flex-row space-y-6 max-w-4xl">
          <div className="flex flex-col space-y-8 justify-between">
            <div>
              <h1 className="text-4xl font-bold tracking-wide">let's talk</h1>
              <p className="pt-2 text-sm ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,
                laboriosam?
              </p>
            </div>

            <div className="flex flex-col space-y-4">
              <ContactDetail
                IconComponent={EmailIcon}
                title="Proshantosaha79@gmail.com"
              />
              <ContactDetail
                IconComponent={TelePhonIcon}
                title="01751-040462"
              />
              <ContactDetail
                IconComponent={LocationIcon}
                title="Rangpur,Dhaka,Bangladesh"
              />
            </div>

            <div>
              <h2>social</h2>
            </div>
          </div>

          <div className="">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
