"use client"

import Image from "next/image";

export default function JuniorGolf() {
  return (
    <div className="flex flex-col -mb-20 h-screen sm:h-full bg-black bg-opacity-90">
      <section className="relative h-[400px] overflow-hidden">
        <Image
          src="https://storage.googleapis.com/thebunker-assets/thebunker/pexels-thomasleeward-2828723.jpg"
          alt="Junior Golf Lessons"
          fill
          className="object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
          <h1 className="text-4xl sm:text-7xl">JUNIOR GOLF</h1>
          <p className="text-lg mt-2">Helping young golfers improve their game</p>
        </div>
      </section>

			<section className="bg-white p-10 text-center">
        <h1 className="text-3xl text-green-600">Junior Summer Camp</h1>
        <p className="my-6"><a className="button" href="https://www.ussportscamps.com/golf/nike/nike-golf-camps-the-bunker" target="_blank">Click Here To Register</a></p>
        <p className="mt-4">For any questions, feel free to contact us.</p>
      </section>

      <section className="p-10 text-center">
        <h1 className="text-3xl text-green-600">Junior Lesson Rates</h1>
        <div className="mt-6 max-w-xl mx-auto bg-white p-6 shadow-xl rounded-xl hover-grow">
          <h3 className="text-xl font-semibold">Junior Individual</h3>
          <p>One Hour: $100</p>
          <p>Half Hour: $55</p>
        </div>
      </section>

			<section>
				<div className=''></div>
			</section>


    </div>
  );
}
