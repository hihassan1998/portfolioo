import React from "react";

const Resume = () => {
  return (
    <div id="Resumé" className=" container m-auto   mt-16">
      {/* heading */}
      <div data-aos="fade-up" className="relative mb-5">
        <h3 className=" text-3xl font-black text-indigo-500 sm:text-2xl">
          Resumé
        </h3>
        <span className="h-[1.1px] right-0 absolute w-[92%] bg-white block"></span>
      </div>
      <div data-aos="fade-up" className="left flex-1 w-full">
        <p className=" text-gray-100 font-medium w-[100%]">
          Here are my experiences and qualifications.
        </p>
      </div>
      {/* card*/}
      <div className="card-wrapper w-[90%] sm:w-full mt-5 flex md:flex-col sm:gap-5 mx-auto ">
        <div className="left flex-1 flex items-center justify-center">
          <fieldset
            data-aos="zoom-in"
            className=" w-[80%] p-5 py-12 sm:py-8 sm:w-full sm:p-2"
          >
            <legend className=" w-auto ml-[50%] translate-x-[-50%] border-2 border-gray-200 rounded-3xl py-1 px-8 font-semibold text-xl text-indigo-400">
              Erferenhet
            </legend>
            <div className=" relative">
              {/* design */}
              <div className="design flex absolute left-[-150px] top-1/2 items-center rotate-[90deg] sm:left-[-160px] ">
                <div className="c1 w-[12px] h-[12px] rounded-full bg-indigo-400 border-2 border-indigo-400"></div>
                <div className="line w-[230px] bg-gray-200 h-[2px] sm:w-[250px]"></div>
                <div className="c2 w-[12px] h-[12px] rounded-full bg-indigo-400 border-2 border-indigo-400"></div>
              </div>
              {/* design */}
              <div className=" flex flex-col gap-1 sm:gap-1 border-2 border-indigo-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
                <h1 className="text-[1.4rem] text-indigo-500 font-semibold sm:text-xl">
                  Frontend Developer
                </h1>
                <span className=" text-[.9rem] font-semibold text-gray-300 sm:text-base">
                  QUH Doc
                </span>
                <span className=" text-[.9rem] font-semibold text-indigo-400 sm:text-base">
                  June 2023 - Present
                </span>
                <p className=" text-[.9rem] text-justify break-words text-gray-300">
                  Led the design and development of high-impact marketing websites and web applications using React, Next.js, and Tailwind CSS,
                  ensuring responsive, accessible, and visually compelling user experiences.
                  Spearheaded the development of a component library using Tailwind CSS, enhancing UI consistency and speeding up the
                  development process across projects.
                  Engaged in the full product lifecycle, from concept to deployment, focusing on creating intuitive and dynamic user
                  interfaces with a strong emphasis on user experience.
                  Utilized Flutter for building cross-platform mobile applications, extending the reach of web functionalities to mobile users.
                </p>
              </div>
            </div>
          </fieldset>
        </div>
        <div className="right flex-1 flex items-center justify-center">
          <fieldset
            data-aos="zoom-in"
            className=" w-[80%] p-5 py-12 sm:py-8 sm:w-full sm:p-2"
          >
            <legend className=" w-auto ml-[50%] translate-x-[-50%] border-2 border-gray-200 rounded-3xl py-1 px-8 font-semibold text-xl text-indigo-400">
              Utbildning
            </legend>
            <div className=" relative">
              {/* design */}
              <div className="design flex absolute left-[-150px] top-1/2 items-center rotate-[90deg] sm:left-[-160px] ">
                <div className="c1 w-[12px] h-[12px] rounded-full bg-indigo-400 border-2 border-indigo-400"></div>
                <div className="line w-[230px] bg-gray-300 h-[2px] sm:w-[250px]"></div>
                <div className="c2 w-[12px] h-[12px] rounded-full bg-indigo-400 border-2 border-indigo-400"></div>
              </div>
              {/* design */}
              <div className=" flex flex-col gap-1 border-2 border-indigo-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
                <h1 className="text-[1.4rem] text-indigo-500 font-semibold sm:text-xl">
                  Master of Applied Computing: Offshoring
                </h1>
                <span className=" text-[.9rem] font-semibold text-gray-300 sm:text-base">
                  Med5, University of Rabat
                </span>
                <span className=" text-[.9rem] font-semibold text-indigo-400 sm:text-base">
                  Year 2014 - Year 2016
                </span>
                <p className=" text-[.9rem] text-justify text-gray-300">
                  With a Master's degree under my belt, I've honed a versatile skill set that spans across multiple programming languages and frameworks.
                  Proficient in JavaScript (ES6+), TypeScript, Java, and Python, I possess a solid foundation in software development.
                  My expertise extends to various frameworks and libraries including React, Next.js, Vite, Node.js, Flutter, GSAP, and
                  Framer Motion, enabling me to craft dynamic and interactive web and mobile applications. Additionally,
                  I excel in CSS and design, showcasing advanced proficiency in Tailwind CSS, CSS3 techniques, HTML5, responsive web design,
                  and adaptive layouts, ensuring optimal user experiences across diverse platforms and devices.
                </p>
              </div>
            </div>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default Resume;
