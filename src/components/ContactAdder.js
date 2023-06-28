import { useState } from "react";

const ContactAdder = (props) => {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [location, setLocation] = useState("");

  const onClickHandler = () => {
    const contactData = { id: Math.random(), name, contact: mobile, location };
    props.onContactAdded(contactData);
  };
  const dummyClickHandler = () => {
    props.childFunction();
  };
  return (
    <>
      <div className="simpleAdder">
        Contact adder:
        <br />
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
        <button onClick={onClickHandler}>Click Me!</button>
      </div>
    </>
  );
};
export default ContactAdder;
