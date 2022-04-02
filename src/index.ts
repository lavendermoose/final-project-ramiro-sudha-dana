// require the express module
import express from "express";

// require the cors module
import cors from "cors";

import authroutes from "./routes/authroutes";
import tripsroutes from "./routes/tripsroutes";
import suitsroutes from "./routes/suitsroutes";

// creates an instance of an Express server
const app = express();

// enable Cross Origin Resource Sharing so this API can be used from web-apps on other domains
app.use(cors());

// allow POST and PUT requests to use JSON bodies
app.use(express.json());

app.use("/", authroutes);
app.use("/", tripsroutes);
app.use("/", suitsroutes);

// define the port
const port = 3000;

// run the server
app.listen(port, () => console.log(`Listening on port: ${port}.`));
