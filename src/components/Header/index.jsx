import { useState, useRef } from "react";

import logo from "/logo.svg";
import { IconClose } from "../common/icons/IconClose.jsx";
import { IconBurgerMenu } from "../common/icons/IconBurgerMenu.jsx";
import { useEffect } from "react";
import HeaderDesktop from "./HeaderDesktop";
import HeaderMobile from "./HeaderMobile.jsx";
// import MobileMenu from "./MobileMenu";

const Header = () => {
  const [isOpen, setOpen] = useState(false);
  const [isOpenMobile, setIsOpenMobile] = useState(false)
  const menuRef = useRef(null);
  const toggleMenu = () => {
    setOpen(!isOpen);
  };
  const toggleMobile = () => {
    setIsOpenMobile(!isOpenMobile)
  }
  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setOpen(false);
    }
  };
  useEffect(() => {
    isOpenMobile 
    ? document.body.style.overflow = 'hidden' 
    : document.body.style.overflow = 'visible'

    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [isOpenMobile])
  return (
    <header className="sticky top-0 z-20 bg-lightBlue">
      <div className="flex justify-between items-center py-3.5 px-3.5 max-w-[1440px] mx-auto md:gap-4 lg:gap-0 ">
        <a href="#">
          <img className="w-11 lg:w-full" src={logo} alt="logo" />
        </a>
        <HeaderDesktop menuRef={menuRef} toggleMenu={toggleMenu} isOpen={isOpen} />
        <button className="md:hidden text-xs py-2.5 px-6 rounded-[20px] border-[1px] border-black">
          Підтримати проєкт
        </button>
        <div className="cursor-pointer md:hidden">
          {
            isOpenMobile ? <IconClose onClick={toggleMobile} /> : <IconBurgerMenu onClick={toggleMobile} />
          }
        </div>
        <HeaderMobile isOpenMobile={isOpenMobile} isOpen={isOpen} toggleMenu={toggleMenu} />
      </div>
    </header>
  );
};

export default Header;
