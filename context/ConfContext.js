import { createContext, useState } from "react";

export const ConfContext = createContext({});

export function ConfProvider({ children, ...props }) {
    const [conference, setConference] = useState('');
    const conf = {
        conference,
        setConference,
        ...props,
    };

    return <ConfContext.Provider value={conf}>{children}</ConfContext.Provider>;
}