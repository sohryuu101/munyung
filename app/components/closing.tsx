import React from "react";
import Image from "next/image";

export default function Closing() {
  return (
      <section className="min-h-screen flex items-center justify-center">
        <div className="container px-4 mx-auto">
          <div className="grid md:grid-cols-2 md:gap-8 items-center">
            {/* Left Column */}
            <div className="text-left md:px-8 p-8">
              <h1 className="mb-4 text-2xl font-bold tracking-tight leading-none md:text-3xl lg:text-4xl text-white close-title ">Closing Statement 💌</h1>
              <p className="mb-8 text-lg font-normal text-white lg:text-xl text-justify">
                It&apos;s been a long journey for us; so much has happened since the last birthday. We are now getting closer, so I can spend more time with you even though we are not yet living under the same roof. Once again, thank you to everyone who participated in this little project of mine. I know this web is not perfect (I am not a developer myself, anyway), but still, I made it with love. I&apos;m really excited to show this to you, and I hope you like it despite being a website like the previous year. Happy Birthday 🎂! ILYF munyut💕!
              </p>
            </div>
            
            {/* Right Column */}
            <div className="block">
              <div className="relative w-full aspect-square overflow-hidden lg:pt-20 sm:pt-0">
                <Image
                    src="/gallery.png"
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