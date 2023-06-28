import React, { useState } from "react";
import Contact from "./components/contact";
import "./styles/App.css";
import ContactAdder from "./components/ContactAdder";

const App = () => {
  const getContacts = JSON.parse(localStorage.getItem("contacts"));

  const [contacts, setContacts] = useState(getContacts ? getContacts : []);

  const addContactData = (contactData) => {
    const allContacts = [contactData, ...contacts];
    setContacts([...contacts, contactData]);
    localStorage.setItem("contacts", JSON.stringify(allContacts));
  };

  return (
    <>
      <div className="contact_adder">
        <ContactAdder onContactAdded={addContactData} />
      </div>

      <div className="contact_list">
        <h3>Contact list:</h3>

        {contacts.map((data) => (
          <Contact key={data.id} data={data}></Contact>
        ))}
      </div>
    </>
  );
};
export default App;
