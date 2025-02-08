import React from "react";
import Image from "next/image";

export default function Wish() {
  return (
          <section className="min-h-dvh flex items-center justify-center pt-10">
            <div className="container px-10 mx-auto">
              <div className="grid md:grid-cols-2 gap-8 items-center">

                {/* Left Column */}
                <div className="text-center">
                <Image src="/happy-cat.gif" alt="Frame" width={300} height={300} className="w-48 md:w-64 lg:w-80 h-auto object-contain mx-auto" priority unoptimized/>
                </div>
                
                {/* Right Column */}
                <div className="sm:px-auto">
                <p className="mb-8 md:text-lg text-white lg:text-xl justify-center text-justify">Selamat ulang tahun yang ke-21 sayangg, semoga sehat selalu, bahagia terus, tambah semangat belajar hal apapun buat gapai cita-cita, sayang dan berbakti kepada orang tua, pokoknya wish you all the best. 
                  <br /> <br /> Selamat tanggal 15 yang ke-20 juga sayy, terima kasih sudah membersamai diri ini selama 611 hari, masih sabar dalam menghadapi hari-hari nyebelin sama aku, semoga kita bisa bareng-bareng terus yaa. Dikurangin mayah-mayahnya juga hihi 🥰. </p>
                </div>
                </div>
              </div>
          </section>
  );
}