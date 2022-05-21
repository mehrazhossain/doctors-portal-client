import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(
  'pk_test_51L116lBAAjVbrh2qwhz2vf0OgO2Ytn6znkJphSKtEjOoEwJ4vS8f4RCxvtAqU9qfx8LnxKlwcKZDyWxelkhFNQs700RJm1eJmf'
);

const Payment = () => {
  const { id } = useParams();
  const url = `https://doctors-portal-80904.herokuapp.com/booking/${id}`;

  const { data: appointment, isLoading } = useQuery(['booking', id], () =>
    fetch(url, {
      method: 'GET',
      headers: {
        authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <div class="card w-50 mx-w-md bg-base-100 shadow-xl my-12">
        <div class="card-body">
          <p className="text-success font-bold">
            Hello, {appointment.patientName}
          </p>
          <h2 class="card-title">Please pay for {appointment.treatment}</h2>
          <p>
            Your Appointment:{' '}
            <span className="text-orange-700">{appointment.date}</span> at{' '}
            {appointment.slot}
          </p>
          <p>Please pay: ${appointment.price}</p>
        </div>
      </div>
      <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
        <div class="card-body">
          <Elements stripe={stripePromise}>
            <CheckoutForm appointment={appointment} />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
