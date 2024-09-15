import { updateNoOfTimesUsed } from "../../services/paymentServer";
import { fetchPaymentReferralCode } from "../../services/paymentServer";

async function UpdateReferalCode(req, res) {
    const body = await req.body;
    const code = body.code;
    try {
        const response1 = await fetchPaymentReferralCode(code);
        console.log(response1);
        if (response1 === null) {
            console.log("INVALID REFERRAL CODE");
            res.status(400).send({ message: "INVALID REFERRAL CODE" });
            return;
        }
        console.log("VALID REFERRAL CODE");
        const response = await updateNoOfTimesUsed(code);
        res.status(200).send({ message: JSON.stringify(response) });
    } catch (e) {
        console.log(e);
        res.status(500).json({ message: e.message });
    }
}

export default UpdateReferalCode;
