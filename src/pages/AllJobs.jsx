import { useLoaderData } from "react-router-dom";
import JobCard from "../components/JobCard";

const AllJobs = () => {
  const jobs = useLoaderData();
  return (
    <div>
      <div>
        <h1 className="text-4xl font-bold text-center">সকল চাকরি</h1>
        <p className="text-center lg:w-2/4 mx-auto mt-4 opacity-80">
          আপনার দক্ষতা অভিজ্ঞতা এবং আগ্রহের ভিত্তিতে সেরা চাকরি খুঁজে পান এবং
          আমাদের প্ল্যাটফর্মের মাধ্যমে আপনার ক্যারিয়ারকে পরবর্তী স্তরে নিয়ে
          যান।
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
        {jobs.map((job) => (
          <JobCard job={job} key={job._id}></JobCard>
        ))}
      </div>
    </div>
  );
};

export default AllJobs;
