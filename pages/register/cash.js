import '../../styles/routes/google_pay.scss';
import useTicket from '../../hooks/useTicket'
import Link from 'next/link';
import { useState } from 'react';
import { payment, updateRefCode } from '../../operations/payment.fetch';
import { useRouter } from 'next/router';
import BlurredSpinner from '../../components/BlurredSpinner/BlurredSpinner';
import { v4 as uuidv4 } from 'uuid';
import uniqid from 'uniqid';

export default function Cash() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const { noOfPeople, setNoOfPeople, ticketPrice, setTicketPrice, snu, setSnu, nameOne, nameTwo, emailOne, emailTwo, phoneOne, phoneTwo, modeOfPayment, setMyRefCode, refferealCode } = useTicket();
    const calculatePrice = () => {
        if (snu && noOfPeople) {
            return '750';
        } else if (snu && !noOfPeople) {
            return '1350';
        } else if (!snu && noOfPeople) {
            return '750';
        } else {
            return '1350';
        }
    }
    const rC = uniqid.process('tedx-', '-2024')
    const [tid, setTid] = useState('');
    const handleClick = async () => {
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
        setLoading(true)
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
                'amountPaid': noOfPeople ? 699 : 1250,
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
                        console.log(res);
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
    return (
        <>
            {loading ? <BlurredSpinner /> : <></>}
            <div className='GooglePay'>
                <div className='GooglePay__qr'>
                    <p className='GooglePay__qr--text'>Contact this number for further details</p>
                    <p className='GooglePay__qr--text'>Ishan - +91 96358 72209</p>
                    <p className='GooglePay__qr--text'>Aditi - +91 70084 42718</p>
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
                            <p>{snu ? '750' : '750'}</p>
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
