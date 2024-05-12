fetch("http://localhost:3000/api/get")
    .then((response) => response.json())
    .then((result) => {

        document.getElementById('r-name').value = result.response[result.response.length - 1].name;
        document.getElementById('r-program').value = result.response[result.response.length - 1].program;
        document.getElementById('r-specialization').value = result.response[result.response.length - 1].specialization;
        // document.getElementById('r-VAT').value = result.response[result.response.length - 1].vat;
        document.getElementById('r-VAT').value = result.response[result.response.length - 1].vat;

        let dateString = result.response[result.response.length - 1].date;
        console.log('Date String:', dateString);

        let dateObject = new Date(dateString);
        let formattedDate = dateObject.toISOString().split('T')[0];
        document.getElementById('r-date-input1').value = formattedDate;

        document.getElementById('r-source').value = result.response[result.response.length - 1].source;

        let inidateString = result.response[result.response.length - 1].initialDate;
        console.log('Date String:', inidateString);

        let inidateObject = new Date(dateString);
        let iniformattedDate = inidateObject.toISOString().split('T')[0];
        document.getElementById('r-date').value = iniformattedDate;

        document.getElementById('r-initial-fees').value = result.response[result.response.length - 1].initialFees;
        // document.getElementById('r-initial-vat').value = result.response[result.response.length - 1].initialVat;
        document.getElementById('r-initial-totalAmount').value = result.response[result.response.length - 1].initialTotalAmount;

        let fdateString = result.response[result.response.length - 1].finalDate;
console.log('Date String:', fdateString);

let fdateObject = new Date(fdateString);
let fformattedDate = fdateObject.toISOString().split('T')[0];
        document.getElementById('r-final-date').value = fformattedDate;

        document.getElementById('r-finalFees-input').value = result.response[result.response.length - 1].finalFees;
        // document.getElementById('r-finalVat-input').value = result.response[result.response.length - 1].finalVat;
        document.getElementById('r-finalTotalAmount-input').value = result.response[result.response.length - 1].finalTotalAmount;
        document.getElementById('r-date-input1').value = result.response[result.response.length - 1].initialDate;
        document.getElementById('r-total-fees').value = result.response[result.response.length - 1].totalFees;
        // document.getElementById('r-total-VAT').value = result.response[result.response.length - 1].totalVat;
        document.getElementById('r-total-amount').value = result.response[result.response.length - 1].totalTotalAmount;
        document.getElementById('r-monthly-payment').value = result.response[result.response.length - 1].monthlyPayment;
        document.getElementById('r-payable').value = result.response[result.response.length - 1].payable;
        document.getElementById('r-payment-duration').value = result.response[result.response.length - 1].paymentDuration;
        document.getElementById('r-student-signature').value = result.response[result.response.length - 1].studentSignature;
        document.getElementById('r-agc-signature').value = result.response[result.response.length - 1].agcSignature;
        document.getElementById('r-grandTotal').value = result.response[result.response.length - 1].grandTotal;
        document.getElementById('r-courseFee').value = result.response[result.response.length - 1].courseFee;

    })
    .catch((error) => console.error(error));