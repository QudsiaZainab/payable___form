var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!
var yyyy = today.getFullYear();

today = yyyy + '-' + mm + '-' + dd;

document.getElementById("final-date").value = today;

// Set the input field value to today's date
document.getElementById("date-input1").value = today;












var finalFeesInput = document.getElementById("finalFees-input");
// Get the final VAT input field
var finalVatInput = document.getElementById("finalVat-input");
// Get the final total amount input field
var finalTotalAmountInput = document.getElementById("finalTotalAmount-input");
var initialFeesInput = document.getElementById("initial-fees");
var initialVatInput = document.getElementById("initial-vat");
var initialTotalAmountInput = document.getElementById("initial-totalAmount");

var totalFeesInput = document.getElementById("total-fees");
var totalVatInput = document.getElementById("total-VAT");
var totalAmountInput = document.getElementById("total-amount");

// Add event listener to final fees input field
finalFeesInput.addEventListener("keydown", function () {

    // finalVatInput.value = "NaN";
    // finalTotalAmountInput.value = "NaN";

    var initialFees = parseFloat(initialFeesInput.value) || 0;
    var finalFees = parseFloat(finalFeesInput.value) || 0;
    var totalFees = initialFees + finalFees;
    totalFeesInput.value = totalFees.toFixed(2);

    // var initialVat = parseFloat(initialVatInput.value) || 0;
    // var finalVat = parseFloat(finalVatInput.value) || 0;
    // var totalVat = initialVat + finalVat;
    // totalVatInput.value = totalVat.toFixed(2);

    var initialTotalAmount = parseFloat(initialTotalAmountInput.value) || 0;
    var finalTotalAmount = parseFloat(finalTotalAmountInput.value) || 0;
    var totalTotalAmount = initialTotalAmount + finalTotalAmount;
    totalAmountInput.value = totalTotalAmount.toFixed(2);

});


initialFeesInput.addEventListener("keydown", function () {

    // initialVatInput.value = "NaN";
    // initialTotalAmountInput.value = "NaN";



    // var initialVat = parseFloat(initialVatInput.value) || 0;
    // var finalVat = parseFloat(finalVatInput.value) || 0;
    // var totalVat = initialVat + finalVat;
    // totalVatInput.value = totalVat.toFixed(2);

    var initialTotalAmount = parseFloat(initialTotalAmountInput.value) || 0;
    var finalTotalAmount = parseFloat(finalTotalAmountInput.value) || 0;
    var totalTotalAmount = initialTotalAmount + finalTotalAmount;
    totalAmountInput.value = totalTotalAmount.toFixed(2);

});



function updateTotalFees() {
    var initialFees = parseFloat(initialFeesInput.value) || 0;
    var finalFees = parseFloat(finalFeesInput.value) || 0;
    var totalFees = initialFees + finalFees;
    initialTotalAmountInput.value = initialFees;
    totalFeesInput.value = totalFees.toFixed(2);

    var initialTotalA = parseFloat(initialTotalAmountInput.value) || 0;
    var finalTotalA = parseFloat(finalTotalAmountInput.value) || 0;
    var totalA = initialTotalA + finalTotalA;
    totalAmountInput.value = totalA.toFixed(2);
}

// Add event listener to initial fees input field for input event
initialFeesInput.addEventListener("input", updateTotalFees);


function updateTotalAmount(){
    var initialTotalA = parseFloat(initialTotalAmountInput.value) || 0;
    var finalTotalA = parseFloat(finalTotalAmountInput.value) || 0;
    var totalA = initialTotalA + finalTotalA;
    totalAmountInput.value = totalA.toFixed(2);
}

initialTotalAmountInput.addEventListener("input", updateTotalAmount)

var vvt = document.getElementById('VAT');
var ccf = document.getElementById('f-courseFee');

function updateGrandTotal(){
    var totalCF = parseFloat(document.getElementById('f-courseFee').value) || 0;
    var vt = parseFloat(document.getElementById('VAT').value) || 0;
    var gt = totalCF + vt/100;
    var grt = document.getElementById('f-grandTotal');
    
    grt.value = gt.toFixed(2);
}

vvt.addEventListener("input", updateGrandTotal);
ccf.addEventListener("input", updateGrandTotal);


const button = document.getElementById('btn');

button.addEventListener('click', function () {
    var fname = document.getElementById('f-name').value;
    var fprogram = document.getElementById('f-program').value;
    var fspecialization = document.getElementById('f-specialization').value;
    var VAT = document.getElementById('VAT').value;
    var date = document.getElementById('date-input1').value;
    var source = document.getElementById('f-source').value;
    var initialDate = document.getElementById('initial-date').value;
    var initialFees = document.getElementById('initial-fees').value;
    // var initialVat = document.getElementById('initial-vat').value;
    var initialTotalAmount = document.getElementById('initial-totalAmount').value;
    var finalDate = document.getElementById('final-date').value;
    var finalFees = document.getElementById('finalFees-input').value;
    // var finalVat = document.getElementById('finalVat-input').value;
    var finalTotalAmount = document.getElementById('finalTotalAmount-input').value;
    var totalFees = document.getElementById('total-fees').value;
    // var totalVat = document.getElementById('total-VAT').value;
    var totalTotalAmount = document.getElementById('total-amount').value;
    var monthlyPayment = document.getElementById('f-monthly-payment').value;
    var payable = document.getElementById('f-payable').value;
    var paymentDuration = document.getElementById('f-payment-duration').value;
    var studentSignature = document.getElementById('f-student-signature').value;
    var agcSignature = document.getElementById('f-agc-signature').value;
    var grandTotal = document.getElementById('f-grandTotal').value;
    var courseFee = document.getElementById('f-courseFee').value;


    if (fname === "" || fprogram === "" || fspecialization === "" || VAT === "" || date === null || source === "" || initialDate === "" || initialFees === "" || initialTotalAmount === "" || finalDate === null || finalFees === ""  || finalTotalAmount === "" || totalFees === ""  || totalTotalAmount === "" || monthlyPayment === "" || payable === "" || paymentDuration === "" || studentSignature === "" || agcSignature === "" || grandTotal === "" || courseFee === "") {
        event.preventDefault(); // Form submission ko rokne ke liye
        alert('Please fill out this form'); 
    } else {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "name": fname,
            "program": fprogram,
            "specialization": fspecialization,
            "vat": VAT,
            "date": date,
            "source": source,
            "initialDate": initialDate,
            "initialFees": initialFees,
            // "initialVat": initialVat,
            "initialTotalAmount": initialTotalAmount,
            "finalDate": finalDate,
            "finalFees": finalFees,
            // "finalVat": finalVat,
            "finalTotalAmount": finalTotalAmount,
            "totalFees": totalFees,
            // "totalVat": totalVat,
            "totalTotalAmount": totalTotalAmount,
            "monthlyPayment": monthlyPayment,
            "payable": payable,
            "paymentDuration": paymentDuration,
            "studentSignature": studentSignature,
            "agcSignature": agcSignature,
            "grandTotal": grandTotal,
            "courseFee" : courseFee,
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        fetch("http://localhost:3000/api/store", requestOptions)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((result) => console.log(result))
            .catch((error) => {
                // Error ko handle karte hue aap jo bhi action lena chahte hain wo yahaan kar sakte hain
                console.error(error);
                // For example, you can prevent default behavior here

            });


        window.open('/users/report_generate');
    }


})