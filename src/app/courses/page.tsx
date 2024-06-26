"use client";
import React from "react";
import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "@/componants/ui/3d-card";
import courseData from "@/data/musicCourses.json";
import Link from "next/link";
function Courses() {
  return (
    <>
      <div className="min-h-screen pt-36 py-12 dark:bg-gray-800">
        <h2 className="text-center text-lg font-bold py-5 sm:text-5xl">
          All Courses ({courseData.courses.length})
        </h2>

        <div className="py-4 flex flex-wrap justify-center">
          {courseData.courses.map((course) => (
            <CardContainer className="inter-var m-5">
              <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-neutral-600 dark:text-white"
                >
                  {course.title}
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                >
                  {course.description}
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-4">
                  <Image
                    src={course.image}
                    width="1000"
                    height="1000"
                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt={course.title}
                  />
                </CardItem>
                <div className="flex justify-between items-center mt-20">
                  <CardItem
                    translateZ={20}
                    as={Link}
                    href="#"
                    target="__blank"
                    className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                  >
                    Try now →
                  </CardItem>
                  <CardItem
                    translateZ={20}
                    as="button"
                    className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                  >
                    Sign up
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
          ))}
        </div>
      </div>
    </>
  );
}

export default Courses;
