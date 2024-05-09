"use client";
import React, { FormEvent, useState } from "react";
import { BackgroundBeams } from "@/componants/ui/background-beams";

function page() {

    const [email, SetEmail] = useState('');
    const [message, SetMessage]= useState('');

    function handleSubmit(event :FormEvent<HTMLFormElement>){
        event.preventDefault();
        console.log("Response submitted with :" , [email, message]);
    }

  return (
    <>
      <div className="min-h-screen pt-36 py-12 relative dark:bg-gray-900">
        <div className=" w-full rounded-md dark:bg-gray-900 relative flex flex-col items-center justify-center antialiased">
          <div className="max-w-2xl mx-auto p-4">
            <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-neutral-500  text-center font-sans font-bold">
              Contact Us
            </h1>
            <p></p>
            <p className="text-neutral-400 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem
              nam sint repellendus placeat, vero officia dolores, nostrum odio
              distinctio corporis neque fuga! Dolor odit quas, iure culpa iste
              quos consectetur.
            </p>
            <form action="#" onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Your Email"
                onChange={(e)=> SetEmail(e.target.value)}
                className="rounded-lg p-2 sm:p-3 border border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-700"
              />

              <textarea
                name="Message"
                placeholder="Enter Your Message"
                onChange={(e)=> SetMessage(e.target.value)}
                className="rounded-lg p-2 sm:p-3 border border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-700"
                rows={5}
              ></textarea>

              <button
                type="submit"
                className="px-6 py-2 rounded-lg bg-teal-500 text-white font-medium hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
              >
                Submit
              </button>
            </form>
          </div>
          <BackgroundBeams />
        </div>
      </div>
    </>
  );
}

export default page;
