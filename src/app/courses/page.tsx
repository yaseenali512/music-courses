"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";
import courseData from "@/data/music_courses.json";

export default function AllCourses() {
  return (
    <div className="min-h-screen bg-black py-12 pt-36">
      <h1 className="text-center text-lg md:text-7xl font-sans font-bold mb-8 text-white">
        All Courses {courseData.courses.length}
      </h1>

      <div className="flex flex-wrap justify-center"></div>
      <CardContainer className="inter-var">
        <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
          {courseData.courses.map((course, index) => (
            <CardItem
              key={index}
              className="flex flex-col gap-4 dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border"
            >
              <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
                  {course.title}
                </h1>
                <div className="flex items-center gap-2">
                  <Link href={`/courses/${course.slug}`}>
                    <a className="text-gray-800 dark:text-white">View</a>
                  </Link>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-1/2">
                  <Image
                    src={course.image}
                    alt={course.title}
                    width={400}
                    height={300}
                  />
                </div>
                <div className="w-1/2">
                  <p className="text-gray-800 dark:text-white">
                    {course.description}
                  </p>
                </div>
              </div>
            </CardItem>
          ))}
        </CardBody>
      </CardContainer>
    </div>
  );
}
