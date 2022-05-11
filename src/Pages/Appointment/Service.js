import React from 'react';

const Service = ({ service, setTreatment }) => {
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
          {/* The button to open modal */}
          <label
            disabled={slots.length === 0}
            onClick={() => setTreatment(service)}
            class="btn btn-secondary text-white uppercase"
            for="booking-modal"
          >
            Book Appointment
          </label>
        </div>
      </div>
    </div>
  );
};

export default Service;
