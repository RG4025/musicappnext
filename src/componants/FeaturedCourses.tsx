"use client";
import Link from "next/link";
import CourseData from "../data/musicCourses.json";
import { BackgroundGradient } from "./ui/background-gradient";

interface courses {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
}

function FeaturedCourses() {
  const featuredData = CourseData.courses.filter(
    (courses: courses) => courses.isFeatured
  );
  return (
    <>
      <div className="py-12 bg-gray-900">
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
            Featured Courses
          </h2>
          <p className="mt-3 text-3xl leading-8 font-extrabold  tracking-tight text-white sm:text-4xl">
            Learn with the best
          </p>
        </div>
        <div className="mt-10 mx-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
            {featuredData.map((courses: courses) => (
              <div className="flex justify-center" key={courses.id}>
                <BackgroundGradient>
                  <div className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
                    <div className="p-4 sm:p-6 flex flex-col gap-5 items-center text-center flex-grow">
                      <p className="text-center font-bold ">{courses.title}</p>
                      <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">
                        {courses.description}
                      </p>
                      <div className="text-center">
                        <Link
                          href={`/courses/${courses.slug}`}
                          className="p-2 bg-rose-400 text-white font-bold rounded-lg"
                        >
                          Learn More
                        </Link>
                      </div>
                    </div>
                  </div>
                </BackgroundGradient>
              </div>
            ))}
          </div>
        </div>
        <div className="text-center mt-10">
          <Link
            href={"/courses"}
            className="p-3  rounded-md bg-rose-500 shadow-lg shadow-white-500/50 text-white font-bold"
          >
            View All Courses
          </Link>
        </div>
      </div>
    </>
  );
}

export default FeaturedCourses;
