export default function NavBar() {
  return (
    <header id="home">
      <nav className="p-4 bg-opacity-20 shadow-sm bg-blue-100">
        <ul className=" flex justify-center gap-10 text-sm">
          <li className="font-bold text-gray-700 uppercase underline-animated md:text-base"><a href="#home">Home</a></li>
          <li className="font-bold text-gray-700 uppercase underline-animated md:text-base"><a href="#education">Education</a></li>
          <li className="font-bold text-gray-700 uppercase underline-animated md:text-base"><a href="#projects">Projects</a></li>
        </ul>
      </nav>
    </header>
  );
}
