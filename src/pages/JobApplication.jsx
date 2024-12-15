import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";
import axios from "axios";

const JobApplication = () => {
  const { _id } = useLoaderData();
  const { user } = useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const portfolio_link = e.target.portfolio_link.value;
    const linkedin_link = e.target.linkedin_link.value;
    const resume_link = e.target.resume_link.value;
    const application = {
      job_id: _id,
      applicant_email: user?.email,
      portfolio_link,
      linkedin_link,
      resume_link,
    };

    axios
      .post(`${import.meta.env.VITE_JOB_API}/applications`, application)
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <div>
        <h1 className="text-4xl font-bold text-center">আবেদন তথ্য </h1>
        <p className="text-center mt-4 opacity-80">
          আপনার ক্যারিয়ারের সারসংক্ষেপ দক্ষতা ও অভিজ্ঞতা।
        </p>
      </div>
      <form
        onSubmit={handleSubmit}
        class="mt-8 mb-2 space-y-2 lg:w-2/5 md:w-2/4 mx-auto"
      >
        <div>
          <label className="text-base">পোর্টফোলিও লিঙ্ক</label>
          <input
            type="text"
            name="portfolio_link"
            required
            className="w-full mt-2 bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
            placeholder="পোর্টফোলিও লিঙ্ক"
          />
        </div>
        <div>
          <label className="text-base">লিংকডইন লিঙ্ক</label>
          <input
            type="text"
            name="linkedin_link"
            required
            className="w-full mt-2 bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
            placeholder="লিংকডইন লিঙ্ক"
          />
        </div>
        <div>
          <label className="text-base">রেজ্যুমে লিঙ্ক</label>
          <input
            type="text"
            name="resume_link"
            required
            className="w-full my-2 bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
            placeholder="রেজ্যুমে লিঙ্ক"
          />
        </div>

        <button className="rounded-md bg-blue-500 py-2 px-4 border border-transparent text-center text-sm text-white hover:bg-blue-400">
          আবেদন করুন
        </button>
      </form>
    </div>
  );
};

export default JobApplication;
