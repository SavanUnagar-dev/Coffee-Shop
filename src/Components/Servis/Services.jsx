import React from "react";
import { motion } from "framer-motion";
import Coffee1 from "../../assets/coffee/coffee1.png";
import Coffee2 from "../../assets/coffee/coffee3.png";

const servicesData = [
  {
    id: 1,
    image: Coffee1,
    title: "Black coffee",
    subtitle:
      "Black coffee is a pure, unsweetened beverage made by brewing coffee without additives like milk or sugar.",
  },
  {
    id: 2,
    image: Coffee2,
    title: "Hot coffee",
    subtitle:
      "Hot coffee is a pure, unsweetened beverage made by brewing coffee without additives like milk or sugar.",
  },
  {
    id: 3,
    image: Coffee1,
    title: "Cold coffee",
    subtitle:
      "Cold coffee is a pure, unsweetened beverage made by brewing coffee without additives like milk or sugar.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 150,
      damping: 10,
    },
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.6,
      staggerChildren: 0.4,
    },
  },
};

const Services = () => {
  return (
    <div className="container my-16 space-y-4">
      {/* Header section */}
      <div className="text-center max-w-lg mx-auto space-y-2">
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 150,
            damping: 10,
            delay: 0.2,
          }}
          className="text-4xl font-bold text-lightGray"
        >
          Fresh and <span className="text-primary">Tasty coffee</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 150,
            damping: 10,
            delay: 0.6,
          }}
          className="text-md opacity-50"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id quod
          consectetur adipisci laudantium voluptate. Ipsa vero blanditiis nisi
          odit
        </motion.p>
      </div>

      {/* Card section */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
      >
        {servicesData.map((ser) => (
          <motion.div
            variants={cardVariants}
            key={ser.id}
            className="text-center space-y-2"
          >
            <img
              src={ser.image}
              alt={ser.title}
              className="img-shadow2 max-w-[210px] mx-auto hover:scale-110 duration-300"
            />
            <div className="space-y-2">
              <h1 className="text-2xl font-bold text-primary">{ser.title}</h1>
              <h1 className="text-darkGray">{ser.subtitle}</h1>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Services;
