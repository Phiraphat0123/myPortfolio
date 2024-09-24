import express from "express";
import logger from "./middleware/logger.js";
import personalInfo from "./routes/api/personalInfo.js";
import myWork from "./routes/api/myWork.js";
const app = express();
// middleware
app.use(logger);
// routes
app.use('/api/personal-info', personalInfo);
app.use('/api/my-work', myWork);
const port = 5000;
app.listen(port, () => console.log(`app run on PORT ${port}`));
