import styles from "@/styles/Appbar.module.scss";
import ShinyButton from "@/components/magicui/shiny-button";
import React from "react";

function Appbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>zenpay.club</div>
      <div>
        <ShinyButton text="connect wallet" className="border-2 rounded-xl" />
      </div>
    </div>
  );
}

export default Appbar;
