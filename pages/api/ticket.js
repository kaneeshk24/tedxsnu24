import { ticketSent } from "../../services/paymentServer";

async function TicketConfirm(req, res) {
    const body = await req.body;
    try {
        const response = await ticketSent(body);
        res.send({ status: 200, message: JSON.stringify(response) });
    } catch (e) {
        console.log(e);
        res.status(500).json({ message: "INTERNAL SERVER ERROR" });
    }
}

export default TicketConfirm;