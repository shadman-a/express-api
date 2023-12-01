const express = require('express');
const app = express();
app.use(express.json());

app.post('/credit-check', (req, res) => {
    const { name, ssn, birthday, income } = req.body;

    // Here you can add logic to process the data and determine the credit score
    // For simplicity, we are returning a static response

    const response = {
        creditScore: 720,
        decision: 'approved'
    };

    res.json(response);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
