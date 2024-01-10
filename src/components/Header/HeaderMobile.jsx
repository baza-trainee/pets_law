import { useState } from "react";
import IconArrow from "../common/icons/IconArrow";
import { useEffect } from "react";
import ButtonDonate from "../common/ButtonDonate";
import Link from "../common/Link";
const HeaderMobile = ({ toggleMobile }) => {
  const [isOpen, setOpen] = useState(false);
  const toggleDropDownMenu = () => {
    setOpen(!isOpen);
  };
  const handleAsideClick = (e) => {
    if(e.target === e.currentTarget || e.target === e.currentTarget.firstChild){
      toggleMobile()
    }
  }
  useEffect(() => {
    const mobileMenu = document.getElementById('mobile_menu')
    document.body.style.overflow = "hidden";
    mobileMenu.addEventListener('click', handleAsideClick)
    return () => {
      mobileMenu.removeEventListener('click', handleAsideClick)
      document.body.style.overflow = "visible";
    };
  }, []);
  return (
    <nav
      id="mobile_menu"
      className="header-mobile"
    >
      <div className="container">
        <ul className="header-mobile__list">
          <ListItem
            onClick={toggleMobile}
            link="hero"
            text="Головна"
          />
          
          <ListItem
            onClick={toggleMobile}
            link="about"
            text="Про нас"
          />
          <li className="list__item">
            <a onClick={toggleDropDownMenu} className="btn btn-white h-[42px]">
              Права тварин
              <IconArrow isOpen={isOpen} />
            </a>
            {isOpen && (
              <ul>
                <ListItem
                  onClick={toggleMobile}
                  link="part_1"
                  text="Частина 1"
                />
                <ListItem
                  onClick={toggleMobile}
                  link="part_2"
                  text="Частина 2"
                />
                <ListItem
                  onClick={toggleMobile}
                  link="part_3"
                  text="Частина 3"
                />
              </ul>
            )}
          </li>

          <ListItem onClick={toggleMobile} link="suggest" text="Поради" />

          <ListItem onClick={toggleMobile} link="partners" text="Партнери" />
          
          <ButtonDonate className='w-full h-[44px] cursor-pointer btn btn-orange' />
        </ul>
      </div>
    </nav>
  );
};

const ListItem = ({ text, link, onClick }) => {
  return (
    <li onClick={onClick} id="nav-list-item" className="list__item">
      <Link to={link} className="btn btn-white h-[42px] ">
        {text}
      </Link>
    </li>
  );
};

export default HeaderMobile;
