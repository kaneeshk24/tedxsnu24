import '../../styles/routes/payments.scss';
import useTicket from '../../hooks/useTicket'
import Link from 'next/link';
import React from 'react';
import { useRouter } from "next/router";

export default function Payment() {
    const router = useRouter();
    const calculatePrice = () => {
        if (snu && noOfPeople) {
            return '750';
        } else if (snu && !noOfPeople) {
            return '1200';
        } else if (!snu && noOfPeople) {
            return '750';
        } else {
            return '1200';
        }
    }
    const handleClick = (mode) => {
        setModeOfPayment(mode);
        if (mode === 'GPAY') {
            router.push('/register/google_pay');
        } else if (mode === 'PAYTM') {
            router.push('/register/paytm');
        } else if (mode === 'CASH') {
            router.push('/register/cash');
        }
    }
    const [mop, setMop] = React.useState('');
    const { noOfPeople, setNoOfPeople, ticketPrice, setTicketPrice, snu, setSnu, setModeOfPayment , emailTwo} = useTicket();
    return (
        <div className='PaymentContainer'>
            <div className='PaymentContainer__option'>
                <p className='PaymentContainer__option--title'>Choose your payment option</p>
                <div onClick={() => handleClick('GPAY')} className='PaymentContainer__option--mode'>Google Pay</div>
                <div onClick={() => handleClick('PAYTM')} className='PaymentContainer__option--mode'>PayTM</div>
                <div onClick={() => handleClick('CASH')} className='PaymentContainer__option--mode'>Cash</div>
            </div>
            <div className='PaymentContainer__details'>
                <img className='PaymentContainer__details--image' src='/Images/Assets/payment.png' />
                <div className='PaymentContainer__details--priceDetails'>
                    <p>Price Details</p>
                    <div className='PaymentContainer__details--priceDetails__snu'>
                        <p>Type Of Person</p>
                        <p>{snu ? 'SNU' : 'NON-SNU'}</p>
                    </div>
                    <div className='PaymentContainer__details--priceDetails__people'>
                        <p>No. Of People</p>
                        <p>{noOfPeople ? '1' : '2'}</p>
                    </div>
                    <div className='PaymentContainer__details--priceDetails__ticket'>
                        <p>Ticket Price (per person)</p>
                        <p>{snu ? '800' : '800'}</p>
                    </div>
                    <div className='PaymentContainer__details--priceDetails__ticket'>
                            <p>Early Bird Discount</p>
                            <p>{noOfPeople ? '-50' : '-200'}</p>
                        </div>
                    <hr />
                    <div className='PaymentContainer__details--priceDetails__total'>
                        <p>Total Amount</p>
                        <p>{calculatePrice()}</p>
                    </div>
                </div>
            </div>
        </div>

    )
}