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
            <h1 className="mb-5 text-5xl font-bold">
              Discover an exceptional cooking class tailored for you!
            </h1>
            <p className="mb-5">
              Learn and Master Basic Programming, Data Structures, Algorithm,
              OOP, Database and solve 500+ coding problems to become an
              exceptionally well world-class Programmer.
            </p>
            <button className="bg-green-400 px-6 py-4 text-xl font-semibold text-indigo-950 border-transparent rounded-full mr-5">
              Explore Now
            </button>
            <button className="px-6 py-4 text-xl font-semibold text-white border-white border rounded-full">
              Our Feedback
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
