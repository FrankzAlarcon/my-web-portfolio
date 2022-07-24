import Image from 'next/image';
import Typed from 'react-typed';

export default function Presentation() {
  return (
    <div className="flex flex-col items-center mt-10 mb-16 p-2">
      <div>
        <Image
          src="/img/me.jpg"
          width={150}
          height={150}
          className="rounded-full"
        />
      </div>
      <h2 className="text-3xl text-center font-bold text-gray-800">
        Hi, My name is
        {' '}
        <span className="text-blue-600 font-black text-4xl">Frankz</span>
      </h2>

      <p className="font-bold text-2xl text-center text-gray-800">
        I&apos;m
        {' '}
        <span className="text-4xl text-center text-blue-600 font-black">
          <Typed
            strings={['Web Developer', 'Engineering Student']}
            typeSpeed={100}
            backSpeed={70}
            loop
          />
        </span>
      </p>
      <p className="text-gray-800 text-lg font-bold">
        from Orellana, Ecuador 🇪🇨
      </p>
    </div>
  );
}
