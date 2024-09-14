import { createReferralCode } from "../../services/paymentServer";

async function CreateReferralCode(req, res) {
    const body = await req.body;
    try {
        const response = await createReferralCode(body);
        res.send({ status: 200, message: response });
    } catch (e) {
        console.log(e);
        res.status(500).json({ message: "INTERNAL SERVER ERROR" });
    }
}

export default CreateReferralCode;