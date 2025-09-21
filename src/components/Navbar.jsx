import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import { navLinks } from "../../constants/index.js";

const Navbar = () => {
  useGSAP(() => {
    const navTween = gsap.timeline({
      scrollTrigger: {
        trigger: "nav",
        start: "bottom top",
      },
    });

    navTween.fromTo(
      "nav",
      { backgroundColor: "transparent" },
      {
        backgroundColor: "#00000050",
        backgroundFilter: "blur(10px)",
        duration: 1,
        ease: "power1.inOut",
      }
    );
  });

  return (
    <nav>
      <div className="relative  shadow-sm z-50  flex pt-4">
        <div className="absolute inset-0 bg-black/50 rounded-lg -z-10"></div>

        <div className="max-w-7xl bg-transparent backdrop-blur-md rounded-full  border border-white mx-auto py-2 flex items-center justify-between w-full px-8">
          <h1 className="text-2xl font-bold text-white ">Lumeera</h1>

          <nav className="max-w-7xl mx-auto px-4 py-2 flex space-x-8 ">
            <a
              href="#"
              className="text-white hover:text-gray-700 font-semibold transition-colors"
            >
              Home
            </a>
            <a
              href="#"
              className="text-white hover:text-gray-700 font-semibold transition-colors"
            >
              About
            </a>
            <a
              href="#"
              className="text-white hover:text-gray-700 font-semibold transition-colors"
            >
              Gallery
            </a>
            <a
              href="#"
              className="text-white hover:text-gray-700 font-semibold transition-colors"
            >
              Contact
            </a>
            <a
              href="#"
              className="text-white hover:text-gray-700 font-semibold transition-colors"
            >
              Menu
            </a>
            <a
              href="#"
              className="text-white hover:text-gray-700 font-semibold transition-colors"
            >
              Events
            </a>
            <a
              href="#"
              className="text-white hover:text-gray-700 font-semibold transition-colors"
            >
              Kids Area
            </a>
          </nav>

          <div className="hidden md:flex space-x-4">
            <button className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-700 transition-colors">
              <span>Reservation</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
