import React from "react";
import styles from "../../styles/Home.module.css";

function SideBar() {
  return (
    <div className={styles.sideBar}>
      {/* search box */}
      <div className={styles.menuBox}>
        {/* menu colappse */}
        menu
      </div>

      {/* nevigation menu */}
      <div className={styles.navBox}>
        {/* navigation menu */}
        side menu
      </div>

      {/* new task box */}
      <div className={styles.sideBarFooter}>
        {/* side bar footer */}
        icons
      </div>
    </div>
  );
}

export default SideBar;
