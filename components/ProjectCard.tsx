import Image from 'next/image';

interface Props {
  props: {
    href: string,
    src: string,
    title: string,
    before?: string,
    resalt?: string,
    text: string,
    classStyles?: string,
  }
}

export default function ProjectCard({
  href, src, text, title, before, resalt, classStyles,
}: Props['props']) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-controls="div"
      className={`hover:scale-[1.02] transition-all duration-500 ${classStyles ?? ''}`}
    >
      <div className="shadow-md rounded-sm border border-gray-300 w-72 h-full">
        <div className="w-full">
          <Image src={src} width={300} height={180} alt={`Project ${title}`} />
        </div>
        <div className="p-2">
          <p className="font-bold text-center text-lg">{title}</p>
          <p className="font-light">
            {before ?? ''}
            <span className="text-blue-700 font-bold">
              {' '}
              {resalt}
            </span>
            {' '}
            {text}
          </p>
        </div>
      </div>
    </a>
  );
}
