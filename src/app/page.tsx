import styles from "@/styles/Home.module.scss";
import Meteors from "@/components/magicui/meteors";
import ShimmerButton from "@/components/magicui/shimmer-button";

const zenpay: React.FC = () => {
  return (
    <div className={styles.home}>
      <div className="fixed top-0 left-0">
        <Meteors number={30} />
      </div>
      <div className={styles.landing}>
        <h1>zenpay</h1>
        <p>all in one payment aggregator</p>
        <div>
          <ShimmerButton className="shadow-2xl mt-3">
            <span className="whitespace-pre-wrap text-center text-base font-medium leading-none tracking-tight text-white px-0.5">
              get started
            </span>
          </ShimmerButton>
        </div>
      </div>
    </div>
  );
};
export default zenpay;

// const zenpay: React.FC = () => {
//   return (
//     <div className="flex justify-center items-center h-screen">
//       <div className="fixed top-0 left-0">
//         <Meteors number={50} />
//       </div>
// <div className="flex justify-center items-center ">
//   <div className=" flex flex-col items-center">
//     <p className="text-center text-5xl font-black text-bold">zenpay</p>
//     <p className="mt-3 text-lg">all in one payments aggregator</p>

//     <ShimmerButton className="shadow-2xl mt-3">
//       <span className="whitespace-pre-wrap text-center text-base font-medium leading-none tracking-tight text-white px-0.5">
//         get started
//       </span>
//     </ShimmerButton>
//   </div>
// </div>
//     </div>
//   );
// };

// export default zenpay;
