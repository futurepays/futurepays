import React, { useEffect, useState } from "react";
import "../ecommerce/profile.css"
import Logo from "../../assets/logo.svg"
import LogoText from "../../assets/logo-text-white.svg"
import Menu from "../../assets/menu.svg"
import MobileMenu from "./MobileMenu";
import WealthToggle from "../WealthToggle";

const NavBar = ({ onMenuToggle }) => {
    const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
    // const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => setViewportWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

//   const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  return (
    <>
        <div className="nav-container inv-nav-container">
            <div className="nav-logo-container">
                <img src={Logo} className="nav-logo-img" alt="Future Pays Logo" />
                <img src={LogoText} className="nav-logo-text" alt="Future Pays Logo Text" />
            </div>
            <div className="nav-profile-container">
                <div className="nav-toggle">
                    <WealthToggle />
                </div>
                {viewportWidth < 1024 && <div className="nav-notify"  onClick={onMenuToggle}>
                    <img src={Menu} alt="Menu"  />
                </div>}
            </div>
        </div>

        {/* <MobileMenu isOpen={isMenuOpen} closeMenu={() => setIsMenuOpen(false)} /> */}
    </>
  )
};

export default NavBar;
