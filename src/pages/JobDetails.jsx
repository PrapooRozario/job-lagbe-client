import { useLoaderData } from "react-router-dom";

const JobDetails = () => {
  const loader = useLoaderData();
  const {
    title,
    location,
    jobType,
    category,
    description,
    applicationDeadline,
    salaryRange,
    company,
    requirements,
    responsibilities,
    hr_email,
    hr_name,
    company_logo,
  } = loader;
  return (
    <div className="font-poppins">
      <h1 className="text-4xl font-semibold">{title}</h1>
      <p className="mt-4">{description}</p>
      <p className="px-4 mt-4 text-sm bg-gray-200 w-fit rounded-full">
        {category}
      </p>
      <div className="opacity-80 space-y-2 py-4">
        <p>
          Job Type : <span>{jobType}</span>
        </p>
        <p>
          Deadline : <span>{applicationDeadline}</span>
        </p>
        <div className="flex items-center gap-2">
          Salary :
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
      <div className="flex items-center gap-4">
        {requirements.map((r) => (
          <div className="bg-gray-200 px-4 rounded-full">{r}</div>
        ))}
      </div>
      <div className="my-4">
        {responsibilities.map((r) => (
          <li>{r}</li>
        ))}
      </div>
      <div className="mt-4">
        <div className="flex items-center gap-2 mb-4">
          <img
            src={company_logo}
            alt="avatar"
            className="relative inline-block h-12 w-12 !rounded-full  object-cover object-center"
          />
          <div>
            <h1>{company}</h1>
            <p className="opacity-70">{location}</p>
          </div>
        </div>
        <div className="flex gap-4">
          <input
            value={hr_name}
            class="w-fit bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
          />
         
          <input
            value={hr_email}
            class="w-fit bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
          />
        </div>
      </div>
    </div>
  );
};

export default JobDetails;