import axios from "axios";
import JobCard from "./JobCard";
import { useState } from "react";

const OurJobs = () => {
  const [jobs, setJobs] = useState([]);
  axios
    .get(`${import.meta.env.VITE_JOB_API}/jobs`)
    .then((res) => setJobs(res.data))
    .catch((err) => console.log(err));
  return (
    <div>
      <div className="text-center">
        <h1 className="text-5xl font-bold">আমাদের চাকরি</h1>
        <p className="text-base opacity-80 w-1/2 mx-auto mt-4">
          আপনার দক্ষতা অভিজ্ঞতা এবং আগ্রহের ভিত্তিতে সেরা চাকরি খুঁজে পান এবং
          আমাদের প্ল্যাটফর্মের মাধ্যমে আপনার ক্যারিয়ারকে পরবর্তী স্তরে নিয়ে
          যান।
        </p>
      </div>
      <div className="mx-auto w-11/12 mt-8 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
        {jobs.map((job) => (
          <JobCard key={job._id} job={job}></JobCard>
        ))}
      </div>
    </div>
  );
};

export default OurJobs;
