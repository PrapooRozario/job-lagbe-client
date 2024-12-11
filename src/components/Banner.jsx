import Lottie from "lottie-react";
import banner from "../assets/banner.json";
import line from "../assets/line.svg";
const Banner = () => {
  return (
    <div className="lg:flex md:flex items-center justify-center">
      <div>
        <h1 className="text-5xl text-center lg:text-left md:text-left font-bold leading-snug">
          নতুন চাকরি পাওয়ার <br /> সহজতম উপায়
        </h1>
        <p className="mt-4 text-center lg:text-left md:text-left">
          এখানেই শুরু করুন আপনার নতুন চাকরি খোঁজার পথ। <br /> আমাদের সাইটে রয়েছে
          বিভিন্ন ধরণের চাকরি যা আপনার ক্যারিয়ারের জন্য সঠিক।
        </p>
        <img
          src={line}
          className="w-40 hidden relative lg:bottom-[215px] md:bottom-[238px] sm:bottom-[238px] lg:block md:block left-[80px]"
          />
          <div className="border bg-blue-100 border-blue-200 hidden lg:block py-4 px-5 w-fit rounded-t-3xl rounded-br-3xl relative bottom-[420px] left-[300px]"> 
            <h1 className="font-medium">সেই হয়েছে!</h1>
          </div>
      </div>
      <div className="lg:w-1/2 md:lg mb-20">
        <Lottie animationData={banner} loop={true} />;
      </div>
    </div>
  );
};

export default Banner;
