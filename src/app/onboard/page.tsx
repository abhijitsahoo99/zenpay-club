import styles from "@/styles/Home.module.scss";
import ShimmerButton from "@/components/magicui/shimmer-button";
const onboard = () => {
  return (
    <div className={styles.home}>
      <div className={styles.landing_left}>
        <p className={styles.description_lg}>
          congratulation ! you are almost there
        </p>
        <p className={styles.description_sm}>
          get your unique username to get started
        </p>
      </div>
      <div className={styles.landing_right}>
        <label className="block mb-2 text-2xl font-medium text-gray-900 dark:text-white">
          Username
        </label>
        <div className="flex">
          <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 border-e-0 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
            </svg>
          </span>
          <input
            type="text"
            id="website-admin"
            className="rounded-lg rounded-e-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="kiratsingh"
          />
        </div>
        <div className={styles.shimmer_button_container}>
          <ShimmerButton className={styles.shimmer_button}>
            <span className={styles.button_text}>next</span>
          </ShimmerButton>
        </div>
      </div>
    </div>
  );
};

export default onboard;
