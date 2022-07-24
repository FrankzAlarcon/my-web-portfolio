import type { NextPage } from 'next';
import AnimatedIcons from '../components/AnimatedIcons';
import Education from '../components/Education';
import NavBar from '../components/NavBar';
import Presentation from '../components/Presentation';
import Projects from '../components/Projects';
import Technologies from '../components/Technologies';

const Home: NextPage = () => (
  <div className="">
    <section className="relative w-full overflow-hidden bg-gradient-to-r gradient-yellow gradient-orange" style={{ clipPath: 'polygon(25% 0%, 100% 0, 100% 95%, 0 100%, 0 100%, 0 0)' }}>
      <NavBar />
      <AnimatedIcons />
      <Presentation />
    </section>
    <section className="mt-10">
      <Education />
    </section>
    <section className="mt-10">
      <Technologies />
    </section>
    <section className="mt-10">
      <Projects />
    </section>
  </div>
);

export default Home;
