import 'react';
import { MdMenu } from "react-icons/md";
import { motion } from "framer-motion";
import { RiCloseFill } from "react-icons/ri";

// eslint-disable-next-line react/prop-types
const Navbar = ({ sidebar, setsidebar }) => {
  return (
    <nav className="absolute top-0 left-0 w-full pt-10 text-white z-40">
      <div className="container">
        <div className="flex justify-between items-center">
          {/* Logo section */}
          <motion.h1
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 0.2,
            }}
            className="text-2xl font-semibold uppercase"
          >
            <span className="text-primary">Coders </span>
            Coffee.
          </motion.h1>
          {/* Hamburger menu */}
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 0.2,
            }}
            onClick={() => setsidebar(!sidebar)}
            className="cursor-pointer"
          >
            {sidebar ? (
              <RiCloseFill className="text-4xl" />
            ) : (
              <MdMenu className="text-4xl" />
            )}
          </motion.div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
