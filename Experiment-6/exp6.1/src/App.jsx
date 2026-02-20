import { useState } from 'react'
import './App.css'

function App() {
  const initialFormState = {
    firstName: '',
    lastName: '',
    dob: '',
    gender: '',
    skills: [],
    address: '',
    state: ''
  };

  const [formData, setFormData] = useState(initialFormState);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox') {
      setFormData((prevData) => {
        let updatedSkills = [...prevData.skills];
        if (checked) {
          updatedSkills.push(value);
        } else {
          updatedSkills = updatedSkills.filter((skill) => skill !== value);
        }
        return { ...prevData, skills: updatedSkills };
      });
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const alertMessage = `
      Form Submitted Successfully!
      ---------------------------
      First Name: ${formData.firstName}
      Last Name: ${formData.lastName}
      Date of Birth: ${formData.dob}
      Gender: ${formData.gender}
      Skills: ${formData.skills.join(', ') || 'None selected'}
      Address: ${formData.address}
      State: ${formData.state}
    `;
    
    alert(alertMessage);
  };

  const handleCancel = () => {
    setFormData(initialFormState);
  };

  return (
    <div className="form-container">
      <h2>User Registration Form</h2>
      <form onSubmit={handleSubmit}>
        
        <div className="form-group">
          <label>First Name:</label>
          <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Last Name:</label>
          <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Date of Birth:</label>
          <input type="date" name="dob" value={formData.dob} onChange={handleChange} required />
        </div>

        {/* Note the added 'row-layout' class here to put the label inline with the buttons */}
        <div className="form-group row-layout">
          <label>Gender:</label>
          <div className="inline-group">
            <label>
              <input type="radio" name="gender" value="Male" checked={formData.gender === 'Male'} onChange={handleChange} required /> Male
            </label>
            <label>
              <input type="radio" name="gender" value="Female" checked={formData.gender === 'Female'} onChange={handleChange} required /> Female
            </label>
          </div>
        </div>

        <div className="form-group">
          <label>Skills:</label>
          <div className="inline-group">
            <label>
              <input type="checkbox" name="skills" value="React" checked={formData.skills.includes('React')} onChange={handleChange} /> React
            </label>
            <label>
              <input type="checkbox" name="skills" value="Python" checked={formData.skills.includes('Python')} onChange={handleChange} /> Python
            </label>
            <label>
              <input type="checkbox" name="skills" value="Machine Learning" checked={formData.skills.includes('Machine Learning')} onChange={handleChange} /> Machine Learning
            </label>
            <label>
              <input type="checkbox" name="skills" value="C++" checked={formData.skills.includes('C++')} onChange={handleChange} /> C++
            </label>
          </div>
        </div>

        <div className="form-group">
          <label>Address:</label>
          <textarea name="address" value={formData.address} onChange={handleChange} rows="3" required></textarea>
        </div>

        <div className="form-group">
          <label>State:</label>
          <select name="state" value={formData.state} onChange={handleChange} required>
            <option value="" disabled>Select a state</option>
            <option value="Delhi">Delhi</option>
            <option value="Maharashtra">Haryana</option>
            <option value="Karnataka">Punjab</option>
            <option value="Tamil Nadu">Himachal Pradesh</option>
            <option value="Uttar Pradesh">Uttar Pradesh</option>
            <option value="Uttar Pradesh">Bihar</option>
            <option value="Uttar Pradesh">Jharkhand</option>
            <option value="Uttar Pradesh">Rajasthan</option>
            <option value="Uttar Pradesh">Uttrakhand</option>
            <option value="Uttar Pradesh">Kerala</option>
            <option value="Uttar Pradesh">Tamol Nadu</option>
            <option value="Uttar Pradesh">Gujarat</option>
          </select>
        </div>

        <div className="button-group">
          <button type="submit">Submit</button>
          <button type="button" onClick={handleCancel}>Cancel</button>
        </div>
        
      </form>
    </div>
  )
}

export default App