import React from "react";
import {motion} from "framer-motion"
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2010 - 2022</p>
          <h2 className="text-4xl font-bold">PERSONAL SKILLS</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Mern stack developer"
            subTitle="Mearn stack development at negaad
            institude of technology"
            
          //   result="USA"
          //   des="Google's hiring process is an important part of our culture. Googlers care deeply about their teams and the people who make them up."
          // />
           />
          <ResumeCard
            title="Web Developer "
            subTitle="Udemy onlile courses)"
            result="USA"
            des=""
          />
          <ResumeCard
            title="FULL Stack Developer "
            subTitle="Rice Accademy)"
            result=""
            des="muqdishu-somalia"
          />
        </div>
      </div>
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2001 - 2020</p>
          <h2 className="text-4xl font-bold">Profisional skils</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="full stack developer"
            subTitle=""
            result=""
            des="I am a full-stack developer with great love in building websites and web applications. "/>
          <ResumeCard
            title="Web designer "
            subTitle="kahiye tech"
            result="somalia"
            des=""
          />
          <ResumeCard
            title="Figma design"
            subTitle=""
            result="somalia"
            des="waxan ahay figma designer ku shaqes as frelencer"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
