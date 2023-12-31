import { useState } from "react";

import HeaderDesktop from "./HeaderDesktop";
import HeaderMobile from "./HeaderMobile.jsx";
import { IconBurgerMenu } from "../common/icons/IconBurgerMenu.jsx";
import { IconClose } from "../common/icons/IconClose.jsx";
import logo from "/logo.svg";
import ButtonDonate from "../common/ButtonDonate";
const Header = () => {
  const [isOpenMobile, setIsOpenMobile] = useState(false)
  const toggleMobile = () => {
    setIsOpenMobile(!isOpenMobile)
  }
  return (
    <header className="sticky top-0 z-50 bg-lightBlue">
      <div className="flex justify-between items-center py-3.5 px-3.5 max-w-[1440px] mx-auto md:gap-4 lg:gap-0 ">
        <a href="#">
          <img className="w-11 lg:w-full" src={logo} alt="logo" />
        </a>
        <HeaderDesktop />
        <ButtonDonate className="btn-support-header-m" />
        <div onClick={toggleMobile} className="cursor-pointer md:hidden">
          {
            isOpenMobile ? <IconClose /> : <IconBurgerMenu />
          }
        </div>
        {isOpenMobile && <HeaderMobile toggleMobile={toggleMobile} />}
        
      </div>
    </header>
  );
};

export default Header;
