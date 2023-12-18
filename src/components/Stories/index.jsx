import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import StoriesDesktop from "./StoriesDesktop";
import StoriesMobile from "./StoriesMobile";

const Stories = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isDesktop = useMediaQuery({ query: "(min-width: 390px)" }); 
  const isMobile = useMediaQuery({ query: "(max-width: 390px)" });

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div>
      {isDesktop && !isMobile && <StoriesDesktop />}
      {isMobile && <StoriesMobile isOpenMobile={isMobileMenuOpen} toggleMobileMenu={toggleMobileMenu} />}
    </div>
  );
};

export default Stories;
