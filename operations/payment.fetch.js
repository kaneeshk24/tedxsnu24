export async function payment(formData) {
    return fetch("/api/payment", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
    });
}

export async function paymentverified(formData) {
    return fetch("/api/verifyPayment", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
    });
}

export async function emailSentRoute(formData) {
    return fetch("/api/email", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
    });
}

export async function createRefCode(formData) {
    return fetch("/api/referralCode", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
    });
}

export async function updateRefCode(formData) {
    return fetch("/api/updateReferalCode", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
    });
}