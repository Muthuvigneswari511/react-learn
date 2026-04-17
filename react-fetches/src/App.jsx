import { useEffect, useState } from "react";
import axios from "axios";
import ContactForm from "./ContactForm";

function App() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [selectedUserId, setSelectedUserId] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);

  
  const fetchContacts = async () => {
    setLoading(true);
    setError("");

    try {
      const response = await axios.get("http://localhost:3000/contacts");
      setContacts(response.data);
    } catch (err) {
      setError("Failed to fetch contacts");
    } finally {
      setLoading(false);
    }
  };


  useEffect(() => {
    fetchContacts();
  }, []);

  const handleUserSelect = (user) => {
    setSelectedUserId(user.id);
    setSelectedUser(user);
  };

  return (
    <div>
      <h2>Contacts</h2>

      {loading && <p>Loading contacts...</p>}


      {error && <p style={{ color: "red" }}>{error}</p>}

      
      <ul>
        {contacts.map((contact) => (
          <li
            key={contact.id}
            onClick={() => handleUserSelect(contact)}
            style={{
              cursor: "pointer",
              fontWeight:
                selectedUserId === contact.id ? "bold" : "normal",
            }}
          >
            {contact.name} - {contact.email}
          </li>
        ))}
      </ul>

      {selectedUser && (
        <ContactForm
          selectedUser={selectedUser}
          onFormSubmit={fetchContacts}
        />
      )}
    </div>
  );
}

export default App;