"use client";

import { CardContentProps, ProfileCardProps } from "@/interfaces";
import Image from "next/image";
import { useEffect } from "react";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Card: React.FC<CardContentProps> = ({ children, className }) => (
  <div
    className={`max-w-sm p-6 rounded-2xl shadow-xl text-center bg-white ${className}`}
  >
    {children}
  </div>
);

const CardContent: React.FC<CardContentProps> = ({ children, className }) => (
  <div className={`mt-4 text-gray-700 text-sm ${className}`}>{children}</div>
);

const ProfileCard: React.FC<ProfileCardProps> = ({
  name,
  title,
  bio,
  image,
  phone,
  email,
}) => {
  return (
    <Card className="w-full sm:w-[400px] h-auto sm:h-[500px] flex flex-col items-center p-4">
      <Image
        src={
          image ||
          "https://storage.googleapis.com/thebunker-assets/thebunker/profilepic.png"
        }
        alt={`${name}'s profile picture`}
        width={100}
        height={100}
        className="rounded-full object-cover border-4 border-gray-200"
      />
      <h2 className="mt-4 text-xl font-semibold">{name}</h2>
      <p className="text-gray-500 text-sm">{title}</p>
      <CardContent className="text-center p-4">{bio}</CardContent>
      {phone && (
        <div className="flex items-center justify-center w-full px-3 text-sm font-semibold">
          <FaPhone className="w-4 h-4 mr-2 text-green-600" />
          <p className="">{phone}</p>
        </div>
      )}
      {email && (
        <div className="flex items-center justify-center w-full px-3 text-sm font-semibold">
          <MdEmail className="w-5 h-5 mr-2 text-green-600" />
          <p className="">{email}</p>
        </div>
      )}
    </Card>
  );
};

export default function Home() {
  useEffect(() => {
    window.history.replaceState({}, document.title, window.location.pathname);
  }, []);

  return (
    <div>
      <section className="relative h-[500px] overflow-hidden">
        {/* <img
          src="https://storage.googleapis.com/thebunker-assets/thebunker/latham-new/FRONT9BAY1.png"
          className="absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000"
        /> */}
        <Image
          src="https://storage.googleapis.com/thebunker-assets/thebunker/latham-new/FRONT9BAY1.png"
          alt="The Bunker Front 9 Bay"
          fill
          className="object-cover transition-opacity duration-1000"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
          <h1 className="text-4xl sm:text-7xl text-white">
            LESSONS AT THE BUNKER
          </h1>
          <p className="text-sm px-3 sm:text-lg mt-2 text-white">
            With Our PGA Certified Professionals
          </p>
          <button className="bg-green-700 text-white py-2 px-6 rounded-full shadow-md hover:bg-green-800 mt-5">
            <a href="#coaches" className="hover:text-white">
              Meet our coaches
            </a>
          </button>
        </div>
      </section>

      <section
        id="coaches"
        className="flex flex-col justify-center items-center p-10"
      >
        <div className="max-w-[900px] text-center rounded-xl p-5">
          <h1 className="text-green-600 text-[40px]">THE BUNKER COACHES</h1>
          <p className="text-xl font-aller">
            More than an instructor. The coaches at The Bunker are here to help
            you improve every aspect of your game. Players seek lessons for a
            number of reasons. Our job is to guide you on your journey to
            improvement. We make sure to set proper goals and create
            personalized training protocols in a positive environment.
          </p>
        </div>
      </section>

      <section className="bg-black bg-opacity-90 flex flex-wrap gap-6 justify-center p-10">
        <ProfileCard
          name="Sean Madden"
          title="PGA"
          bio="Is a graduate of the PGM program at Methodist University and has been a member of the PGA of America since 2007. Since becoming a member of the PGA Sean has held many positions within the golf industry, including presently the Director of Golf for all The Bunker locations. Sean has a passion for teaching and watching his players improve at all levels."
          image=""
          email="sean@getinthebunker.golf"
          phone="838-280-0323"
        />
        <ProfileCard
          name="Phil Kaminski"
          title="PGA"
          bio="Phil has pursued a lifelong passion to learn and coach the game of golf. He is a graduate of Methodist University’s PGA PGM program. He has certifications in The Gray Institutes NG 360 FPS system, Penn State Biomechanics and golf’s American Development Model."
          image=""
          email="phil@getinthebunker.golf"
          phone=""
        />
        <ProfileCard
          name="Brandon Risler"
          title="-"
          bio="Brandon has been in the golf industry for over 10 years as an assistant golf professional, most recently at Saratoga Golf and Polo. Brandon is working toward his PGA membership and is a lead fitter with TaylorMade. He enjoys teaching and coaching students of all ability levels."
          image=""
          email="brandon@getinthebunker.golf"
          phone=""
        />
      </section>
    </div>
  );
}
