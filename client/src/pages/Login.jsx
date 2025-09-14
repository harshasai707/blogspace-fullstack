import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import API from '../api';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/auth/login", { email, password });
      localStorage.setItem("token", res.data.token);
      navigate("/");
    } catch (err) {
      alert(err.response?.data?.error || "Login failed");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-2xl p-8">
        <div className="text-center mb-6">
          <Link to="/" className="text-2xl font-bold text-blue-600 block mb-2">
            BlogSpace
          </Link>
          <h2 className="text-2xl font-semibold">Welcome back</h2>
          <p className="text-gray-500 text-sm">Enter your credentials to access your account</p>
        </div>
        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              className="w-full px-4 h-11 border rounded-md focus:ring-2 focus:ring-blue-300"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Password</label>
            <input
              type="password"
              className="w-full px-4 h-11 border rounded-md focus:ring-2 focus:ring-blue-300"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="w-full h-11 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            Login
          </button>
        </form>
        <div className="text-center text-sm mt-4">
          Don&apos;t have an account?{" "}
          <Link to="/signup" className="text-blue-600 hover:underline font-medium">Sign up</Link>
        </div>
      </div>
    </div>
  );
}
