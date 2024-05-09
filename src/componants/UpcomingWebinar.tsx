"use client";
import React from "react";
import Link from "next/link";
import { HoverEffect } from "./ui/card-hover-effect";

function UpcomingWebinar() {
  const featuredWebinars = [
    {
      title: "Understanding Music Theory",
      description:
        "Dive deep into the fundamentals of music theory and enhance your musical skills.",
      slug: "understanding-music-theory",
      isFeatured: true,
    },
    {
      title: "The Art of Songwriting",
      description:
        "Learn the craft of songwriting from experienced musicians and songwriters.",
      slug: "the-art-of-songwriting",
      isFeatured: true,
    },
    {
      title: "Mastering Your Instrument",
      description:
        "Advanced techniques to master your musical instrument of choice.",
      slug: "mastering-your-instrument",
      isFeatured: true,
    },
    {
      title: "Music Production Essentials",
      description:
        "Get started with music production with this comprehensive overview.",
      slug: "music-production-essentials",
      isFeatured: true,
    },
    
    {
      title: "Live Performance Techniques",
      description:
        "Enhance your live performance skills with expert tips and strategies.",
      slug: "live-performance-techniques",
      isFeatured: true,
    },
    {
      title: "Digital Music Marketing",
      description:
        "Learn how to promote your music effectively in the digital age.",
      slug: "digital-music-marketing",
      isFeatured: true,
    },
  ];

  return (
    <>
      <div className="p-12 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mt-10 mx-auto  text-center">
            <p className="uppercase py-2 text-center text-base text-teal-400 tracking-wide font-semibold">
              {" "}
              Featured webinars
            </p>
            <h2 className="text-center text-white font-bold text-2xl sm:text-4xl">
              Enhance Your Musicle Journey
            </h2>
          </div>
          <div className="text-center">
            <HoverEffect
              items={featuredWebinars.map((res) => ({
                title: res.title,
                description: res.description,
                link: "/",
              }))}
            />
          </div>
          <div className="mt-5 text-center">
            <Link
              href={"/"}
              className="p-3 bg-rose-500 text-center text-white font-bold rounded-md"
            >
              View More
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default UpcomingWebinar;
