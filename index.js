const express = require('express')
const app = express()
const indexRoute = require('./routes');
const cors = require('cors')
app.use(cors());
app.use(express.json());
app.use("/images",express.static('images'));
const {Product} = require("./models/index")
const {Cart} = require("./models/index")

app.use(indexRoute);

console.log("Product",Cart);

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`)
});
