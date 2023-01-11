import { useState } from 'react';
import {db} from '../firebase';

export default function Contact() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  
  const handleSubmit = (event: any) => {
    event.preventDefault();
    db.collection('contacts').add({
      name: name,
      email: email,
      message: message,
    })
    .then(() => {
      alert('Message has been submitted.');
    })
    .catch((error: any) => {
      alert(error.message);
    });
  };

  return (
  <div className="contact-container" onSubmit={handleSubmit}>
    <form className="form">
      <h1> Contact Form </h1>

      <label>Full Name</label>
      <input placeholder="full name" value={name} onChange={(event) => setName(event.target.value)}/>

      <label>Email</label>
      <input placeholder="email" value={email} onChange={(event) => setEmail(event.target.value)}/>

      <label>Message</label>
      <textarea placeholder="message" value={message} onChange={(event) => setMessage(event.target.value)}/>

      <button type="submit"> Submit Form </button>
    </form>
  </div>
);
};
