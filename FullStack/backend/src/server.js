import { app } from "./index.js";
import { connectDB } from "./db/connectDB.js";

const PORT = process.env.PORT || 8000;

app.listen(PORT, async () => {
    console.log(`Server started at PORT : ${PORT}`);
    try {
        await connectDB();
    } catch (error) {
        console.log('MongoDB connection Failed !!! \n', error);
    }
});

