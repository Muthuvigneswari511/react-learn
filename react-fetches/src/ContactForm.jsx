import { useState } from "react";
import axios from "axios";

const ContactForm = ({ selectedUser, onFormSubmit }) => {
  const [email, setEmail] = useState(selectedUser?.email || "");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setSuccess("");
    setError("");

    try {
    
      const putRequest = axios.put(
        `http://localhost:3000/contacts/${selectedUser.id}`,
        { email: email }
      );


      const postRequest = axios.post("http://localhost:3000/logs", {
        message: "Email updated",
      });

  
      const [putRes, postRes] = await Promise.all([
        putRequest,
        postRequest,
      ]);

      setSuccess("Email updated successfully!");
      onFormSubmit(); 
    } catch (err) {
      setError("Failed to update email");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      
      {loading && <p>Loading...</p>}

   
      {success && <p style={{ color: "green" }}>{success}</p>}

      
      {error && <p style={{ color: "red" }}>{error}</p>}

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Update Email</button>
      </form>
    </div>
  );
};

export default ContactForm;