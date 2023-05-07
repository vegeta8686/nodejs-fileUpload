const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3002;
const uploadRoutes = require("./routes/upload");

// allowing the cors
app.use(cors());

// parsing the request using express.json
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// server running in 3002 port
app.listen(PORT, () => {
  console.log(`server is running at ${PORT}`);
});

//navigating the endpoint / into uploadRoutes page
app.use("/", uploadRoutes);

