import { GoArrowRight } from "react-icons/go";
import { BsCart2 } from "react-icons/bs";
import { useEffect, useRef, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";

const navMenu = ["Why Ayo", "Our Science", "Success Stories"];

const Navbar = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const menuRef = useRef(null);

  const toggleMenu = () => setIsMobileOpen(!isMobileOpen);
  const closeMenu = () => setIsMobileOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`m-6 p-4 flex justify-between items-center bg-[#f3f5ff] rounded-xl fixed left-0 right-0 z-30
        ${isScrolled ? "top-0" : "top-25 xl:top-28"}`}
    >
      <div>
        <img
          src="https://res.cloudinary.com/dasvdkncm/image/upload/v1765870844/9c5383887dbd30fb0bd34ef743a5b9834ab511f2-removebg-preview_fadpgr.png"
          alt="company-logo"
          className="w-32"
        />
      </div>
      <ul className="uppercase flex gap-8 text-sm font-medium xl:flex hidden">
        {navMenu.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <div className="flex gap-3 items-center">
        <button className="bg-black text-white px-4 py-2 rounded-full flex items-center gap-2 md:flex hidden hover:bg-black/80 transition">
          <span className="uppercase">Order Now</span>
          <GoArrowRight size={20} />
        </button>
        <BsCart2 size={30} />
        <button
          onClick={toggleMenu}
          className="xl:hidden bg-none border-none cursor-pointer"
          aria-label="Toggle menu"
        >
          <AiOutlineMenu size={25} />
        </button>
      </div>
      {isMobileOpen && (
        <div
          onClick={closeMenu}
          className="fixed inset-0 bg-black/40 z-40 xl:hidden"
        />
      )}

      {/* Mobile Menu */}
      <div
        ref={menuRef}
        className={`fixed top-0 right-0 h-full w-94 bg-white shadow-xl z-50
        transform transition-transform duration-300 ease-in-out xl:hidden
        ${isMobileOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="my-6 px-4">
          <img
            src="https://res.cloudinary.com/dasvdkncm/image/upload/v1765870844/9c5383887dbd30fb0bd34ef743a5b9834ab511f2-removebg-preview_fadpgr.png"
            alt="company-logo"
            className="h-8 w-auto"
          />
          <button
            onClick={closeMenu}
            className="absolute top-6 right-4 bg-none border-none cursor-pointer"
            aria-label="Close menu"
          >
            <RxCross1 size={25} />
          </button>
        </div>

        <div className="flex flex-col justify-between h-[90%]">
          <ul className="flex flex-col text-sm font-medium uppercase">
            {navMenu.map((item) => (
              <li
                key={item}
                onClick={closeMenu}
                className="px-4 py-4 hover:bg-gray-100 cursor-pointer"
              >
                {item}
              </li>
            ))}
          </ul>
          <button
            onClick={closeMenu}
            className="m-4 bg-black text-white w-[90%] px-4 py-2 rounded-full flex items-center justify-center gap-2"
          >
            <span className="uppercase">Order Now</span>
            <GoArrowRight size={20} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
