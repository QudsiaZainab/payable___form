const puppeteer = require('puppeteer');
const path = require('path');

const Form = require('../models/Form');
const { response } = require('express');

const index = (req, res, next) => {
    Form.find()
        .then(
            response => {
                res.json(
                    {
                        response
                    }
                )
            }
        )
        .catch(
            error => {
                res.json(
                    {
                        message: "An error occured!"
                    }
                )
            }
        )
}

const show = (req, res, next) => {
    let formID = req.body.formID;
    Form.findById(formID)
        .then(response => {
            res.json({
                response
            })
        })
        .catch(error => {
            res.json({
                message: "An error occured"
            })
        })
}

const store = (req, res, next) => {
    let form = new Form({
        name: req.body.name,
        program: req.body.program,
        specialization: req.body.specialization,
        vat: req.body.vat,
        date:req.body.date,
        source: req.body.source,
        initialDate: req.body.initialDate,
        initialFees: req.body.initialFees,
        initialVat: req.body.initialVat,
        initialTotalAmount: req.body.initialTotalAmount,
        finalDate: req.body.finalDate,
        finalFees: req.body.finalFees,
        finalVat: req.body.finalVat,
        finalTotalAmount: req.body.finalTotalAmount,
        totalFees: req.body.totalFees,
        totalVat: req.body.totalVat,
        totalTotalAmount: req.body.totalTotalAmount,
        monthlyPayment: req.body.monthlyPayment,
        payable: req.body.payable,
        paymentDuration: req.body.paymentDuration,
        studentSignature: req.body.studentSignature,
        agcSignature: req.body.agcSignature,
        courseFee: req.body.courseFee,
        grandTotal: req.body.grandTotal,
    })
    form.save()
        .then(response => {
            res.json({
                message: "form added"
            })

        })
        .catch(error => {
            res.json({
                message: "error"
            })
        })
}

const loadReport = async (req, res) => {
    try {
        res.render('report', {})
    } catch (error) {
        res.status().send({ success: false, message: error.message });
    }
}

const loadForm = async (req, res) => {
    try {
        res.render('form', {});
    } catch (error) {
        res.status().send({ success: false, message: error.message });
    }
}

const generateReport = async (req, res) => {
    try {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();

        // Wait for the page to load completely before proceeding
        await page.goto(`${req.protocol}://${req.get('host')}/users/report`, {
            waitUntil: 'networkidle2'
        });

        // Set viewport size
        await page.setViewport({ width: 1920, height: 1080 });

        // Generate PDF
        const todayDate = new Date();
        const pdfPath = path.join(__dirname, "../public/files", `${todayDate.getTime()}.pdf`);

        await page.pdf({
            path: pdfPath,
            printBackground: true,
            format: 'a3',
            displayHeaderFooter: true,
            headerTemplate: `
                <div style="height: 16px;"></div>
            `,
            footerTemplate: `
                <div style="height: 16px;"></div>
            `,
            margin: {
                top: "16px",
                right: "16px",
                bottom: "16px",
                left: "16px"
            }
        });

        await browser.close();

        // Send the generated PDF file as a response
        res.set({
            "Content-Type": "application/pdf",
            "Content-Length": pdfPath.length
        });
        res.sendFile(pdfPath);
    } catch (error) {
        console.error("Error generating PDF:", error);
        res.status(500).send("Error generating PDF");
    }
};


module.exports = {
    loadReport,
    generateReport,
    loadForm,
    index,
    store,
    show
}