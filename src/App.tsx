import { useState } from "react";
import Preloader from './components/Preloader';
import grains from './assets/bg.svg';
import Hero from './components/Hero';

function App() {
  const [isPreloading, setIsPreloading] = useState(true);

  return (
    <>
      {isPreloading ? (
        <Preloader setIsPreloading={setIsPreloading} />
      ) : (
        <div className="relative h-screen w-full">
          <div 
            className="fixed inset-0 -z-10 bg-cover bg-fixed"
            style={{ backgroundImage: `url(${grains})` }}
            aria-hidden="true"
          />
          
          <div className="relative">
            <Hero/>
          </div>
        </div>
      )}
    </>
  );
}

export default App;