import React from "react";
import Image from "next/image";

export default function Jumbotron() {
    return (
      <section className="min-h-screen flex items-center justify-center jumbotron pt-10">
        <div className="container px-4 mx-auto">
          <div className="grid md:grid-cols-2 md:gap-8 items-center">
            {/* Left Column */}
            <div className="text-left md:px-8 p-8">
              <h1 className="mb-4 text-3xl font-bold tracking-tight leading-none md:text-4xl lg:text-5xl text-white">
                Happy {21}<sup>st</sup> Birthday, Mung!🎉
              </h1>
              <p className="mb-8 text-lg font-normal text-white lg:text-xl">
                📅 It's {15}<sup>th</sup> February again! and marks our {20}<sup>th</sup> of the {15}<sup>th</sup> day
              </p>
            </div>
            
            {/* Right Column */}
            <div className="block">
              <div className="relative w-full aspect-square overflow-hidden lg:pt-10 sm:pt-0">
                <Image
                  src="/banner.png"
                  alt="Frame"
                  width={500}
                  height={500}
                  className="w-80 mdw100 h-auto object-contain mx-auto"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }