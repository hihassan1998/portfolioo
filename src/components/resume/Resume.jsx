import React from "react";

const Resume = () => {
  return (
    <div id="Resumé" className=" container m-auto   mt-16">
      {/* heading */}
      <div data-aos="fade-up" className="relative mb-5">
        <h3 className=" text-3xl font-black text-green-500 sm:text-2xl">
          Resumé
        </h3>
        <span className="h-[1.1px] right-0 absolute w-[92%] bg-white block"></span>
      </div>
      <div data-aos="fade-up" className="left flex-1 w-full">
        <p className=" text-gray-100 font-medium w-[100%]">
          Här är hans erfarenheter och certifikationer.
        </p>
      </div>
      {/* card*/}
      <div className="card-wrapper w-[90%] sm:w-full mt-5 flex md:flex-col sm:gap-5 mx-auto ">
        <div className="left flex-1 flex items-center justify-center">
          <fieldset
            data-aos="zoom-in"
            className=" w-[80%] p-5 py-12 sm:py-8 sm:w-full sm:p-2"
          >
            <legend className=" w-auto ml-[50%] translate-x-[-50%] border-2 border-gray-200 rounded-3xl py-1 px-8 font-semibold text-xl text-green-400">
              Erfarenhet
            </legend>
            <div className=" relative">
              {/* design */}
              <div className="design flex absolute left-[-150px] top-1/2 items-center rotate-[90deg] sm:left-[-160px] ">
                <div className="c1 w-[12px] h-[12px] rounded-full bg-green-900 border-2 border-green-400"></div>
                <div className="line w-[230px] bg-gray-200 h-[2px] sm:w-[250px]"></div>
                <div className="c2 w-[12px] h-[12px] rounded-full bg-green-900 border-2 border-green-400"></div>
              </div>
              {/* design */}
              <div className=" flex flex-col gap-1 sm:gap-1 border-2 border-green-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
                <h1 className="text-[1.4rem] text-green-300 font-semibold sm:text-xl">
                  Frontend Developer
                </h1>
                <span className=" text-[.9rem] font-semibold text-gray-300 sm:text-base">
                  QUH Doc
                </span>
                <span className=" text-[.9rem] font-semibold text-green-400 sm:text-base">
                  June 2023 - Present
                </span>
                <p className=" text-[.9rem] text-justify break-words text-gray-300">
                  Var en del av designen och utvecklingen av högeffektiva marknadsföringswebbplatser och webbapplikationer med hjälp av React, Next.js och Tailwind CSS,
                  säkerställa lyhörda, tillgängliga och visuellt övertygande användarupplevelser.
                  Deltog i utvecklingen av ett komponentbibliotek med hjälp av Tailwind CSS, vilket förbättrade UI-konsistensen och påskyndade
                  utvecklingsprocess över projekt.
                  Engagerad i hela produktens livscykel, från idé till implementering, med fokus på att skapa intuitiva och dynamiska användare
                  gränssnitt med stark betoning på användarupplevelse.
                  Använde React Native för att bygga plattformsoberoende mobilapplikationer, vilket utökade räckvidden för webbfunktioner till mobilanvändare.
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
            <legend className=" w-auto ml-[50%] translate-x-[-50%] border-2 border-gray-200 rounded-3xl py-1 px-8 font-semibold text-xl text-green-400">
              Utbildning
            </legend>
            <div className=" relative">
              {/* design */}
              <div className="design flex absolute left-[-150px] top-1/2 items-center rotate-[90deg] sm:left-[-160px] ">
                <div className="c1 w-[12px] h-[12px] rounded-full bg-green-900 border-2 border-green-400"></div>
                <div className="line w-[230px] bg-gray-300 h-[2px] sm:w-[250px]"></div>
                <div className="c2 w-[12px] h-[12px] rounded-full bg-green-900 border-2 border-green-400"></div>
              </div>
              {/* design */}
              <div className=" flex flex-col gap-1 border-2 border-green-500 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
                <h1 className="text-[1.4rem] text-green-400 font-semibold sm:text-xl">
                  Full Stack Software Developer Professional
                  Certifiering
                </h1>
                <span className=" text-[.9rem] font-semibold text-gray-300 sm:text-base">
                  IBM, International Business Machines
                </span>
                <span className=" text-[.9rem] font-semibold text-green-400 sm:text-base">
                  Year 2023 - Year 2024
                </span>
                <p className=" text-[.9rem] text-justify text-gray-300">
                  Med IBMs certifiering under mitt bälte har jag finslipat en mångsidig kompetensuppsättning som sträcker sig över flera programmeringsspråk och ramverk.
                  Jag har goda kunskaper i JavaScript (ES6+), TypeScript, Java och Python och har en solid grund inom mjukvaruutveckling.
                  Min expertis sträcker sig till olika ramverk och bibliotek inklusive React, Next.js, Vite, Node.js, Django, .NET och
                  Framer Motion, som gör att jag kan skapa dynamiska och interaktiva webb- och mobilapplikationer. Dessutom,
                  Jag utmärker mig i CSS och design, visar upp avancerade färdigheter i SASS, Tailwind CSS, CSS3-tekniker, HTML5, responsiv webbdesign,
                  och adaptiva layouter, vilket säkerställer optimala användarupplevelser över olika plattformar och enheter.
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
