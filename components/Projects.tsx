import React from 'react';
import { SiGithub } from 'react-icons/si';
import ProjectCard from './ProjectCard';

export default function Projects() {
  // Algunos proyectos de github
  // Los demas proyectos en nueva pagina
  return (
    <div className="flex flex-col container mx-auto mb-10">
      <div className="flex items-center min-h-full gap-10 justify-center">
        <div className="bg-blue-800 h-[2px] w-20 " />
        <h2 className="text-center text-4xl font-black text-gray-800">
          Projects
        </h2>
        <div className="bg-blue-800 h-[2px] w-20" />
      </div>
      <div>
        <p className="text-gray-500 text-center font-semibold">
          Learn about some personal projects I have done
        </p>
      </div>
      <div className="my-10 mx-auto grid md:grid-cols-2 gap-5 lg:grid-cols-3  place-content-center lg:gap-8">
        <ProjectCard href="https://frontend-veterinary-ts.vercel.app" src="/img/VeterinaryApp.png" title="Veterinary App" before="FullStack PERN" resalt="(Postgresql, Express, React, Nodejs)" text="with Typescript and Nextjs Web App to manage a Veterinary" />
        <ProjectCard href="https://disney-plus-clone-frankz.netlify.app/" src="/img/disney-plus-clone.png" title="Disney+ Clone" resalt="React, Redux and The Movie Database API" text="Web to show fetched data from de API, and Vitejs React template" />
        <ProjectCard href="https://app-todos-f.netlify.app" src="/img/todos.jpg" title="TODOs App" resalt="React" text="Web to manage a TODOs/Tasks, you could create TODOs, edit them and delete them." classStyles="md:col-span-2 lg:col-span-1 mx-auto" />
      </div>
      <a
        href="https://github.com/FrankzAlarcon"
        target="_blank"
        type="button"
        className="flex gap-3 mx-auto p-2 shadow-md rounded-full  items-center border-2 border-gray-700 hover:bg-gray-700 hover:text-white transition-colors duration-300"
        rel="noreferrer"
      >
        <p className=" font-bold pl-2">All Projects</p>
        {' '}
        <SiGithub className="h-8 w-8" />
      </a>
    </div>
  );
}
