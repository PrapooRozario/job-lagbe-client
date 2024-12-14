import { CiClock2, CiLocationOn, CiWallet } from "react-icons/ci";
import { PiHourglass } from "react-icons/pi";

const JobCard = () => {
  return (
    <div className="font-poppins">
      <div className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96">
        <div className="p-4">
          <h5 className="mb-2 text-slate-800 text-xl font-semibold">
            Website Review Check Update from Our Team in San Francisco
          </h5>
          <div className="bg-gray-200 mb-2 w-fit text-sm text-gray-800 px-4 rounded-full">
            Web Development
          </div>
          <div className="flex items-center gap-1">
            <CiLocationOn className="text-xl" />
            <p className="opacity-80">Dhaka, Bangladesh</p>
          </div>
          <div className="flex items-center gap-1">
            <CiClock2 className="text-xl" />
            <p className="opacity-80">Full-Time</p>
          </div>
          <div className="flex items-center gap-1">
            <PiHourglass className="text-xl opacity-80" />
            <p className="opacity-80">12/12/28</p>
          </div>
          <div className="flex items-center gap-1">
            <CiWallet className="text-xl" />
            <div className="flex items-center gap-2 opacity-80">
              <p>
                Min: <span>19000</span>
              </p>
              -
              <p>
                Max: <span>30000</span>
              </p>
              <p>BDT</p>
            </div>
          </div>

          <button
            className="font-hind-siliguri rounded-md bg-blue-500 py-2 px-4 mt-6 border border-transparent text-center text-sm text-white transition-all hover:bg-blue-400"
            type="button"
          >
            চাকরি দেখুন
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
