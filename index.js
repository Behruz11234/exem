// const express = require("express")
// const cors = require("cors")
// require("dotenv").config()
// const cookieParser = require("cookie-parser")
// const connectDB = require("./config/db.config")
// const AuthRouter = require("./router/auth.routes")
// const UserRouter = require("./router/user.routes")
// const errorMiddleware = require("./middleware/error.middleware")
// const CotegoryRouter = require("./router/cotegory.routes")
// const { UploadRouter } = require("./router/upload.routes")
// const { SuperAdminRouter } = require("./router/superadmin.routes")
// const MadelRouter = require("./router/madel.routes")
// const { AdminPanelRouter } = require("./router/adminPanel.routes")
// const logger = require("./utils/logger")
// const SevedRouter = require("./router/saved.routes")

// const app = express()

// const PORT = process.env.PORT || 4001
// app.use(cors({origin: true, credentials: true}))
// app.use(express.json())
// app.use(cookieParser())

// connectDB()

// app.use("/images", express.static("upload/images"))

// app.use(AuthRouter)
// app.use(UserRouter)
// app.use(CotegoryRouter)
// app.use(UploadRouter)
// app.use(SuperAdminRouter)
// app.use(MadelRouter)
// app.use(AdminPanelRouter)
// app.use(SevedRouter)

// app.use(errorMiddleware)

// app.listen(4001, () => {
//   console.log("Server running");
// });


// const express = require("express");
// const app = express();

// const uploadRouter = require("./router/upload.routes");

// // middleware
// app.use(express.json());

// // routes
// app.use("/api", uploadRouter); // 👈 SHU TO‘G‘RI

// app.listen(3000, () => {
//   console.log("Server running on port 3000");
// });

// console.log(uploadRouter);


const express = require("express");  // faqat bir marta!
const fs = require("fs");
const path = require("path");

const app = express();

// uploads papkasini yaratish
const uploadDir = path.join(__dirname, "uploads");
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

const uploadRouter = require("./router/upload.routes");

// middleware
app.use(express.json());

// routes
app.use("/api", uploadRouter);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});