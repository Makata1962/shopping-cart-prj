import Hero from '../features/hero/Hero';
import Carousel from '../features/corousel/Carousel';
import SpringCollection from '../features/spring-collection/SpringCollection';
import Highlights from '../features/weekly-highlights/Highlights';

function Home() {
  return (
    <>
      <Hero />
      <Carousel />
      <SpringCollection />
      <Highlights />
    </>
  );
}

export default Home;
