import { IconType } from 'react-icons';

interface Props {
  props: {
    Icon: IconType;
    title: string;
    description: string;
    classStyles?: string;
  }
}

export default function EducationCard({
  Icon, description, title, classStyles,
}: Props['props']) {
  return (
    <div className={`flex flex-col items-center p-2 my-2 ${classStyles || ''}`}>
      <div className="bg-blue-800 rounded-md w-14 h-14 grid place-content-center">
        <Icon className="text-3xl text-white" />
      </div>
      <div>
        <p className="text-gray-800 text-center font-bold text-lg">{title}</p>
        <p className="text-center font-light">
          {description}
        </p>
      </div>
    </div>
  );
}
