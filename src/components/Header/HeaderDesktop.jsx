import IconArrow from "../common/icons/IconArrow";
import Link from "../../components/common/Link";
import { useEffect, useRef, useState } from "react";
import ButtonDonate from "../common/ButtonDonate";

const HeaderDesktop = () => {
  const [isOpen, setOpen] = useState(false);
  const menuRef = useRef(null);
  const toggleDropDownMenu = () => {
    setOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setOpen(false);
    }
  };
  useEffect(() => {
    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);
  return (
    <nav className="header">
      <ul className="header__list">
        <li className="list__item">
          <Link to="hero">
            Головна
          </Link>
        </li>
        <li className="list__item">
          <Link to="about">
            Про нас
          </Link>
        </li>
        <li className="relative" ref={menuRef}>
          <button
            className={`list__dropdown-button ${isOpen ? "text-stone-400" : ""
              }`}
            onClick={toggleDropDownMenu}
          >
            Права тварин
            <IconArrow isOpen={isOpen} />
          </button>
          <ul
            className={`
                list__dropdown-menu 
                ${isOpen
                ? "opacity-100 z-10 translate-y-0"
                : "opacity-0 pointer-events-none -translate-y-1.5"
              }`}
          >
            <li className="list__item">
              <Link to="part_1">
                1 частина
              </Link>
            </li>
            <li className="list__item">
              <Link to="part_2">
                2 частина
              </Link>
            </li>
          </ul>
        </li>
        <li className="list__item">
          <Link to="suggest">
            Поради
          </Link>
        </li>
        <li className="list__item">
          <Link to="partners">
            Партнери
          </Link>
        </li>
      </ul>
      <ButtonDonate className="btn btn-orange cursor-pointer rounded-[20px] h-[30px] text-sm leading-[13px] md:text-[18px] md:h-[44px]  md:leading-[20px]" />
    </nav>
  );
};

export default HeaderDesktop;
