import React from 'react';
import Intro from './Intro';
import Hero from './Hero';
import InFo from './InFo';
import CurrentmemberSlider from './CurrentmemberSlider';
import AlumniSlider from './AlumniSlider';
import InternSlider from './InternSlider';
import ImageSlider from './ImageSlider'; 
import Footer from './Footer';
 
 

function Home() {
  return (
    <div className="bg-gradient-to-t from-blue-50 to-sky-50">
      <Hero />
      <Intro /> 
      <InFo />
      <CurrentmemberSlider />
      <AlumniSlider />
      <InternSlider />
      <ImageSlider />
      
      <Footer />
    </div>
  );
}

export default Home;
