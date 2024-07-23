import { verifyPayment } from "../../services/paymentServer";

async function VerifyPayment(req, res) {
    const body = await req.body;
    try {
        const response = await verifyPayment(body);
        res.send({ status: 200, message: JSON.stringify(response) });
    } catch (e) {
        console.log(e);
        res.status(500).json({ message: "INTERNAL SERVER ERROR" });
    }
}

export default VerifyPayment;