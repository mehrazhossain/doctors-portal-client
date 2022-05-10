import React from 'react';
import appointment from '../../assets/images/appointment.png';

const ContactUs = () => {
  return (
    <section
      style={{
        background: `url(${appointment})`,
      }}
      className="grid justify-center my-28 py-28 gap-5"
    >
      <div>
        <h4 className="text-primary font-bold text-center">Contact Us</h4>
        <h2 className="text-3xl text-center text-white">
          Stay connected with us
        </h2>
      </div>
      <input
        type="email"
        placeholder="Email Address"
        class="input input-bordered input-xl w-full max-w-xs"
      />
      <input
        type="text"
        placeholder="Subject"
        class="input input-bordered input-xl w-full max-w-xs"
      />
      <textarea class="textarea h-32" placeholder="Your message"></textarea>
    </section>
  );
};

export default ContactUs;
