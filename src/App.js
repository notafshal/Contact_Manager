import React, { useState } from "react";
import Contact from "./components/contact";
import "./styles/App.css";
import ContactAdder from "./components/ContactAdder";
const App = () => {
  const initialContacts = [
    {
      name: "John",
      contact: "9861161064",
      location: "Kathmandu",
    },
    {
      name: "Dave",
      contact: "9861162364",
      location: "Pokhara",
    },
    {
      name: "Chris",
      contact: "9861161264",
      location: "Bhaktapur",
    },
  ];

  const [contacts, setContacts] = useState(initialContacts);
  const addContactData = (contactData) => {
    setContacts([...contacts, contactData]);
  };
  const childFunctionHandler = () => {
    alert("Grand Parent was called");
  };
  return (
    <>
      <div className="contact_adder">
        <ContactAdder
          onContactAdded={addContactData}
          childFunction={childFunctionHandler}
        />
      </div>

      <div className="contact_list">
        <h3>Contact list:</h3>
        {contacts.map((data) => (
          <Contact data={data}></Contact>
        ))}
      </div>
    </>
  );
};
export default App;
