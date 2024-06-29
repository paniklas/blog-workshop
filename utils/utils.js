const { default: mongoose } = require('mongoose');

const connection = {};

export const connectToDatabase = async () => {
    try {
        if (connection.isConnected) {
            console.log('Using existing connection');
            return;
        }
        const db = await mongoose.connect(process.env.MONGO);
        connection.isConnected = db.connections[0].readyState;
    } catch (error) {
        console.log('Error connecting to database: ', error);
    }
}
