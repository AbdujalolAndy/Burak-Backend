import dotenv from "dotenv";
dotenv.config();

import mongoose from "mongoose";
import app from "./app";


mongoose.connect(process.env.MONGODB_URL as string, {}).then(data => {
    console.log("MongoDB connection suceed");
    const PORT = process.env.process ?? 3003;
    app.listen(PORT, () => {
        console.info(`The server is successfully running on port ${PORT}`);
        console.info(`Admin Backend side is listening on http://localhost:${PORT}/admin`)
    })
}).catch(err => console.log(`ERROR on mongoDB connection, ${err.message}`))

