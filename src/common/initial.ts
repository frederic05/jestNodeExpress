import dotenv from 'dotenv';
dotenv.config()
const defaultParam = {
    Port: process.env.PORT,
    Adress: process.env.ADRESS
}


export default defaultParam;