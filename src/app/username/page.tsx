import styles from "@/styles/Username.module.scss";
const payUser = () => {
  return (
    <div className={styles.main}>
      <div className={styles.left}>
        <p className={styles.desc_lg}>zenpay.club</p>
        <p className={styles.desc_sm}>all in one payment solana aggregator</p>
      </div>
      <div className={styles.right}>
        <div className={styles.paraContainer}>
          <p className={styles.desc_lg}>you are paying, justabhi99</p>
          <p className={styles.desc_sm}>hey, welcome to my zenpay link</p>
        </div>
        <div className={styles.pay}>
          <button className={styles.btn}>solana pay</button>
        </div>
        <p className={styles.pay_b}>pay with browser</p>
        <div className={styles.pay}>
          {["sol", "payusdc", "usdc", "usdt", "bonk"].map((token) => (
            <div key={token}>
              <button className={styles.btn}>{token}</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default payUser;
