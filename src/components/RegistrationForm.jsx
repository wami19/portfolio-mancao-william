import React, { useState } from "react";
 
function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    birthday: "",
    age: "",
    address: "",
  });
 
  const handleChange = (e) => {
    const { name, value } = e.target;
 
    // If birthday changes, calculate age
    if (name === "birthday") {
      const age = calculateAge(value);
      setFormData({ ...formData, birthday: value, age });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };
 
  const calculateAge = (dob) => {
    const birthDate = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };
 
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert(`Welcome, ${formData.name}! You are ${formData.age} years old.`);
  };
 
  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <h2>Registration Form</h2>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        required
        style={styles.input}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        required
        style={styles.input}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
        required
        style={styles.input}
      />
      <input
        type="date"
        name="birthday"
        value={formData.birthday}
        onChange={handleChange}
        required
        style={styles.input}
      />
      <input
        type="text"
        name="age"
        placeholder="Age"
        value={formData.age}
        readOnly
        style={{ ...styles.input, backgroundColor: "#dda1a1ff" }}
        backgroundColor
      />
      <input
        type="text"
        name="address"
        placeholder="Address"
        value={formData.address}
        onChange={handleChange}
        required
        style={styles.input}
      />
      <button type="submit" style={styles.button}>
        Submit
      </button>
    </form>
  );
}
 
const styles = {
  form: {
    maxWidth: "350px",
    margin: "auto",
    padding: "1rem",
    border: "1px solid #ccc",
    borderRadius: "8px",
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
  },
  input: {
    padding: "0.5rem",
    fontSize: "1rem",
  },
  button: {
    padding: "0.5rem",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
  },
};
 
export default RegistrationForm;