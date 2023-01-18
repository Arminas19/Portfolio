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
  <div id='contact'>
    <div className="container">
      <div className='row'> 
        <div className="col">
          <div className='form-left'>
          <h1> Contact Me </h1>
          <p> <i className="fa fa-paper-plane"></i>armeska14@gmail.com </p>
          <p> <i className="fa fa-phone-square"></i>+353 89 478 7029 </p>
          <div className='social-icons'>
            <a href="https://www.linkedin.com/in/arminas-aleinikovas-0baa18220/" target='_blank'><i className='fab fa-linkedin'></i></a>
            <a href="#Top"><i className="fa fa-home"></i></a>
            <a href="/"><i className="fa fa-user"></i></a>
            <a href="Resume.docx" download><i className="fa fa-file-powerpoint-o"></i></a>
          </div>
          <a href="Resume.docx"  download className='btn btn2'>Download CV</a>
          </div>
        </div>

        <div className="col">
          <div className="form-right">
            <form onSubmit={handleSubmit}>

              <input placeholder="Full name" value={name} onChange={(event) => setName(event.target.value)}/>

              <input placeholder="Email" value={email} onChange={(event) => setEmail(event.target.value)}/>

              <textarea placeholder="Message" value={message} onChange={(event) => setMessage(event.target.value)}/>

              <button className='btn btn2'> Submit Form </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
);
};
