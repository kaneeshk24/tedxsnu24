import '../../styles/routes/google_pay.scss';
import useTicket from '../../hooks/useTicket'
import Link from 'next/link';
import { useState } from 'react';
import { createRefCode, payment, updateRefCode } from '../../operations/payment.fetch';
import { useRouter } from 'next/router';
import BlurredSpinner from '../../components/BlurredSpinner/BlurredSpinner';
import { v4 as uuidv4 } from 'uuid';
import uniqid from 'uniqid';

export default function GooglePay() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const rC = uniqid.process('tedx-', '-2024')
    const { noOfPeople, setNoOfPeople, ticketPrice, setTicketPrice, snu, setSnu, nameOne, nameTwo, emailOne, emailTwo, phoneOne, phoneTwo, modeOfPayment, refferealCode, setMyRefCode  } = useTicket();
    const calculatePrice = () => {
        if (snu && noOfPeople) {
            return '699';
        } else if (snu && !noOfPeople) {
            return '1250';
        } else if (!snu && noOfPeople) {
            return '699';
        } else {
            return '1250';
        }
    }
    const [tid, setTid] = useState('');
    const handleClick = async () => {
        if (tid === '') {
            alert('Please enter a vaid transaction id');
            return;
        } else {
            if (noOfPeople) {
                if (nameOne === '' || emailOne === '' || phoneOne === '' || modeOfPayment === '') {
                    alert('There is a problem from our side. Please refill the form without reloading the screen');
                    return;
                }
            } else {
                if (nameOne === '' || nameTwo === '' || emailOne === '' || emailTwo === '' || phoneOne === '' || phoneTwo === '' || modeOfPayment === '') {
                    alert('There is a problem from our side. Please refill the form without reloading the screen');
                    return;
                }
            }
            setLoading(true);
            try {
                const id = uuidv4();
                setMyRefCode(rC);
                const data = {
                    'id': id,
                    'name1': nameOne,
                    'name2': nameTwo,
                    'email1': emailOne,
                    'email2': emailTwo,
                    'phone1': phoneOne,
                    'phone2': phoneTwo,
                    'modeOfPayment': modeOfPayment,
                    'noOfPeople': noOfPeople ? 1 : 2,
                    'amountPaid': noOfPeople ? 700 : 1250,
                    'snu': snu,
                    'tid': tid,
                    'paymentVerified': false,
                    'emailSent': false,
                    'referralCode': rC,
                    'noOfTimesUsed': 0,
                }
                const response = await payment(data);
                if (response.status === 200) {
                    if (refferealCode === '') {
                        router.push('/register/confirm');
                    } else {
                        const res = await updateRefCode({ code: refferealCode });
                        if (res.status === 200) {
                            router.push('/register/confirm');
                        } else {
                            alert("INVALID REFERRAL CODE");
                            setLoading(false);
                            return;
                        }
                    }
                } else {
                    alert('INTERNAL SERVER ERROR');
                    setLoading(false);
                    return;
                }
                setLoading(false);
            } catch (e) {
                console.log(e);
                alert('INTERNAL SERVER ERROR');
                setLoading(false);
            }
        }
    }
    return (
        <>
            {loading ? <BlurredSpinner /> : <></>}
            <div className='GooglePay'>
                <div className='GooglePay__qr'>
                    <p className='GooglePay__qr--text'>Scan the QR to Pay</p>
                    <p style={{ fontSize: "1rem", marginTop: "0", marginBottom: ".5rem" }} className='GooglePay__qr--text'>Aditi Mohapatra</p>
                    <img className='GooglePay__qr--image' src='/Images/conf24/aditiqr.png' />
                    <div className='GooglePay__qr--TID'>
                        <input onChange={(e) => setTid(e.target.value)} type='text' placeholder='Transaction ID' required />
                    </div>
                    <p onClick={() => handleClick()} className='GooglePay__qr--bottom'>Proceed</p>
                </div>
                <div className='GooglePay__details'>
                    <img className='GooglePay__details--image' src='/Images/Assets/payment.png' />
                    <div className='GooglePay__details--priceDetails'>
                        <p>Price Details</p>
                        <div className='GooglePay__details--priceDetails__snu'>
                            <p>Type Of Person</p>
                            <p>{snu ? 'SNU' : 'NON-SNU'}</p>
                        </div>
                        <div className='GooglePay__details--priceDetails__people'>
                            <p>No. Of People</p>
                            <p>{noOfPeople ? '1' : '2'}</p>
                        </div>
                        <div className='GooglePay__details--priceDetails__ticket'>
                            <p>Ticket Price (per person)</p>
                            <p>{snu ? '699' : '625'}</p>
                        </div>
                        <hr />
                        <div className='GooglePay__details--priceDetails__total'>
                            <p>Total Amount</p>
                            <p>{calculatePrice()}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}