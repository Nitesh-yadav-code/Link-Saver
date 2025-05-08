import React, { useState } from "react";
import supabase from "../supabaseClient";
import { Link, useNavigate } from "react-router-dom";

 function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setMessage("");

    const {data, error} = await supabase.auth.signInWithPassword({
      email: email,
      password: password, 
    })

    if(error) {
      setMessage(error.message);
      return;
    }

    if (data && data.user) {
      const { user, session } = data;
      setMessage("Login Successful");
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("uid", user.id);
      localStorage.setItem("access_token", session.access_token);
      localStorage.setItem("email", user.email);
      console.log(user.id);
      console.log("access_token", session.access_token)
      navigate("/dashboard");
    } else {
      setMessage("Login failed. Please check your credentials.");
    }

   
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900  p-4">
          
      
          <div className="w-full max-w-md relative">
           
      
            <div className="bg-gray-900  shadow-xl rounded-2xl p-8 ">
              <div className="text-center mb-8">
                <h2 className="text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Welcome back
                </h2>
                <p className="text-slate-100 text-xl mt-2">Enter your credentials to access your account</p>
              </div>
      
              {message && (
                <div
                  className={`mb-4 p-3 rounded-lg text-sm ${
                    message.includes("successfully")
                      ? "bg-green-50 text-green-500 border border-green-100"
                      : "bg-red-50 text-red-500 border border-red-100"
                  }`}
                >
                  {message}
                </div>
              )}
      
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-200 mb-1">
                    Email
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                        />
                      </svg>
                    </div>
                    <input
                      id="email"
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                      type="email"
                      placeholder="you@example.com"
                      required
                      className="w-full rounded-md border pl-10 border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                    />
                  </div>
                </div>
      
               
                  <label htmlFor="password" className="block text-sm font-medium text-slate-200 mb-1">
                    Password
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                        />
                      </svg>
                    </div>
                    <input
                      id="password"
                      onChange={(e) => setPassword(e.target.value)}
                      value={password}
                      type="password"
                      placeholder="••••••••"
                      required
                      className="w-full pl-10 rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                    />
                  </div>
      
                 
      
                
                <button
                  type="submit"
                  className="w-full inline-flex h-12 items-center justify-center rounded-md bg-blue-500 px-6 text-base font-medium text-white shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                    
                      Log in
                   
                </button>
              </form>
      
              <div className="mt-8 text-center">
                <span className="text-gray-600 text-sm">Don't have an account? </span>
                <Link to="/signup" className="text-indigo-600 font-medium hover:text-indigo-500 transition-all duration-200">
                Sign up
                </Link> 
              </div>
      
              
            </div>
      
            
          </div>
        </div>
  )
}

export default Login;