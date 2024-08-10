import styles from "@/styles/Home.module.scss";
import Meteors from "@/components/magicui/meteors";
import ShimmerButton from "@/components/magicui/shimmer-button";

// export default function Home() {
//   return (
//     <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
//       <Meteors number={30} />
//       <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
//         <div className={styles.landing}>
//           <h1>zenpay</h1>
//           <p>all in one payment aggregator</p>
//           <div className="z-10 flex min-h-[16rem] items-center justify-center">
//             <ShimmerButton className="shadow-2xl">
//               <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
//                 get started
//               </span>
//             </ShimmerButton>
//           </div>
//         </div>
//       </span>
//     </div>
//   );
// }

const zenpay: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="fixed top-0 left-0">
        <Meteors number={50} />
      </div>
      <div className="flex justify-center items-center ">
        <div className=" flex flex-col items-center">
          <p className="text-center text-5xl font-black text-bold">zenpay</p>
          <p className="mt-3 text-lg">all in one payments aggregator</p>

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
