import { useState } from "react";
import BgImage from "../../assets/coffee/bg-slate.png";
import CoffeeMain from "../../assets/coffee/black.png";
import Navbar from "../Navbar/Navbar";
import { motion } from "framer-motion";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const BgImage1 = {
  backgroundImage: `url(${BgImage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};

const HeroSection = () => {
  const [sidebar, setsidebar] = useState(false);

  return (
    <main style={BgImage1}>
      <section className="relative min-h-[750px] w-full">
        <div className="container">
          {/* Navbar section */}
          <Navbar sidebar={sidebar} setsidebar={setsidebar} />

          {/* Hero section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center min-h-[850px] gap-0">
            {/* Text content section */}
            <div className="text-lightOrange space-y-8 pt-12 md:pt-0">
              <motion.h1
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 1,
                }}
                className="text-4xl mt-7 md:text-5xl lg:text-7xl font-bold leading-tight mx-6"
              >
                Black Tumbler
              </motion.h1>
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 1.2,
                }}
                className="relative mx-6"
              >
                <div className="relative z-10 space-y-4">
                  <h1 className="text-lg md:text-xl lg:text-2xl">Black Lifestyle Lovers</h1>
                  <h1 className="text-sm opacity-50 leading-loose">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Facilis, voluptas. Accusantium culpa deserunt dicta! Beatae
                    veritatis quidem quaerat quas qui ut dolore distinctio
                    sapiente,
                  </h1>
                </div>
                <div className="absolute w-[250px] h-[190px] bg-gray-700/50 -top-6 -left-10"></div>
              </motion.div>
            </div>

            {/* Hero content section */}
            <div className="relative px-6 sm:px-0">
              <motion.img
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 0.4,
                }}
                src={CoffeeMain}
                className="relative z-40 h-[400px] md:h-[500px] lg:h-[700px] img-shadow mx-auto"
                alt="coffee"
              />
              {/* Orange circle ring */}
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 0.8,
                }}
                className="border-[20px] h-[180px] w-[180px] absolute top-[40px] -right-12 border-primary rounded-full z-10"
              ></motion.div>

              {/* Big text section */}
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 1.2,
                }}
                className="absolute -top-20 left-[50%] transform -translate-x-1/2 z-[1]"
              >
                <h1 className="text-[80px] sm:text-[100px] md:text-[120px] lg:text-[140px] scale-150 font-bold text-darkGray/40">
                  Black Tumbler
                </h1>
              </motion.div>
            </div>

            {/* Additional content section */}
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: 1.2,
              }}
              className="text-lightOrange space-y-8 pt-12 md:pt-0"
            >
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight mx-6 opacity-0">
                Black Tumbler
              </h1>
              <div className="relative mx-6">
                <div className="relative z-10 space-y-4">
                  <h1 className="text-lg md:text-xl lg:text-2xl">The Design</h1>
                  <h1 className="text-sm opacity-50 leading-loose">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Facilis, voluptas. Accusantium culpa deserunt dicta!
                    Beatae sit amet consectetur adipisicing elit.
                  </h1>
                </div>
                <div className="absolute w-[285px] h-[190px] bg-darkGray/50 -top-6 -right-10"></div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Slider menu section */}
        {sidebar && (
          <motion.div 
            initial={{x: "100%"}}
            whileInView={{x:0}}
            className="absolute top-0 right-0 w-[140px] h-full bg-gradient-to-b from-primary/90 to-primaryDark/30">
            <div className="w-full h-full flex justify-center items-center">
              <div className="flex flex-col justify-center items-center gap-6 text-white">
                {/* line */}
                <div className="w-[1px] h-[70px] bg-white"></div>

                {/* social icons */}
                <div className="inline-block p-2 rounded-full cursor-pointer border border-white">
                  <FaFacebookF className="text-2xl" />
                </div>
                <div className="inline-block p-2 rounded-full cursor-pointer border border-white">
                  <FaTwitter className="text-2xl" />
                </div>
                <div className="inline-block p-2 rounded-full cursor-pointer border border-white">
                  <FaInstagram className="text-2xl" />
                </div>

                <div className="w-[1px] h-[70px] bg-white"></div>
              </div>
            </div>
          </motion.div>
        )}
      </section>
    </main>
  );
};

export default HeroSection;
