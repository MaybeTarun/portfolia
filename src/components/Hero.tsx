import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <div className='w-full relative'>

      <div className="hidden md:block w-full h-dvh">
        <Spline scene="https://prod.spline.design/3WIdvTAoph9ZstxG/scene.splinecode" />
        <div className='w-40 bottom-0 right-0 h-[10%] bg-[#0c0c0c] absolute'/>
        <div className='bottom-0 left-0 p-6 absolute font-mono text-white text-6xl text-left'>
          Making the Internet<br/>
          <span className="inline-flex items-end gap-2">Less boring</span>
        </div>
      </div>
      
      <div className="block md:hidden w-full h-[40vh] bg-[#0c0c0c] relative">
        <Spline scene="https://prod.spline.design/0qAwQ8uONn96Wqxo/scene.splinecode" />
        <div className='w-40 bottom-0 right-0 h-[20%] bg-[#0c0c0c] absolute'></div>
        <div className='bottom-0 left-0 p-6 absolute font-mono text-white text-lg text-left'>
          Making the Internet<br/>
          <span className="inline-flex items-end gap-1">Less boring</span>
        </div>
      </div>
    </div>
  );
}

export default Hero;