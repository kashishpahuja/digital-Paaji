const express = require('express')
const cors = require('cors')
const reviewRoutes = require('./routes/reviewRoutes')

const app= express();

app.use(cors());
app.use(express.json());

app.use('/reviews',reviewRoutes);


app.listen(5000,()=>{
    console.log('Server running on http://localhost:5000/reviews/')
})