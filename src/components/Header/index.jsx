import { useState } from "react";

import HeaderDesktop from "./HeaderDesktop";
import HeaderMobile from "./HeaderMobile.jsx";
import { IconBurgerMenu } from "../common/icons/IconBurgerMenu.jsx";
import { IconClose } from "../common/icons/IconClose.jsx";
import logo from "/logo.svg";
import { useEffect } from "react";

const Header = () => {
  const [isOpenMobile, setIsOpenMobile] = useState(false)
  const toggleMobile = () => {
    setIsOpenMobile(!isOpenMobile)
  }
  
  useEffect(() => {
    isOpenMobile 
    ? document.body.style.overflow = 'hidden' 
    : document.body.style.overflow = 'visible'
  }, [isOpenMobile])
  return (
    <header className="sticky top-0 z-50 bg-lightBlue">
      <div className="flex justify-between items-center py-3.5 px-3.5 max-w-[1440px] mx-auto md:gap-4 lg:gap-0 ">
        <a href="#">
          <img className="w-11 lg:w-full" src={logo} alt="logo" />
        </a>
        <HeaderDesktop />
        <button className="md:hidden text-xs py-2.5 px-6 rounded-[20px] border-[1px] border-black">
          Підтримати проєкт
        </button>
        <div onClick={toggleMobile} className="cursor-pointer md:hidden">
          {
            isOpenMobile ? <IconClose /> : <IconBurgerMenu />
          }
        </div>
        <HeaderMobile isOpenMobile={isOpenMobile} />
      </div>
    </header>
  );
};

export default Header;
