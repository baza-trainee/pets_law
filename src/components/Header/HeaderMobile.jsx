import { useState } from "react";
import IconArrow from "../common/icons/IconArrow";
import { useEffect } from "react";
const HeaderMobile = ({ toggleMobile }) => {
  const [isOpen, setOpen] = useState(false);
  const toggleDropDownMenu = () => {
    setOpen(!isOpen);
  };
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "visible";
    };
  }, []);
  return (
    <nav
      id="mobile_menu"
      className="absolute top-[100%] overflow-y-visible bg-lightBlack/[.6] left-0 z-20 w-full h-screen"
    >
      <div className=" h-full overflow w-[90%] mx-auto">
        <ul className="relative pb-[90px] mx-auto">
          <ListItem onClick={toggleMobile} link="" text="Головна" />
          <li className="mx-auto w-[98%] my-[30px]">
            <a onClick={toggleDropDownMenu} className="btn btn-white h-[42px] ">
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

          {/* <li className="mx-auto w-[98%] my-[30px]">
                        <a className="btn btn-white h-[42px] ">
                            Контакти
                        </a>
                    </li> */}

          <li className="mx-auto w-[98%] mt-[60px] btn btn-orange">
            Підтримати проєкт
          </li>
        </ul>
      </div>
    </nav>
  );
};

const ListItem = ({ text, link, onClick }) => {
  return (
    <li onClick={onClick} className="mx-auto w-[98%] my-[30px]">
      <a href={`#${link}`} className="btn btn-white h-[42px] ">
        {text}
      </a>
    </li>
  );
};

export default HeaderMobile;
