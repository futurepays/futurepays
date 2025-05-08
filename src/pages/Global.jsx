import React, { useEffect, useState } from "react";
import styles from '../components/investment/investment.module.css';
import NavBar from "../components/investment/NavBar";
import DesktopMenu from "../components/investment/DesktopMenu";
import GlobalTables from "../components/investment/GlobalTables";

const Global = () => {
    const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
            
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
                {viewportWidth > 1023 && <div className={styles.card}>
                    <DesktopMenu />
                </div>}
                <div className={styles.deskContentLayout}>
                    <div className={styles.card}>
                        <GlobalTables />
                    </div>
                </div>
            </div>
        </div>
    </>
  );
};

export default Global;
