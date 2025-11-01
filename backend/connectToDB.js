import mongoose from 'mongoose';

const URL = process.env.MONGO_URL;

async function connectToDB() {
    await mongoose.connect(URL)
        .then(() => console.log("Connected to MongoDB!"))
        .catch(
            (err) => {
                console.log(err);
                process.exit(1);
            }
        )
}

export default connectToDB;