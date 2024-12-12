import { Link } from "react-router-dom";

const Register = () => {
  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
      const password = e.target.password.value;
      console.log(email, password)
  };
  return (
    <div className="hero mt-16">
      <div className="card bg-base-100 w-full max-w-sm shrink-0">
        <h1 className="text-3xl font-bold text-center mb-2">রেজিস্টার করুন</h1>
        <form onSubmit={handleRegister} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">ইমেইল</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="আপনার ইমেইল দিন"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">পাসওয়ার্ড</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="আপনার পাসওয়ার্ড দিন"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-blue-500 text-white">
              {" "}
              রেজিস্টার করুন
            </button>
          </div>
          <p className="text-center">
            ইতিমধ্যে অ্যাকাউন্ট আছে?{" "}
            <Link to="/auth/login" className="text-blue-500 hover:underline">
              লগইন করুন
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
