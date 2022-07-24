import Image from 'next/image';

interface Props {
  props: {
    image: string;
  }
}

export default function EducationCard({ image }: Props['props']) {
  // Desarrollo web como en adatech
  // diseño de software - arquitectura, uml
  // Desarrollo movil como en adatech
  return (
    <div className="shadow-sm rounded-sm">
      <Image src={image} alt="education" layout="responsive" />
    </div>
  );
}
