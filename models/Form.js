const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const formSchema = new Schema({
    name: {
        type: String,
    },
    program: {
        type: String,
    },
    specialization: {
        type: String,
    },
    vat: {
        type: String,
    },
    date: {
        type: Date,
    },
    source: {
        type: String,
    },
    initialDate: {
        type: String,
    },
    initialFees: {
        type: String,
    },
    initialVat: {
        type: String,
    },
    initialTotalAmount: {
        type: String,
    },
    finalDate: {
        type: Date,
    },
    finalFees: {
        type: String,
    },
    finalVat: {
        type: String,
    },
    finalTotalAmount: {
        type: String,
    },
    totalFees: {
        type: String,
    },
    totalVat: {
        type: String,
    },
    totalTotalAmount: {
        type: String,
    },
    monthlyPayment: {
        type: String,
    },
    payable: {
        type: String,
    },
    paymentDuration: {
        type: String,
    },
    studentSignature: {
        type: String,
    },
    agcSignature: {
        type: String,
    },
    courseFee: {
        type: String,
    },
    grandTotal: {
        type: String,
    }
}, { timestamps: true })

const Form = mongoose.model('form_data', formSchema);
module.exports = Form;