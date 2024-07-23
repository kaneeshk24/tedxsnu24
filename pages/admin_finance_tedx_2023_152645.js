import useTicket from "../hooks/useTicket";
import { emailSentRoute, paymentverified } from "../operations/payment.fetch";
import { findPayments } from "../services/paymentServer"
import '../styles/routes/admin.scss'
export default function Admin({ payments }) {
    const { filter, setFilter } = useTicket();
    let srNo = 1;
    const handlePayment = async (id) => {
        try {
            const data = {
                id: id,
            }
            const response = await paymentverified(data);
            if (response.status === 200) {
                window.location.reload();
            } else {
                alert('INTERNAL SERVER ERROR, CONTACT SETHIA - 7738180710')
            }
        } catch (e) {
            console.error("Error", e)
        }
    }
    const handleEmail = async (id) => {
        try {
            const data = {
                id: id,
            }
            const response = await emailSentRoute(data);
            if (response.status === 200) {
                window.location.reload();
            } else {
                alert('INTERNAL SERVER ERROR, CONTACT SETHIA - 7738180710')
            }
        } catch (e) {
            console.error("Error", e)
        }
    }
    const filteredPayments = payments.filter(
        (payment) => filter === '' || payment['modeOfPayment'] === filter
    );

    // Calculate the total amount for displayed rows
    const totalAmount = filteredPayments.reduce((total, payment) => total + payment['amountPaid'], 0);

    return (
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
                    </tr>
                </thead>
                <tbody>
                    {payments.map((payment, index) => {
                        {
                            if (filter === '' || payment['modeOfPayment'] === filter) {
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
                                                    <button onClick={() => handleEmail(payment["id"])}>Mark as Email Sent</button>
                                                )}
                                            </td>
                                        </tr>
                                        :
                                        <tr key={index}></tr>
                                )
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
                    </tr>
                </thead>
                <tbody>
                    {payments.map((payment, index) => {
                        if (filter === '' || payment['modeOfPayment'] === filter) {
                            {
                                return (
                                    payment['noOfPeople'] == 1 ?
                                        <tr key={index}></tr>
                                        :
                                        <tr key={index}>
                                            <td>{srNo++}</td>
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
                                            <td>{payment["emailSent"] ? <button disabled>Email Sent</button> : <button onClick={() => handleEmail(payment["id"])}>Mark as email sent</button>}</td>
                                        </tr>
                                )
                            }
                        }
                    })}
                </tbody>
            </table>
            <p className="AdminMainContainer__end">Total Amount: {totalAmount}</p>
        </div>
    )
}

export async function getServerSideProps(context) {
    const response = await findPayments();
    return {
        props: {
            payments: response,
        }
    }
}