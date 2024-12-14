import JobCard from "./JobCard";

const OurJobs = () => {
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
          <div className="mt-8">
              <JobCard></JobCard>
          </div>
    </div>
  );
};

export default OurJobs;
