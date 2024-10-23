import db from '../lib/prisma'

export async function createPayment(data) {
    return db.payment.create({
        data,
    })
}

export async function updateNoOfTimesUsed(referralCode) {
    return db.payment.update({
        where : {
            referralCode : referralCode,
        },
        data : {
            'noOfTimesUsed' : {
                increment : 1,
            }
        }
    })
}

export async function findPayments() {
    return db.payment.findMany();
}

export async function verifyPayment(data) {
    return db.payment.update({
        where : {
            id : data.id,
        },
        data : {
            'paymentVerified' : true,
        }
    })
}

export async function emailSent(data) {
    return db.payment.update({
        where : {
            id : data.id,
        },
        data : {
            'emailSent' : true,
        }
    })
}

export async function ticketSent(data) {
    return db.payment.update({
        where: {
            id: data.id,
        },
        data: {
            'ticketEmail': true,
        }
    })
}

export async function fetchEmails(data) {
    return db.payment.findMany({
        where: {
            'paymentVerified' : true,
        },
        select : {
            'email1' : true,
            'email2' : true,
        }
    })
}

export async function fetchPaymentReferralCode(code) {
    return db.payment.findFirst({
        where : {
            referralCode : code,
        }
    })
}