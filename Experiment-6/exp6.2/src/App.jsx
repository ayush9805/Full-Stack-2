import { useState } from 'react'
import './App.css'

function App() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({
    email: '',
    password: ''
  });

  // New state to track password visibility
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const validateForm = () => {
    let isValid = true;
    let newErrors = { email: '', password: '' };

    const emailRegex = /^[a-zA-Z0-9_]+@[a-zA-Z0-9-]+\.(com|in|[a-zA-Z]{2,3})$/i;
    if (!formData.email) {
      newErrors.email = "Email is required.";
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email containing '@' and ending with .com, .in, etc.";
      isValid = false;
    }

    if (!formData.password) {
      newErrors.password = "Password is required.";
      isValid = false;
    } else {
      const startsWithCapital = /^[A-Z]/.test(formData.password);
      const hasNumber = /[0-9]/.test(formData.password);
      const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(formData.password);
      const isLongEnough = formData.password.length >= 5;

      if (!startsWithCapital) {
        newErrors.password = "Password must start with a capital letter.";
        isValid = false;
      } else if (!hasNumber) {
        newErrors.password = "Password must contain at least one number.";
        isValid = false;
      } else if (!hasSpecial) {
        newErrors.password = "Password must contain at least one special character.";
        isValid = false;
      } else if (!isLongEnough) {
        newErrors.password = "Password must have at least 5 characters.";
        isValid = false;
      }
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert(`Form Submitted Successfully!\nEmail: ${formData.email}`);
    }
  };

  // Toggle function for the eye button
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="form-container">
      <h2> Log in  </h2>
      <form onSubmit={handleSubmit} noValidate>
        
        <div className="form-group">
          <label>Email ID:</label>
          <input 
            type="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            placeholder="example@domain.com"
            className={errors.email ? 'input-error' : ''}
          />
          {errors.email && <span className="error-text">{errors.email}</span>}
        </div>

        <div className="form-group">
          <label>Password:</label>
          {/* Wrapper for input and eye button */}
          <div className="password-wrapper">
            <input 
              // Dynamically change type between text and password
              type={showPassword ? "text" : "password"} 
              name="password" 
              value={formData.password} 
              onChange={handleChange} 
              placeholder="Enter password"
              className={errors.password ? 'input-error' : ''}
            />
            {/* The Eye Button */}
           {/* The Professional SVG Eye Button */}
            <button 
              type="button" 
              className="toggle-password-btn" 
              onClick={togglePasswordVisibility}
              title={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? (
                // Crossed-out eye icon (Hide)
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                  <line x1="1" y1="1" x2="23" y2="23"></line>
                </svg>
              ) : (
                // Open eye icon (Show)
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
              )}
            </button>
          </div>
          {errors.password && <span className="error-text">{errors.password}</span>}
        </div>

        <div className="button-group">
          <button type="submit" className="submit-btn">Submit</button>
        </div>
        
      </form>
    </div>
  )
}

export default App