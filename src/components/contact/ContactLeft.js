import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { contactImg } from "../../assets/index";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4 text-center">
        <h3 className="text-3xl font-bold text-white">Ruweyda ali</h3>
        <p className="text-lg font-normal text-gray-400">
          MERN Stack Developer
        </p>
        <p className="text-base text-gray-400 tracking-wide">
        I am a full-stack developer with great love in building websites 
        and web applications. 
        </p>
        <p className="text-base ml-5 text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+252616487207</span>
        </p>
        <p className=" ml-5 text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">aruweyda45@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4 text-center">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
            <FaFacebookF />
          </span>
          <span className="bannerIcon">
            <FaTwitter />
          </span>
          <span className="bannerIcon">
            <FaLinkedinIn />
          </span>
        </div>
      </div>
    </div>
  );
}

export default ContactLeft