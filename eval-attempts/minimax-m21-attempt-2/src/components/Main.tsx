import Header from './Header';
import Hero from './Hero';
import Courses from './Courses';
import Podcast from './Podcast';
import Youtube from './Youtube';
import About from './About';
import Newsletter from './Newsletter';
import Footer from './Footer';

export default function Main() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Courses />
        <Podcast />
        <Youtube />
        <About />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}