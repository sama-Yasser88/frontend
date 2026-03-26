import React from "react";
import { useForm } from "react-hook-form";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // هنا ممكن تعمل API call مثل axios.post("/login", data)
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100" style={{ backgroundColor: "#f8f9fa" }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-10 col-md-6 col-lg-4">
            <div className="card shadow p-4" style={{ borderRadius: "12px" }}>
              <h3 className="text-center mb-3">Login</h3>
              <p className="text-center text-muted" style={{ fontSize: "14px" }}>
                Please login using your account details below.
              </p>

              <form onSubmit={handleSubmit(onSubmit)}>
                {/* Email */}
                <div className="mb-3">
                  <input
                    type="email"
                    placeholder="Email Address"
                    className={`form-control ${errors.email ? "is-invalid" : ""}`}
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^\S+@\S+$/i,
                        message: "Invalid email format",
                      },
                    })}
                  />
                  {errors.email && (
                    <div className="invalid-feedback">{errors.email.message}</div>
                  )}
                </div>

                {/* Password */}
                <div className="mb-2">
                  <input
                    type="password"
                    placeholder="Password"
                    className={`form-control ${errors.password ? "is-invalid" : ""}`}
                    {...register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 6,
                        message: "Minimum 6 characters",
                      },
                    })}
                  />
                  {errors.password && (
                    <div className="invalid-feedback">{errors.password.message}</div>
                  )}
                </div>

                <div className="mb-3 text-end">
                  <a href="#" className="text-muted" style={{ fontSize: "13px" }}>
                    Forgot your password?
                  </a>
                </div>

                <button
                  type="submit"
                  className="btn w-100 text-white"
                  style={{
                    backgroundColor: "#FB2E86",
                    borderRadius: "8px",
                    padding: "10px",
                    fontWeight: "bold",
                  }}
                >
                  Sign In
                </button>
              </form>

              <p className="text-center mt-3" style={{ fontSize: "13px" }}>
                Don't have an account?{" "}
                <a href="#" className="text-dark fw-bold">
                  Create one
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;