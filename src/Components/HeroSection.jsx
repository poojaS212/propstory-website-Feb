import Antigravity from "./Antigravity";
import RotatingText from "./RotatingText";


export default function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-white">
      
      {/* Background */}
      <Antigravity count={300} color="#6b6bff" autoAnimate />

      {/* Overlay */}
      <div className="absolute inset-0 z-10 bg-white/70" />

      {/* Content */}
      <div className="relative z-20 flex h-full flex-col items-center justify-center text-center px-4">
        <div className="mb-6 flex items-center gap-2 text-sm font-medium text-gray-700">
        <img src="https://cdn.propstory.com/magicpages/NAME/16iwl4khzwli8ekjocPS_logo.png" alt="Logo" className="w-30" />
        </div>

        <h1 className="max-w-5xl text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-black flex flex-wrap md:flex-nowrap items-center justify-center gap-3 text-center">
            <span className="whitespace-nowrap">
                Result Driven Digital
            </span>

            <RotatingText 
                texts={[
                'Marketing',
                'Strategy',
                'Campaigns',
                'Growth',
                'Performance',
                'Solutions',
                'Services',
                'Lead Generation',
                'Conversions'
                ]}
                mainClassName="bg-[#f0ff96] text-black overflow-hidden justify-center inline-flex whitespace-nowrap"
                staggerFrom="last"
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                exit={{ y: '-120%' }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden pb-1"
                transition={{ type: 'spring', damping: 30, stiffness: 400 }}
                rotationInterval={2000}
            />
            </h1>



        <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
          <button className="rounded-full bg-black px-8 py-4 text-white font-medium hover:bg-gray-800 transition">
            Contact Us
          </button>
          <button className="rounded-full border border-gray-300 px-8 py-4 text-black font-medium hover:bg-gray-100 transition">
            Explore More
          </button>
        </div>
      </div>

    </section>
  );
}
