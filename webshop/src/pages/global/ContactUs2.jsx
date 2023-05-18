import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

function ContactUs2() {
  const nameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const messageRef = useRef();

  const sendEmail = () => {
    const data = {
      "from_name": nameRef.current.value,
      "from_email": emailRef.current.value,
      "from_phone": phoneRef.current.value,
      "message": messageRef.current.value
    }

    emailjs.send('service_fum24bj', 'template_ld2lsyd', data, 'Xbn0xj_4LjNugxYGl')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div>
      <label>Name</label>
      <input ref={nameRef} type="text" />
      <label>Email</label>
      <input ref={emailRef} type="email" />
      <label>Phone</label>
      <input ref={phoneRef} type="text" />
      <label>Message</label>
      <textarea ref={messageRef} />
      <button onClick={sendEmail}>Send</button>
    </div>
  )
}

export default ContactUs2