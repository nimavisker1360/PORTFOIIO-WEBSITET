import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
} from "react-icons/si";

//component
import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";

//counters
import CountUp from "react-countup";

//  data
const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Web Development",
        icons: [
          <FaHtml5 key="html5" />,
          <FaCss3 key="css3" />,
          <FaJs key="js" />,
          <FaReact key="react" />,
          <SiNextdotjs key="nextjs" />,
          <SiFramer key="framer" />,
          <FaWordpress key="wordpress" />,
        ],
      },
      {
        title: "UI/UX Design",
        icons: [
          <FaFigma key="figma" />,
          <SiAdobexd key="adobexd" />,
          <SiAdobephotoshop key="adobephotoshop" />,
        ],
      },
    ],
  },

  {
    title: "experience",
    info: [
      {
        title: "UX/UI Designer , FullStack Developer - Mabna Company",
        stage: "2020 - 2023",
      },
      {
        title: "Web Developer - Zebra-studio Agency",
        stage: "2017 - 2020",
      },
      {
        title: "Intern - Saba Studio Corporation",
        stage: "2016 - 2017",
      },
    ],
  },
  {
    title: "credentials",
    info: [
      {
        title: "Web Development -  Hoze University",
        stage: "2016",
      },
      {
        title: "Computer Science Diploma - IranAzad Technical Institute",
        stage: "2012",
      },
      {
        title: "Certified Graphic Designer - ABC Institute, Tehran, Iran",
        stage: "2010",
      },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);
  console.log(index);

  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />
      {/* avatar img */}
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[370px]"
      >
        <Avatar />
      </motion.div>
      <div
        className="container mx-auto h-full flex flex-col items-center xl:flex-row
      gap-x-6"
      >
        {/* text */}
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
            Captivating <span className="text-accent"> stories </span> birth
            magnificent designs.
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12
          px-2 xl:px-0"
          >
            6 years ago , I began freelancing as a developer.Since then, I ve
            done remote work for agencies, consulted for startups, and
            collaborated on digital products for business and consumer use.
          </motion.p>
          {/* counters */}
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0
          mb-8"
          >
            <div className="flex flex-1 xl:gap-x-6">
              {/* experience */}
              <div
                className="relative flex-1 after:w-[1px]
              after:h-full after:bg-white/10 after:absolute after:top-0
              after:right-0"
              >
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={10} duration={5} />+
                </div>
                <div
                  className="text-xs uppercase tracking-[1px] leading-[1.4]
                max-w-[100px]"
                >
                  Years of experience
                </div>
              </div>
              {/* clients */}
              <div
                className="relative flex-1 after:w-[1px]
              after:h-full after:bg-white/10 after:absolute after:top-0
              after:right-0"
              >
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={50} duration={5} />+
                </div>
                <div
                  className="text-xs uppercase tracking-[1px] leading-[1.4]
                max-w-[100px]"
                >
                  Satisfied clients
                </div>
              </div>
              {/* Projects */}
              <div className="relative flex-1 ">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={20} duration={5} />+
                </div>
                <div
                  className="text-xs uppercase tracking-[1px] leading-[1.4]
                max-w-[100px]"
                >
                  Finished Project
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        {/* info */}
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-[480px]"
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4 ">
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className={`${
                    index === itemIndex &&
                    "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                  } cursor-pointer capitalize xl:text-lg relative after:w-8 
                  after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0 z-[8]`}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
          <div
            className=" py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center
          xl:items-start"
          >
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className="flex-1 flex flex-col md:flex-row md:text-[16px] 
                max-w-max gap-x-1 items-center text-white/60  "
                >
                  {/* title */}
                  <div className="font-light  mb-2 md:mb-0">{item.title}</div>
                  <div className="hidden md:flex mb-2">,</div>
                  <div className="text-accent">{item.stage}</div>
                  <div className="flex gap-x-4">
                    {/* icons */}
                    {item.icons ? (
                      <div className="flex gap-x-4">
                        {item.icons.map((icon, itemIndex) => {
                          return (
                            <div
                              key={itemIndex}
                              className="text-2xl text-white"
                            >
                              {icon}
                            </div>
                          );
                        })}
                      </div>
                    ) : null}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
