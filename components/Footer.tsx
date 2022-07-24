import React from 'react';
import { SiInstagram } from 'react-icons/si';
import { MdEmail } from 'react-icons/md';

export default function Footer() {
  return (
    <footer className="bg-blue-800 py-10 md:py-14 space-y-5 drop-shadow-2xl corner flex flex-col md:flex-row-reverse items-center justify-around">
      <div>
        <a
          href="https://github.com/FrankzAlarcon"
          target="_blank"
          rel="noreferrer"
          className="underline-animated text-white font-bold text-xl"
        >
          @FrankzAlarcon
        </a>
      </div>
      <div className="flex">
        <p className="font-bold text-white mr-2 text-lg md:text-xl">Contact:</p>
        <div className="flex gap-2 items-center">
          <a
            href="mailto:leninalarcon7@gmail.com"
            target="_blank"
            className="hover:scale-110 transition-all duration-500"
            rel="noreferrer"
            aria-label="Send me an email"
          >
            <MdEmail className="w-7 h-7 text-white md:w-8 md:h-8" />
          </a>
          <a
            href="https://www.instagram.com/lenin.alarcon.752/"
            target="_blank"
            className="hover:scale-[1.03] transition-all duration-500"
            rel="noreferrer"
            aria-label="Follow me on Instagram"
          >
            <SiInstagram className="w-6 h-6 text-white md:w-8 md:h-8" />
          </a>
        </div>
      </div>
    </footer>
  );
}
