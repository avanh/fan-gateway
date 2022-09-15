const express = require('express');
const rateLimit = require('express-rate-limit')
const rpcMethods = require('./routes/api');

const app = express();

const apiLimiter = rateLimit({
	windowMs: 1 * 60 * 1000, // 1 minutes
	max: 1, // Limit each IP to 1 requests per `window` (here, per 1 minutes)
	standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers
})

app.use('/fan/api', apiLimiter);
app.use('/fan/api', rpcMethods);

const port = 3000;

app.listen(port, () => console.log(`Listening on port ${port}`))
