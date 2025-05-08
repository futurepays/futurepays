import React, { useEffect, useState } from "react";
import styles from '../components/investment/investment.module.css';
import UserDetails from "../components/investment/UserDetails";
import DirectReferral from "../components/investment/DirectReferral";
import DesktopMenu from "../components/investment/DesktopMenu";
import NavBar from "../components/investment/NavBar";
import EditProfile from "../components/investment/EditProfile";

const UserProfile = () => {
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  const [isEditingProfile, setIsEditingProfile] = useState(false); // New state

  useEffect(() => {
    const handleResize = () => setViewportWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <NavBar />
      <div className={styles.wrapper}>
        <div className={styles.deskLayout}>
          {!isEditingProfile && viewportWidth > 1023 && (
            <div className={styles.card}>
              <DesktopMenu />
            </div>
          )}
          <div className={styles.deskContentLayout}>
            <div className={styles.card}>
              {isEditingProfile ? (
                <EditProfile onClose={() => setIsEditingProfile(false)} />
              ) : (
                <>
                  <UserDetails onEditProfile={() => setIsEditingProfile(true)} />
                  <DirectReferral />
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
