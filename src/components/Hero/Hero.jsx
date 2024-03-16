const Hero = () => {
  return (
    <div>
      <div
        className="hero min-h-[85vh] rounded-3xl"
        style={{
          backgroundImage: "url(https://i.ibb.co/0rwCQJ8/Rectangle-1.png)",
        }}
      >
        <div className="hero-overlay bg-opacity-60 rounded-3xl"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-4xl text-white">
            <h1 className="mb-5 lg:text-5xl md:text-3xl text-2xl font-bold">
              Discover an exceptional cooking class tailored for you!
            </h1>
            <p className="mb-5">
              Learn and Master Basic Programming, Data Structures, Algorithm,
              OOP, Database and solve 500+ coding problems to become an
              exceptionally well world-class Programmer.
            </p>
            <button className="bg-green-400 border-2 border-green-400 hover:bg-transparent hover:border-white hover:text-white transition-all px-6 py-4 text-xl font-semibold text-indigo-950 rounded-full mr-5">
              Explore Now
            </button>
            <button className="px-6 py-4 text-xl font-semibold text-white border-white border-2 rounded-full hover:bg-green-400 hover:text-black transition-all hover:border-green-400">
              Our Feedback
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
