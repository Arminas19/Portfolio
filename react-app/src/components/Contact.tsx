import { useState } from 'react';
import {db} from '../firebase';
import {addDoc, collection} from 'firebase/firestore';

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const postForm = collection(db, 'contacts')


  const handleSubmit = (event: any) => {
    event.preventDefault();
    addDoc(postForm, {
      name: name,
      email: email,
      message: message,
    })
    .then(() => {
      alert('Message has been submitted.');
      setName('')
      setEmail('')
      setMessage('')
    })
  };

  return (
  <div className="contact-container">
    <form className="form" onSubmit={handleSubmit}>
      <h1> Contact Form </h1>

      <label>Full Name</label>
      <input placeholder="full name" value={name} onChange={(event) => setName(event.target.value)}/>

      <label>Email</label>
      <input placeholder="email" value={email} onChange={(event) => setEmail(event.target.value)}/>

      <label>Message</label>
      <textarea placeholder="message" value={message} onChange={(event) => setMessage(event.target.value)}/>

      <button> Submit Form </button>
    </form>
  </div>
);
};
