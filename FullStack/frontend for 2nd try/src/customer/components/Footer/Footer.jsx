// Footer.js file
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6";
import React from "react";
const socialMediaIcons = [
  { icon: <FaFacebook size={28} />, link: "#" },
  { icon: <FaInstagram size={28} />, link: "#" },
  { icon: <FaTwitter size={28} />, link: "#" },
];

const footerSections = [
  {
    title: "CodeCraft",
    content:
      "We Are Generating Premium Resources And Tools To Assist Developers During The Advancement Of Their Projects",
    footerText: "@sm8uti 2022 All rights Reserved",
    links: [
      { label: "Resources", url: "#" },
      { label: "Contact us", url: "#" },
      { label: "Blog", url: "#" },
    ],
  },
  {
    title: "Help",
    links: [
      { label: "Support", url: "#" },
      { label: "Sign up", url: "#" },
      { label: "Sign in", url: "#" },
    ],
  },
  {
    title: "CodeCraft",
    links: [
      { label: "Resources", url: "#" },
      { label: "Contact us", url: "#" },
      { label: "Blog", url: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Confidentiality and Security", url: "#" },
      { label: "Terms and Conditions", url: "#" },
    ],
  },
];

const Footer = () => {
  return (
    <div className=' max-w-7xl my-16 mx-auto '>
      <section className="fotter p-3 md:p-8 mt-6">
        <div className="flex flex-col md:flex-col md:items-center md:justify-between w-full my-3 ">
          <div className="news font-nun">
            <h3 className="text-xl md:text-3xl font-medium">
              Subscribe to our Newsletter
            </h3>
            <p className="text-sm md:text-md my-4">
              Get notified first when we release new updates and offers
            </p>
            <div className="my-4 w-full flex flex-row">
              <input
                className="rounded-md border py-2 px-4 w-full border-gray-500"
                type="email"
                placeholder="Enter email"
                name=""
                id=""
              />
              <button
                className="bg-[#ccc9ff] shadow-md rounded-md text-[#3329e0] py-2 px-6 mx-2 cursor-pointer hover:bg-blue-700 hover:text-white ease-in transition-all duration-300"
                type="submit"
              >
                Join
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center mx-auto md:mx-0 justify-between w-full p-4">
          <div className="dev font-nun w-full md:w-1/2 mt-12 md:mt-0">
            <div className="flex flex-row items-center justify-start">
              <div className="logo w-20 mr-5">
                <img src="https://i.imgur.com/520zDfd.png" alt="" />
              </div>
              <h1 className="font-black text-2xl">CodeCraft</h1>
            </div>
            <p className="font-medium text-md my-4 text-left">
              {footerSections[0].content}
            </p>
            <p className="text-sm font-extralight text-left">
              {footerSections[0].footerText}
            </p>
          </div>
          <div className="help-legal my-2 md:my-8 flex flex-row justify-between w-full xl:w-1/2 mx-auto p-2 md:p-10 md:pr-2 mt-12">
            {footerSections.slice(1).map((section, index) => (
              <div key={index} className="mr-4 md:mr-8">
                <h2 className="font-bold my-3">{section.title}</h2>
                <ul>
                  {section.links.map((link, linkIndex) => (
                    <li
                      key={linkIndex}
                      className="my-4 hover:text-blue-700 transition-all ease-in duration-300"
                    >
                      <a href={link.url}>{link.label}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="social font-nun w-full text-center mb-12">
          <h1 className="font-bold my-3 text-xl">Social media</h1>
          <ul className="flex flex-row items-center justify-center mt-6">
            {socialMediaIcons.map((socialMedia, index) => (
              <li key={index} className="mx-8">
                <a
                  href={socialMedia.link}
                  className="bi bi-instagram text-gray-600 hover:text-[#3329e0] transition-all ease-in duration-300"
                >
                  {socialMedia.icon}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Footer;