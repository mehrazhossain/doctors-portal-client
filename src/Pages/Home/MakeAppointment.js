import React from 'react';
import doctor from '../../assets/images/doctor.png';
import appointment from '../../assets/images/appointment.png';
import PrimaryButton from '../Shared/PrimaryButton';

const MakeAppointment = () => {
  return (
    <section
      style={{
        background: `url(${appointment})`,
      }}
      className="flex justify-center items-center"
    >
      <div className="flex-1 hidden lg:block">
        <img src={doctor} className="mt-[-100px]" alt="" />
      </div>
      <div className="flex-1">
        <h3 className="text-xl text-primary font-bold">Appointment</h3>
        <h2 className="text-3xl text-white">Make an Appointment Today</h2>
        <p className="text-white">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, quas!
          Quam, in nam fuga excepturi illo, assumenda iusto unde aut earum ad,
          eveniet magnam quia omnis? Harum sapiente deleniti doloribus?
          Molestiae eveniet tenetur, et consectetur maxime aperiam dolores
          similique officia.
        </p>
        <PrimaryButton>Get Started</PrimaryButton>
      </div>
    </section>
  );
};

export default MakeAppointment;
