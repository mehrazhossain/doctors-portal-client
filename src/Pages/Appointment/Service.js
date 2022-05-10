import React from 'react';
import PrimaryButton from '../Shared/PrimaryButton';

const Service = ({ service }) => {
  const { name, slots } = service;
  return (
    <div class="card lg:max-w-lg bg-base-100 shadow-xl">
      <div class="card-body">
        <h2 class="card-title text-secondary">{name}</h2>
        <p>
          {slots.length ? (
            <span>{slots[0]}</span>
          ) : (
            <span className="text-red-500 text-sm">Try another date.</span>
          )}
        </p>
        <p>
          {slots.length} {slots.length > 0 ? 'spaces' : 'space'} available
        </p>
        <div class="card-actions justify-center">
          <PrimaryButton>Book Appointment</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default Service;
