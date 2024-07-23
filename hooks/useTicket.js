import { useContext } from "react";
import { TicketContext } from "../context/TicketContext";

export default function useTicket() {
    return useContext(TicketContext);
}