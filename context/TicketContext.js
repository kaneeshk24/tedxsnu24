import { createContext, useEffect, useState } from "react";
import React from "react";
export const TicketContext = createContext({})

export function TicketProvider({children, ...props}) {
    const [noOfPeople, setNoOfPeople] = useState(true);
    const [ticketPrice,setTicketPrice]=useState(0);
    const [snu, setSnu] = useState(true);
    const [nameOne, setNameOne] = React.useState('');
    const [nameTwo, setNameTwo] = React.useState('');
    const [emailOne, setEmailOne] = React.useState('');
    const [emailTwo, setEmailTwo] = React.useState('');
    const [phoneOne, setPhoneOne] = React.useState('');
    const [phoneTwo, setPhoneTwo] = React.useState('');
    const [modeOfPayment, setModeOfPayment] = React.useState('');
    const [filter, setFilter] = React.useState('');
    const ticket = {
        noOfPeople,
        setNoOfPeople,
        ticketPrice,
        setTicketPrice,
        snu,
        setSnu,
        nameOne,
        setNameOne,
        nameTwo,
        setNameTwo,
        emailOne,
        setEmailOne,
        emailTwo,
        setEmailTwo,
        phoneOne,
        setPhoneOne,
        phoneTwo,
        setPhoneTwo,
        modeOfPayment,
        setModeOfPayment,
        filter,
        setFilter,
        ...props
    }

    return <TicketContext.Provider value={ticket}>{children}</TicketContext.Provider>
}