import { GoArrowRight } from "react-icons/go";

const HeroSection = () => {
  return (
    <section
      className="
        relative
        bg-[url('https://goayo.com/cdn/shop/files/Frame_1_0bc22453-a17f-406c-aba9-56b2a1f3d0e1.png?v=1763628406')]
        sm:bg-[url('https://goayo.com/cdn/shop/files/049cff58-7e4d-4c23-ac9d-fb2c0504c3e8.jpg?v=1761849909&width=2848')]
        bg-cover bg-center sm:bg-no-repeat
        h-[100vh] sm:h-[80vh] xl:h-[120vh]
        flex items-start sm:items-center
        m-3 rounded-xl
        mt-24 lg:mt-0
      "
    >
      <div className="space-y-5 p-5 max-w-3xl">
        <h1 className="text-4xl sm:text-6xl xl:text-[90px] text-white leading-tight">
          World’s Best{" "}
          <span className="font-normal block sm:inline">
            Light Therapy Glasses
          </span>
        </h1>

        <p className="text-white text-base sm:text-lg sm:w-3/4">
          Become happier and more active with the world’s best light therapy
          glasses.
        </p>

        <button
          aria-label="Start My Light Reset"
          className="bg-white text-black px-6 py-4 rounded-full flex items-center gap-2 hover:bg-gray-100 transition"
        >
          <span className="uppercase text-sm font-medium">
            Start My Light Reset
          </span>
          <GoArrowRight size={20} />
        </button>
      </div>

      <div className="absolute bottom-20 left-5 flex items-center gap-6">
        <img
          src="https://res.cloudinary.com/dasvdkncm/image/upload/v1765879411/Frame_1000002026_vdapb9.png"
          alt="logo"
          className="hidden xl:block w-60"
        />
        <div className="flex items-center bg-black/20 backdrop-blur-md px-4 py-2 rounded-full gap-3">
          <p className="text-white text-sm sm:text-base">
            100,000+ users of AYO Light Therapy <br /> Glasses
          </p>

          <div className="flex items-center">
            <img
              src="https://goayo.com/cdn/shop/files/3916ccca08c2b8bf4eba8462ad46f718dc1611d9.jpg?v=1757525271"
              alt="user"
              className="w-9 h-9 rounded-full object-cover border-2 border-white"
            />
            <img
              src="//goayo.com/cdn/shop/files/778ba7c0e783e6c8459f2906dea3f6f02b41300e.jpg?v=1757525271"
              alt="user"
              className="-ml-3 w-9 h-9 rounded-full object-cover border-2 border-white"
            />
            <img
              src="//goayo.com/cdn/shop/files/92f98931110509f1ac4d38d2485135fc351611c4.jpg?v=1757525270"
              alt="user"
              className="-ml-3 w-9 h-9 rounded-full object-cover border-2 border-white"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
