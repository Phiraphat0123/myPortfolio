import express,{Express} from "express"
import logger from "./middleware/logger.js"
import personalInfo from "./routes/api/personalInfo.js"
import myWork from "./routes/api/myWork.js"
import images from "./routes/api/images.js"
const app = express()


// middleware
app.use(logger)

// routes
app.use('/api/personal-info',personalInfo)
app.use('/api/my-work',myWork)
app.use('/api/image',images)


const port:number = 5000

app.listen(port,()=>console.log(`app run on PORT ${port}`))