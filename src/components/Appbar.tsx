import styles from "@/styles/Appbar.module.scss";
import React from "react";

function Appbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>zenpay.club</div>
      <div className={styles.walletbtn}>
        <button>connect wallet</button>
      </div>
    </div>
  );
}

export default Appbar;
