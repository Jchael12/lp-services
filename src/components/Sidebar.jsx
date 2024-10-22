import Hamburger from "hamburger-react";
import { useEffect, useState } from "react";
import Logo from "/jhsereno-light.png";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showOnScrollUp, setShowOnScrollUp] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show when scrolling up, hide when scrolling down
      if (currentScrollY < lastScrollY) {
        setShowOnScrollUp(true);
      } else if (currentScrollY > lastScrollY) {
        setShowOnScrollUp(false);
      }
      // Update last scroll position
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  //styling for sidebar element
  const sidebarStyle =
    "text-3xl font-playfair uppercase text-[#737057] cursor-pointer";
  const lineStyle =
    "absolute left-0 bottom-0 w-0 h-[0.10rem] bg-[#737057] transition-all duration-500 group-hover:w-full";

  return (
    <>
      {/* Button to toggle sidebar */}
      <div
        className={`flex items-center justify-between w-full fixed p-5 shadow-lg z-50 transition-transform duration-500 ${
          showOnScrollUp ? "translate-y-0" : "-translate-y-full"
        } bg-opacity-10 backdrop-filter backdrop-blur-lg`}
      >
        <img src={Logo} alt="logo" className="w-44 hidden lg:block" />
        <div className="flex items-center justify-between gap-5">
          <div className="relative">
            <input
              placeholder="Search by address or area"
              autoComplete="off"
              className="input shadow-lg focus:border-2 border-gray-300 px-5 py-2 rounded-xl w-64 transition-all focus:w-72 outline-none"
              name="search"
              type="search"
            />
            <svg
              className="size-6 absolute top-2 right-2 text-gray-500"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                strokeLinejoin="round"
                strokeLinecap="round"
              ></path>
            </svg>
          </div>
          <Hamburger
            rounded
            color={isOpen ? "#faf6ec" : "white"}
            toggle={setIsOpen}
            toggled={isOpen}
          />
        </div>
      </div>
      {/* Sidebar */}

      <div
        className={`fixed top-0 right-0 h-screen bg-[#faf6ec] w-96 transform ${
          isOpen ? "translate-x-0 z-50" : "translate-x-full"
        } transition-transform duration-500 ease-in-out`}
      >
        <div className="z-50 p-4 h-screen">
          <div className="flex justify-between items-center">
            <Hamburger
              rounded
              color="#737057"
              toggled={isOpen}
              toggle={setIsOpen}
            />
          </div>
          <ul className="h-full space-y-9 mt-10">
            <li className="relative inline-block group">
              <span className={sidebarStyle}>Search for Homes</span>
              <span className={lineStyle}></span>
            </li>
            <li className="relative inline-block group">
              <span className={sidebarStyle}>{`\u2022 Services`}</span>
              <span className={lineStyle}></span>
            </li>
            <li className="relative inline-block group">
              <span className={sidebarStyle}>Our Communities</span>
              <span className={lineStyle}></span>
            </li>
            <li className="relative inline-block group">
              <span className={sidebarStyle}>Contact Us</span>
              <span className={lineStyle}></span>
            </li>
            <li className="relative inline-block group">
              <span className={sidebarStyle}>Meet the Team</span>
              <span className={lineStyle}></span>
            </li>
            <li className="relative inline-block group">
              <span className={sidebarStyle}>Home Evaluation</span>
              <span className={lineStyle}></span>
            </li>
            <li className="relative inline-block group">
              <span className={sidebarStyle}>Home Across America</span>
              <span className={lineStyle}></span>
            </li>
            <li className="relative inline-block group">
              <span className={sidebarStyle}>Testimonials</span>
              <span className={lineStyle}></span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
