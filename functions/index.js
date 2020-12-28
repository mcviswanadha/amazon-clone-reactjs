const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');

const stripe = require('stripe')('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')

// API 
//example API
//http://localhost:5001/challenge-b4072/us-central1/api)


// - App config
const app = express();

// - Middleware
app.use(cors({ origin: true }));
app.use(express.json());

// - API route
app.get('/', (request, response) => response.status(200).send('hello world'))

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;

    console.log('Payment request received BOOM!!! >>>>>>', total)
    
    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, //sub units of the currecy
        currency: "usd",
    })

    //OC - Created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })

})

// - Listen command
exports.api = functions.https.onRequest(app)


