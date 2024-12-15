import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";

const Login = () => {
  const { signInAuth, setUser } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    signInAuth(email, password)
      .then((user) => {
        setUser(user.user), navigate(location?.state ? location?.state : "");
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="hero mt-16">
      <div className="card bg-base-100 w-full max-w-sm shrink-0">
        <h1 className="text-3xl font-bold text-center mb-2">লগইন করুন</h1>
        <form onSubmit={handleLogin} className="card-body">
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
            <label className="mt-2">
              পাসওয়ার্ড ভুলে গেছেন? {""}
              <Link
                to="/auth/forgot-password"
                href="/forgot-password"
                className="text-blue-500 hover:underline"
              >
                পাসওয়ার্ড রিসেট করুন
              </Link>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-blue-500 text-white">লগইন করুন</button>
          </div>
          <p className="text-center">
            নতুন অ্যাকাউন্ট?{" "}
            <Link to="/auth/register" className="text-blue-500 hover:underline">
              রেজিস্টার করুন
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
