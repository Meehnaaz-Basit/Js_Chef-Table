const Hero = () => {
  return (
    <div>
      <div
        className="hero lg:min-h-[85vh] min-h-screen rounded-3xl"
        style={{
          backgroundImage: "url(https://i.ibb.co/0rwCQJ8/Rectangle-1.png)",
        }}
      >
        <div className="hero-overlay bg-opacity-60 rounded-3xl"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-4xl text-white">
            <h1 className="mb-5 lg:text-5xl md:text-3xl text-3xl font-bold">
              Experience the Essence of{" "}
              <span className="text-green-400">Nourish Bite</span> where Flavor
              Meets Bliss!
            </h1>
            <p className="mb-5">
              Embark on a culinary adventure with us, where every dish is a
              masterpiece, meticulously crafted to tantalize your senses and
              leave you craving more.
            </p>
            <button className="bg-green-400 border-2 border-green-400 hover:bg-transparent hover:border-white hover:text-white transition-all px-6 py-4 text-xl font-semibold text-indigo-950 rounded-full md:mr-5 mr-1 md:mt-0 mt-4">
              Explore Now
            </button>
            <button className="px-6 py-4 text-xl font-semibold text-white border-white border-2 rounded-full hover:bg-green-400 hover:text-black transition-all hover:border-green-400  md:mt-0 mt-4 md:mr-0 mr-1 ">
              Our Feedback
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
