import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from './Media';
import mycv from '../../assets/ruweidaCV.pdf'
const LeftBanner = () => {
    const [text] = useTypewriter({
      words: ["Professional full stack developer.", "Web Developer.", "UI/Ux Designer."],
      loop: true,
      typeSpeed: 20,
      deleteSpeed: 10,
      delaySpeed: 2000,
    });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        {/* <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4> */}
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">Ruweyda Ali</span>
        </h1>
        <div className="home-buttons gap-10">
              <a
                className="bg-blue-500 p-2 rounded-lg btn-hire"
                href="https://web.whatsapp.com/send?phone=616487207"
                rel="noreferrer"
                target="_blank"
              >
                Hire Me
              </a>{" "}{" "}
              <a className="bg-green-500 rounded-lg p-2 sm:ml-4" href={mycv} download="ruweidaCV.pdf">
                Download Cv
              </a>
            </div>
        <h2 className="text-4xl font-bold text-white">
          A <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
       
        <p className="text-base font-bodyFont leading-6 tracking-wide">
        I am a full-stack developer with great love in building websites 
        and web applications. I specialize in JavaScript
         and front-end technologies such as React JS, 
         I also have a strong foundation in Node JS, mongodb,
          Tailwindcss,material UI, I love to push the limit of tech 
        to solve real problems. I am interested in mearn stack development
         , Deep learning, and open source
        </p>
      </div>
     {/* Media */}
     <Media />
    </div>
  );
}

export default LeftBanner