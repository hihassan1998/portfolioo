import React, { useState, useRef } from "react";
import { BsArrowRight } from "react-icons/bs";
import { RiSendPlaneFill } from "react-icons/ri";
import emailjs from '@emailjs/browser';
import { TypeAnimation } from "react-type-animation";


const Contact = () => {
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    message: '',
  });
  const [error, setError] = useState(false)
  const [success, setSuccess] = useState(false)
  const formRef = useRef()


  const sendEmail = async (e) => {
    e.preventDefault();
    emailjs
      .sendForm('service_jhot97p', 'template_1phekqg', formRef.current, {
        publicKey: 'mVZoDOGQZN238hGm8',
      })
      .then(
        (result) => {
          setSuccess(true)
        },
        (error) => {
          setError(true)
        },
      );


  };

  return (
    <div id="kontakt" className="container m-auto mt-16">
      {/* heading */}
      <div
        data-aos="fade-up"
        className="relative mb-5">
        <h3 className=" text-3xl font-black text-green-500 sm:text-2xl">
          Kontakta Mig
        </h3>
        <span className="h-[1.1px] right-0 absolute w-[92%] bg-gray-300 block"></span>
      </div>

      {/* card*/}
      <div className="card-wrapper w-[90%] sm:w-[100%] mx-auto mt-5 flex items-center justify-center sm:flex-col">
        <div className="left w-[70%] flex-1 flex items-center justify-center sm:flex-col sm:w-full">
          <div className="flex-3 w-1/2 gap-3 flex items-end justify-end  flex-col sm:w-3/4">
            <div
              data-aos="zoom-in"
            >
              <h1 className="text-5xl text-white font-bold sm:text-3xl">Låt oss skapa tillsammans</h1>
              <h3 className="text-xl text-green-400  sm:text-lg">
              Nyfiken på att samarbeta? Skicka mig ett meddelande så börjar vi konversationen!
              </h3>
            </div>
          </div>
          <div className=" flex p-5 items-center justify-center ">
            <button

              data-aos="zoom-in"

              className=" text-green-100 font-extrabold text-3xl p-2 rounded-lg shadow-[0 0 10px 1px rgba(255, 255, 255, 0.1)] "
            >
              <BsArrowRight className="transform md:rotate-0 group hover:rotate-180 transition-transform duration-300 ease-in-out cursor-pointer" />
            </button>
          </div>
        </div>
        <div className="right flex-1">
          <form
            ref={formRef}
            data-aos="zoom-in"
            className="flex justify-center items-center flex-col gap-5 w-[70%] md:w-[100%] sm:w-[95%] mx-auto"
            onSubmit={sendEmail}
          >
            <input
              className="px-3 shadow-[0_0_16px_0px_rgba(0,0,0,0.1)] p-2 rounded-lg w-full"
              type="email"
              placeholder="t.ex example@email.com"
              name="epost"
            />
            <input
              className="px-3 shadow-[0_0_16px_0px_rgba(0,0,0,0.1)] p-2 rounded-lg w-full"
              type="text"
              placeholder="t.ex: Namn"
              name="namn"
            />
            <textarea
              className="px-3 shadow-[0_0_16px_0px_rgba(0,0,0,0.1)] p-2 rounded-lg w-full"
              rows="4"
              cols="50"
              placeholder="Skriv meddelandet här..."
              name="message"
              id=""
            />
            <button
              className="bg-green-700 hover:bg-green-900 w-full text-white font-semibold  p-2 rounded-lg flex items-center justify-center space-x-1"
              type="submit"
            >
              <span>Skicka</span>
              <RiSendPlaneFill />
            </button>
            {error && <p>Error. Meddelandet ej skickat. </p>}
            {success && <p> Meddelande skickat. </p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
