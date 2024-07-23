import { fetchEmails } from "../../services/paymentServer";

async function FetchEmails(req, res) {
    const body = await req.body;
    try {
        const response = await fetchEmails(body);
        res.send({ status: 200, message: JSON.stringify(response) });
    } catch (e) {
        console.log(e);
        res.status(500).json({ message: "INTERNAL SERVER ERROR" });
    }
}

export default FetchEmails;