import { SiDiagramsdotnet, SiJavascript } from 'react-icons/si';
import { AiFillAndroid } from 'react-icons/ai';
import EducationCard from './EducationCard';

export default function Education() {
  return (
    <div className="flex flex-col p-2 container mx-auto">
      <div className="flex items-center min-h-full gap-10 justify-center">
        <div className="bg-blue-800 h-[2px] w-20" />
        <h2 className="text-center text-4xl font-black text-gray-800">
          Education
        </h2>
        <div className="bg-blue-800 h-[2px] w-20" />
      </div>
      <div>
        <p className="text-gray-500 text-center font-semibold">
          My knowledge about software development
        </p>
      </div>
      <div className="grid grid-cols-1 my-2 md:grid-cols-2 lg:grid-cols-3">
        <EducationCard
          Icon={SiDiagramsdotnet}
          title="Software Design and Architecture"
          description="Requirements elicitation process and development of UML diagrams for your application."
          classStyles="md:col-span-1"
        />
        <EducationCard
          Icon={AiFillAndroid}
          title="Mobile Development"
          description="Creation of multi-platform mobile applications with a great user experience. Improve your business and speed up processes."
          classStyles="md:col-span-1"
        />
        <EducationCard
          Icon={SiJavascript}
          title="Web Development"
          description="Development of landing pages and/or web applications for your business or entrepreneurship."
          classStyles="md:col-span-2 lg:col-span-1"
        />
      </div>
    </div>
  );
}
