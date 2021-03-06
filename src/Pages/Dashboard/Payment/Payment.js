import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import CheckoutForm from './CheckoutForm';

// for use stripe
const stripePromise = loadStripe('pk_test_51JzXjnBIiduh8oAAYdYcdM9kGawfDQEM656qvY7dHQr0iJu9b4mXMFVxG3ggfuLUjgVkUnalNWbU2xAkavTloqi500GzSeHUWT');

const Payment = () => {
    const { appointmentId } = useParams();
    const [appointment, setAppointment] = useState({})


    useEffect(() => {
        fetch(`http://localhost:5000/appointments/${appointmentId}`)
            .then(res => res.json())
            .then(data => setAppointment(data))
    }, [appointmentId])

    return (
        <div>
            <h2> {appointment.patientName} for {appointment.serviceName} </h2>
            <h4>Please Pay: ${appointment.price} </h4>
            {appointment?.price &&
                <Elements stripe={stripePromise}>
                    <CheckoutForm
                        appointment={appointment}
                    />
                </Elements>
            }
        </div>
    );
};

export default Payment;