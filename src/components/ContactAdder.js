import { useState } from "react";

const ContactAdder = (props) => {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [location, setLocation] = useState("");

  const onFormSubmitHandler = (e) => {
    e.preventDefault();
    const contactData = { id: Math.random(), name, contact: mobile, location };
    if (name.length <= 1 || mobile.length < 1 || location.length <= 1) {
      alert("Please fill all the required fields");
    } else {
      props.onContactAdded(contactData);
      setName("");
      setMobile("");
      setLocation("");
    }
  };

  return (
    <>
      <div className="simpleAdder">
        <h3>Contact adder:</h3>
        <br />
        <form onSubmit={onFormSubmitHandler}>
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          ></input>
          <input
            type="text"
            placeholder="Number"
            value={mobile}
            onChange={(e) => {
              setMobile(e.target.value);
            }}
          ></input>
          <input
            type="text"
            placeholder="Location"
            value={location}
            onChange={(e) => {
              setLocation(e.target.value);
            }}
          ></input>

          <br />
          <br />
          <button>Add Contact</button>
        </form>
      </div>
    </>
  );
};
export default ContactAdder;
