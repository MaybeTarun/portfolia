import { useState, useRef, useEffect } from "react";
import Typewriter from "typewriter-effect";
import type { TypewriterClass } from "typewriter-effect";
import grains from "../assets/bg.svg";
import clickSound from '../assets/clickityclack.mp3';

const Preloader = ({ setIsPreloading }: { setIsPreloading: React.Dispatch<React.SetStateAction<boolean>> }) => {
  const [fadeOut, setFadeOut] = useState(false);
  const [loaderText, setLoaderText] = useState("");
  const [showWarning, setShowWarning] = useState(false);
  const [showWelcome, setShowWelcome] = useState(false);
  const typewriterRef = useRef<TypewriterClass | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const hasPlayedRef = useRef(false);

  useEffect(() => {
    audioRef.current = new Audio(clickSound);
    audioRef.current.volume = 1;

    const playOnInteraction = () => {
      if (!hasPlayedRef.current && audioRef.current) {
        audioRef.current.play()
          .then(() => hasPlayedRef.current = true)
          .catch(e => console.log("Audio play prevented:", e));
      }
    };

    const playImmediately = async () => {
      try {
        await audioRef.current?.play();
        hasPlayedRef.current = true;
      } catch (err) {
        window.addEventListener('click', playOnInteraction, { once: true });
      }
    };

    playImmediately();

    return () => {
      window.removeEventListener('click', playOnInteraction);
      audioRef.current?.pause();
      audioRef.current = null;
    };
  }, []);

  const animateProgress = () => {
    let timeout1: number = 0;
    let timeout2: number = 0;
    let timeout3: number = 0;
    let interval: number = 0;
    let progress = 0;

    interval = window.setInterval(() => {
      progress += 3;
      const blocks = '█'.repeat(Math.floor(progress/6));
      const empty = '░'.repeat(16 - Math.floor(progress/6));
      setLoaderText(`[${blocks}${empty}] ${Math.min(progress, 99)}%`);
      
      if (progress >= 99) {
        window.clearInterval(interval);
        setShowWarning(true);
        
        timeout1 = window.setTimeout(() => {
          setLoaderText("[████████████████] 100%");
          setShowWarning(false);
          setShowWelcome(true);
          
          timeout2 = window.setTimeout(() => {
            setFadeOut(true);
            timeout3 = window.setTimeout(() => setIsPreloading(false), 1000);
          }, 500);
        }, 2000);
      }
    }, 40);

    return () => {
      window.clearTimeout(timeout1);
      window.clearTimeout(timeout2);
      window.clearTimeout(timeout3);
      window.clearInterval(interval);
    };
  };

  return (
    <div 
      className={`w-full h-screen flex flex-col items-start justify-start p-4 transition-opacity duration-500 ${fadeOut ? 'opacity-0' : 'opacity-100'}`}
      style={{ backgroundImage: `url(${grains})`, backgroundSize: "cover" }}
    >
      <Typewriter
        onInit={(typewriter: TypewriterClass) => {
          typewriterRef.current = typewriter;
          typewriter
            .changeDelay(30)
            .typeString('Initializing portfolio...')
            .pauseFor(200)
            .typeString('\nLoading assets: <span class="text-green-500">24</span>/24 complete.')
            .pauseFor(200)
            // .typeString('\nOwner: Tarun Gupta')
            // .pauseFor(200)
            .callFunction(() => animateProgress())
            .start();
        }}
        options={{
          cursor: '█',
          wrapperClassName: "whitespace-pre-line font-mono text-black text-sm md:text-lg mb-1",
          autoStart: false
        }}
      />

      <div className="font-mono text-sm md:text-lg mt-1 text-black">
        {loaderText}
      </div>

      {showWarning && (
        <div className="font-mono text-red-500 text-sm md:text-lg mt-1">
          [!] Warning: High level of Awesomeness Detected
        </div>
      )}

      {showWelcome && !showWarning && (
        <div className="font-mono text-green-500 text-sm md:text-lg mt-1">
          [✓] Access Granted
        </div>
      )}
    </div>
  );
};

export default Preloader;