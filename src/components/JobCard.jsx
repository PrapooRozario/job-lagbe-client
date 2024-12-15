import { CiClock2, CiLocationOn, CiWallet } from "react-icons/ci";
import { PiHourglass } from "react-icons/pi";
import { motion } from "motion/react";
import { NavLink } from "react-router-dom";
const JobCard = ({ job }) => {
  const {
    _id,
    title,
    location,
    jobType,
    category,
    description,
    applicationDeadline,
    salaryRange,
  } = job;
  return (
    <div className="font-poppins">
      <div className="hover:shadow-lg hover:shadow-blue-100 bg-white shadow-sm border border-slate-200 rounded-lg">
        <div className="p-4">
          <h5 className="mb-2 text-slate-800 text-xl font-semibold">{title}</h5>
          <div className="bg-gray-200 mb-2 w-fit text-sm text-gray-800 px-4 rounded-full">
            {category}
          </div>
          <div className="flex items-center gap-1">
            <CiLocationOn className="text-xl" />
            <p className="opacity-80">{location}</p>
          </div>
          <div className="flex items-center gap-1">
            <CiClock2 className="text-xl" />
            <p className="opacity-80">{jobType}</p>
          </div>
          <div className="flex items-center gap-1">
            <PiHourglass className="text-xl opacity-80" />
            <p className="opacity-80">{applicationDeadline}</p>
          </div>
          <div className="flex items-center gap-1">
            <CiWallet className="text-xl" />
            <div className="flex items-center gap-2 opacity-80">
              <p>
                Min: <span>{salaryRange.min}</span>
              </p>
              -
              <p>
                Max: <span>{salaryRange.max}</span>
              </p>
              <p>{salaryRange.currency.toUpperCase()}</p>
            </div>
          </div>
          <p className="text-slate-600 hover:text-black mt-4 leading-normal font-light line-clamp-2">
            {description}
          </p>
          <NavLink to={`/job/details/${_id}`}>
            <button
              className="font-hind-siliguri rounded-md bg-blue-500 py-2 px-4 mt-6 border border-transparent text-center text-sm text-white transition-all hover:bg-blue-400"
              type="button"
            >
              চাকরি দেখুন
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
