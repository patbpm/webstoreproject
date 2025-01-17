import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../store/slices/authSlice';

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    // Basic validation
    if (!formData.username || !formData.password) {
      setError('Please fill in all fields');
      return;
    }

    // Simulate login - In a real app, this would be an API call
    try {
      // Mock successful login
      dispatch(login({
        username: formData.username,
        id: 1,
        email: 'user@example.com'
      }));
      navigate('/');
    } catch (err) {
      setError('Invalid username or password');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2 className="text-center mb-4">Sign in to your account</h2>
          <p className="text-center">
            Or{' '}
            <Link to="/register" className="text-primary text-decoration-none">
              create a new account
            </Link>
          </p>
          <div className="card shadow-sm">
            <div className="card-body">
              {error && (
                <div className="alert alert-danger" role="alert">
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">Username</label>
                  <input
                    id="username"
                    name="username"
                    type="text"
                    required
                    value={formData.username}
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    value={formData.password}
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>

                <div className="mb-3 form-check">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="form-check-input"
                  />
                  <label htmlFor="remember-me" className="form-check-label">
                    Remember me
                  </label>
                </div>

                <div className="d-flex justify-content-between mb-3">
                  <a href="#" className="text-primary text-decoration-none">
                    Forgot your password?
                  </a>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary w-100"
                >
                  Sign in
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
