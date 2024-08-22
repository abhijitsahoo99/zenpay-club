import styles from "@/styles/Home.module.scss";
import Meteors from "@/components/magicui/meteors";
import ShimmerButton from "@/components/magicui/shimmer-button";

const zenpay: React.FC = () => {
  return (
    <>
      <div className="fixed top-0 left-0">
        <Meteors number={30} />
      </div>
      <div className={styles.home}>
        <div className={styles.landing_left}>
          <p className={styles.description_lg}>
            all in one solana payment aggregator
          </p>
          <p className={styles.description_sm}>
            powered by solana network, zenpay is your one stop gateway for
            receiving payments in crypto
          </p>
          <div className={styles.shimmer_button_container}>
            <ShimmerButton className={styles.shimmer_button}>
              <span className={styles.button_text}>get started</span>
            </ShimmerButton>
          </div>
        </div>
        <div className={styles.landing_right}>
          <p className={styles.description_r_lg}>
            do you still ask this long 93pAs**********hXJQS1Kr wallet address to
            send crypto?
          </p>
          <p className={styles.description_r_sm}>
            well, no more. with zenpay you can do that with just a link
          </p>
        </div>
      </div>
    </>
  );
};
export default zenpay;
