"use client";
import styles from "@/styles/Appbar.module.scss";
import ShinyButton from "@/components/magicui/shiny-button";
import React from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import { useWalletModal } from "@solana/wallet-adapter-react-ui";
import { useRouter } from "next/navigation";
function Appbar() {
  const { publicKey, disconnect } = useWallet();
  const { setVisible } = useWalletModal();
  const router = useRouter();
  const handleWalletAction = () => {
    if (publicKey) {
      disconnect();
      router.push("/");
    } else {
      setVisible(true);
    }
  };

  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>zenpay.club</div>
      <div onClick={handleWalletAction}>
        <ShinyButton
          className="border-2 rounded-xl"
          text={
            publicKey
              ? `${publicKey.toBase58().slice(0, 4)}...${publicKey
                  .toBase58()
                  .slice(-4)}`
              : "connect wallet"
          }
        />
      </div>
    </div>
  );
}

export default Appbar;
