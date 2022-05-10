import React from 'react';
import appointment from '../../assets/images/appointment.png';
import PrimaryButton from '../Shared/PrimaryButton';

const ContactUs = () => {
  return (
    <section
      style={{
        background: `url(${appointment})`,
      }}
      className="grid justify-center my-14 py-28 gap-5"
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
        className="input input-bordered input-xl w-full max-w-xs"
      />
      <input
        type="text"
        placeholder="Subject"
        className="input input-bordered input-xl w-full max-w-xs"
      />
      <textarea className="textarea h-32" placeholder="Your message"></textarea>
      <PrimaryButton>Submit</PrimaryButton>
    </section>
  );
};

export default ContactUs;
