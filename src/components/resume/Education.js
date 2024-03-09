import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2012 - 2024</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education </h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
        <ResumeCard
            title="Secondary School Education"
            subTitle="Secondary Education: Ileys Primary (Mogadishu, Somalia, 2012-2020)"
            result=""
            des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
          />
          <ResumeCard
            title="bachelor of Computer Science"
            subTitle="somali international university (2021 - 2024)"
            result=""
            des="The training provided by universities in order to prepare people to work in various sectors of the communications ."
          />
          <ResumeCard
            title="Full stack Certificate  "
            subTitle="Negaad institude of
            Technology (2022 - 2023)"
            result=""
            des="Training of Mearn stack development "
          />
            <ResumeCard
            title="Full stack Certified  "
            subTitle="Rice Accadeny of
            inovation (2023 - 2024)"
            result=""
            des="Diploma of fuLL stack development "
          />
            <ResumeCard
            title="Full stack Certified  "
            subTitle="Udemy online 
            courses (2023)"
            result=""
            des="Diploma of fuLL stack development "
          />
            <ResumeCard
            title="graphic design  "
            subTitle="kahiye tech (2023)"
            result=""
            des="Diploma of graphic deign "
          />
        
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2022 - 2024</p>
          <h2 className="text-3xl md:text-4xl font-bold">Profisional Skills</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="full stack developer"
            subTitle="Negaad institude of
            Technology- (2023)"
            result="Muqdishu-somalia"
            des="Training of Mearn stack development at negaad
            institude of technology
            "
          />
          <ResumeCard
            title="cumputer enginer "
            subTitle="Apple Developer Team - (2012 - 2016)"
            result="somali international university "
            des="Training on Computer Hardware at Somali
            International University-SIU, with a growing number of highly qualified "
          />
          {/* <ResumeCard
            title="full stack Developer"
            subTitle="Somali international university - (2022 - 203)"
            result="great"
            des="Training of Mearn stack development at negaad
            institude of technology
            "
          /> */}
        </div>
      </div>
    </motion.div>
  );
}

export default Education