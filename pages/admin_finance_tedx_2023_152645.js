import useTicket from "../hooks/useTicket";
import { deletePayment, emailSentRoute, paymentverified, sendEmail, sendTicket, ticketSentRoute } from "../operations/payment.fetch";
import { findPayments } from "../services/paymentServer"
import '../styles/routes/admin.scss'
import BlurredSpinner from "../components/BlurredSpinner/BlurredSpinner";
import { useState } from "react";
export default function Admin({ payments }) {
    const { filter, setFilter, showUnverified, setUnverified } = useTicket();
    const [loading, setLoading] = useState(false);
    let srNo = 1;
    let dSrNo = 1;
    const handlePayment = async (id, payment) => {
        setLoading(true);
        try {
            const data = {
                id: id,
            }
            const response = await paymentverified(data);

            if (response.status === 200) {
                setLoading(false);
                window.location.reload();
            } else {
                alert('INTERNAL SERVER ERROR, CONTACT WEBDEV - 9336833660')
            }
        } catch (e) {
            console.error("Error", e)
        }
        setLoading(false);
    }
    // const handleDelete = async (id) => {
    //     setLoading(true);
    //     try {
    //         const data = {
    //             id: id,
    //         }
    //         const res = await deletePayment(data);
    //         if (res.status === 200) {
    //             setLoading(false);
    //             window.location.reload();
    //         }
    //         else {
    //             alert('INTERNAL SERVER ERROR, CONTACT SETHIA - 7738180710')
    //         }
    //     } catch (e) {
    //         console.log(e);
    //     }
    //     setLoading(false);
    // }
    const handleEmail = async (id, email1, email2) => {
        setLoading(true);
        try {
            const data = {
                id: id,
            }
            const response = await emailSentRoute(data);
            console.log(email1, email2, id);
            const response2 = await sendEmail({
                'email1': email1,
                'email2': email2,
            })
            if (response.status === 200 && response2.status === 200) {
                setLoading(false);
                window.location.reload();
            } else {
                alert('INTERNAL SERVER ERROR, CONTACT WEBDEV - 9336833660')
            }
        } catch (e) {
            console.error("Error", e)
        }
        setLoading(false);
    }
    const sendTicketEmail = async (id, email1, email2, name1, name2) => {
        setLoading(true);
        try {
            const data = {
                id: id,
            }
            console.log(name1, name2);
            const response = await ticketSentRoute(data);
            const response2 = await sendTicket({
                'email1': email1,
                'email2': email2,
                'name1' : name1,
                'name2': name2,
            })
            if (response.status === 200 && response2.status === 200) {
                setLoading(false);
                window.location.reload();
            } else {
                alert('INTERNAL SERVER ERROR, CONTACT WEBDEV - 9336833660')
            }
        } catch (error) {
            console.error("Error", e)
        }
        setLoading(false)
    }
    const filteredPayments = payments.filter(
        (payment) => filter === '' || payment['modeOfPayment'] === filter
    );

    // Calculate the total amount for displayed rows
    const totalAmount = filteredPayments.reduce((total, payment) => total + payment['amountPaid'], 0);
    const totalAmountVerified = filteredPayments
        .filter(payment => payment["paymentVerified"])
        .reduce((total, payment) => total + payment["amountPaid"], 0);

    return (
        <>
            {loading ? <BlurredSpinner /> : <></>}
            <div className="AdminMainContainer">
                <p className="AdminMainContainer__title">Payment Records</p>
                <div className="AdminMainContainer__filter">
                    <p className="AdminMainContainer__filter--title">Filter By</p>
                    <div className="AdminMainContainer__filter--options">
                        <p className={filter === 'GPAY' ? 'AdminMainContainer__filter--options__red' : 'AdminMainContainer__filter--options__white'} onClick={() => setFilter('GPAY')}>GPAY</p>
                        <p className={filter === 'PAYTM' ? 'AdminMainContainer__filter--options__red' : 'AdminMainContainer__filter--options__white'} onClick={() => setFilter('PAYTM')}>PAYTM</p>
                        <p className={filter === 'CASH' ? 'AdminMainContainer__filter--options__red' : 'AdminMainContainer__filter--options__white'} onClick={() => setFilter('CASH')}>CASH</p>
                        <p className={filter === '' ? 'AdminMainContainer__filter--options__red' : 'AdminMainContainer__filter--options__white'} onClick={() => setFilter('')}>ALL</p>
                    </div>
                </div>
                <div className="AdminMainContainer__filter">
                    <p className="AdminMainContainer__filter--title">Unverified Payments</p>
                    <div className="AdminMainContainer__filter--options">
                        <p className={showUnverified ? 'AdminMainContainer__filter--options__red' : 'AdminMainContainer__filter--options__white'} onClick={() => setUnverified(!showUnverified)}>SHOW UNVERIFIED PAYMENTS</p>
                    </div>
                </div>
                <p>Single Ticket Purches</p>
                <table className="bordered-table">
                    <thead>
                        <tr>
                            <th>SR NO</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone Number</th>
                            <th>Amount Paid</th>
                            <th>Mode Of Payment</th>
                            <th>TID</th>
                            <th>SNU/Non-SNU</th>
                            <th>Payment Verified</th>
                            <th>Email Sent</th>
                            {/* <th>Delete Entry</th> */}
                            <th>Ticket Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {payments.map((payment, index) => {
                            {
                                if (filter === '' || payment['modeOfPayment'] === filter) {
                                    if (showUnverified) {
                                        return (
                                            payment['noOfPeople'] == 1 && payment['paymentVerified'] == false ?
                                                <tr key={index} className="AdminMainContainer__details">
                                                    <td>{srNo++}</td>
                                                    <td>{payment["name1"]}</td>
                                                    <td>{payment["email1"]}</td>
                                                    <td>{payment["phone1"]}</td>
                                                    <td>{payment["amountPaid"]}</td>
                                                    <td>{payment["modeOfPayment"]}</td>
                                                    <td>{payment["tid"]}</td>
                                                    <td>{payment["snu"] ? <p>SNU Student</p> : <p>Non SNU Student</p>}</td>
                                                    <td>
                                                        {payment["paymentVerified"] ? (
                                                            <button disabled>Payment Verified</button>
                                                        ) : (
                                                            <button onClick={() => handlePayment(payment["id"])}>Mark As Verified</button>
                                                        )}
                                                    </td>
                                                    <td>
                                                        {payment["emailSent"] ? (
                                                            <button disabled>Email Sent</button>
                                                        ) : (
                                                            <button onClick={() => handleEmail(payment["id"], payment["email1"], payment["email2"])}>Mark as Email Sent</button>
                                                        )}
                                                    </td>
                                                    {/* <td>{payment["paymentVerified"] ? <button disabled>Cannot Delete</button> : <button onClick={() => handleDelete(payment["id"])}>Delete</button>}</td> */}
                                                    <td>{payment["ticketEmail"] ? <button disabled>Ticket Sent</button> : <button onClick={() => sendTicketEmail(payment["id"], payment["email1"], payment["email2"], payment["name1"], payment["name2"])}>Send Email</button>}</td>
                                                </tr>
                                                :
                                                <tr key={index}></tr>
                                        )
                                    }
                                    else {
                                        return (
                                            payment['noOfPeople'] == 1 ?
                                                <tr key={index} className="AdminMainContainer__details">
                                                    <td>{srNo++}</td>
                                                    <td>{payment["name1"]}</td>
                                                    <td>{payment["email1"]}</td>
                                                    <td>{payment["phone1"]}</td>
                                                    <td>{payment["amountPaid"]}</td>
                                                    <td>{payment["modeOfPayment"]}</td>
                                                    <td>{payment["tid"]}</td>
                                                    <td>{payment["snu"] ? <p>SNU Student</p> : <p>Non SNU Student</p>}</td>
                                                    <td>
                                                        {payment["paymentVerified"] ? (
                                                            <button disabled>Payment Verified</button>
                                                        ) : (
                                                            <button onClick={() => handlePayment(payment["id"])}>Mark As Verified</button>
                                                        )}
                                                    </td>
                                                    <td>
                                                        {payment["emailSent"] ? (
                                                            <button disabled>Email Sent</button>
                                                        ) : (
                                                            <button onClick={() => handleEmail(payment["id"], payment["email1"], payment["email2"])}>Mark as Email Sent</button>
                                                        )}
                                                    </td>
                                                    {/* <td>{payment["paymentVerified"] ? <button disabled>Cannot Delete</button> : <button onClick={() => handleDelete(payment["id"])}>Delete</button>}</td> */}
                                                    <td>{payment["ticketEmail"] ? <button disabled>Ticket Sent</button> : <button onClick={() => sendTicketEmail(payment["id"], payment["email1"], payment["email2"], payment["name1"], payment["name2"])}>Send Email</button>}</td>

                                                </tr>
                                                :
                                                <tr key={index}></tr>
                                        )
                                    }

                                }
                            }
                        })}
                    </tbody>
                </table>
                <p>Double Ticket Purchases</p>
                <table className="bordered-table">
                    <thead>
                        <tr>
                            <th>SR NO</th>
                            <th>Name 1</th>
                            <th>Email 1</th>
                            <th>Phone Number 1</th>
                            <th>Name 2</th>
                            <th>Email 2</th>
                            <th>Phone Number 2</th>
                            <th>Amount Paid</th>
                            <th>Mode Of Payment</th>
                            <th>TID</th>
                            <th>SNU/Non-SNU</th>
                            <th>Payment Verified</th>
                            <th>Email Sent</th>
                            {/* <th>Delete Entry</th> */}
                            <th>Ticket Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {payments.map((payment, index) => {
                            if (filter === '' || payment['modeOfPayment'] === filter) {
                                {
                                    if (showUnverified) {
                                        return (
                                            payment['noOfPeople'] == 2 && payment['paymentVerified'] == false ?

                                                <tr key={index}>
                                                    <td>{dSrNo++}</td>
                                                    <td>{payment["name1"]}</td>
                                                    <td>{payment["email1"]}</td>
                                                    <td>{payment["phone1"]}</td>
                                                    <td>{payment["name2"]}</td>
                                                    <td>{payment["email2"]}</td>
                                                    <td>{payment["phone2"]}</td>
                                                    <td>{payment["amountPaid"]}</td>
                                                    <td>{payment["modeOfPayment"]}</td>
                                                    <td>{payment["tid"]}</td>
                                                    <td>{payment["snu"] ? <p>SNU Student</p> : <p>Non Snu Student</p>}</td>
                                                    <td>{payment["paymentVerified"] ? <button disabled>Payment Verified</button> : <button onClick={() => handlePayment(payment["id"])}>Mark As Verified</button>}</td>
                                                    <td>{payment["emailSent"] ? <button disabled>Email Sent</button> : <button onClick={() => handleEmail(payment["id"], payment["email1"], payment["email2"])}>Mark as email sent</button>}</td>
                                                    {/* <td>{payment["paymentVerified"] ? <button disabled>Cannot Delete</button> : <button onClick={() => handleDelete(payment["id"])}>Delete</button>}</td> */}
                                                    <td>{payment["ticketEmail"] ? <button disabled>Ticket Sent</button> : <button onClick={() => sendTicketEmail(payment["id"], payment["email1"], payment["email2"], payment["name1"], payment["name2"])}>Send Email</button>}</td>
                                                </tr> :
                                                <tr key={index}></tr>

                                        )
                                    }
                                    else {
                                        return (
                                            payment['noOfPeople'] == 1 ?
                                                <tr key={index}></tr>
                                                :
                                                <tr key={index}>
                                                    <td>{dSrNo++}</td>
                                                    <td>{payment["name1"]}</td>
                                                    <td>{payment["email1"]}</td>
                                                    <td>{payment["phone1"]}</td>
                                                    <td>{payment["name2"]}</td>
                                                    <td>{payment["email2"]}</td>
                                                    <td>{payment["phone2"]}</td>
                                                    <td>{payment["amountPaid"]}</td>
                                                    <td>{payment["modeOfPayment"]}</td>
                                                    <td>{payment["tid"]}</td>
                                                    <td>{payment["snu"] ? <p>SNU Student</p> : <p>Non Snu Student</p>}</td>
                                                    <td>{payment["paymentVerified"] ? <button disabled>Payment Verified</button> : <button onClick={() => handlePayment(payment["id"])}>Mark As Verified</button>}</td>
                                                    <td>{payment["emailSent"] ? <button disabled>Email Sent</button> : <button onClick={() => handleEmail(payment["id"], payment["email1"], payment["email2"])}>Mark as email sent</button>}</td>
                                                    {/* <td>{payment["paymentVerified"] ? <button disabled>Cannot Delete</button> : <button onClick={() => handleDelete(payment["id"])}>Delete</button>}</td> */}
                                                    <td>{payment["ticketEmail"] ? <button disabled>Ticket Sent</button> : <button onClick={() => sendTicketEmail(payment["id"], payment["email1"], payment["email2"], payment["name1"], payment["name2"])}>Send Email</button>}</td>
                                                </tr>
                                        )
                                    }
                                }
                            }
                        })}
                    </tbody>
                </table>
                <p className="AdminMainContainer__end">Total Amount Verified: {totalAmountVerified}</p>
                <p className="AdminMainContainer__end">Total Amount Not verified: {totalAmount - totalAmountVerified}</p>
                <p className="AdminMainContainer__end">Total Amount: {totalAmount}</p>
            </div>
        </>
    )
}

export async function getServerSideProps(context) {
    try {
        const response = await findPayments();
        return {
            props: {
                payments: response,
            }
        };
    } catch (error) {
        console.error("Error fetching payments:", error);
        return {
            props: {
                payments: [],
            }
        };
    }
}
