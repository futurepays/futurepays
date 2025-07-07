import React, { useEffect, useState } from "react";
import styles from "../components/investment/investment.module.css";
import UserDetails from "../components/investment/UserDetails";
import DirectReferral from "../components/investment/DirectReferral";
import DesktopMenu from "../components/investment/DesktopMenu";
import NavBar from "../components/investment/NavBar";
import EditProfile from "../components/investment/EditProfile";
import GlobalTables from "../components/investment/GlobalTables";
import MobileMenu from "../components/investment/MobileMenu";
import Rewards from "../components/investment/Rewards";

const WealthProfile = () => {
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState("User Profile");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => setViewportWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <NavBar onMenuToggle={() => setIsMenuOpen(true)} />
      <div className={styles.wrapper}>
        <div className={styles.deskLayout}>
          {!isEditingProfile && (
            <div>
              {viewportWidth < 1023 ? (
                <MobileMenu
                  isOpen={isMenuOpen}
                  closeMenu={() => setIsMenuOpen(false)}
                  selected={selectedMenu}
                  setSelected={setSelectedMenu}
                /> ) : ( <DesktopMenu selected={selectedMenu} setSelected={setSelectedMenu} />
              )}
            </div>
          )}

          <div className={styles.deskContentLayout}>
            <div className={styles.card}>
              {isEditingProfile ? (
                <EditProfile onClose={() => setIsEditingProfile(false)} />
              ) : (
                <>
                  {selectedMenu === "User Profile" && (
                    <>
                      <UserDetails onEditProfile={() => setIsEditingProfile(true)} />
                      <DirectReferral />
                    </>
                  )}
                  {selectedMenu === "Global" && <GlobalTables />}
                  {selectedMenu === "Rewards" && <Rewards />}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WealthProfile;
