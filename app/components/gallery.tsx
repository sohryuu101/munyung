import React from "react";
import Image from "next/image";

export default function Gallery() {

  const images = Array.from({ length: 26 }, (_, i) => ({
    src: `/${i + 1}.jpg`,
    alt: `Image ${i + 1}`,
  }));

    return (
      <section className="container mx-auto px-4 py-8">
      <div className="columns-2 sm:columns-3 md:columns-4 gap-4 [column-fill:_balance] box-border mx-auto">
        {images.map((image, index) => (
          <div 
            key={index} 
            className="break-inside-avoid mb-4"
          >
            <div className="relative w-full">
              <Image
                src={image.src}
                alt={image.alt}
                width={500}
                height={0}
                sizes="(max-width: 768px) 50vw,
                       (max-width: 1024px) 33vw,
                       25vw"
                className="w-full h-auto rounded-lg hover:scale-105 transition-transform duration-300"
                priority={index < 4}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
    );   
};