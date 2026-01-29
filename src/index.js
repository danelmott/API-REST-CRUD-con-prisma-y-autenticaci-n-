import 'dotenv/config';
import cookieParser from 'cookie-parser';
import cors from 'cors'
import express from 'express';
import router from './routes/route.js';
import routerAuth from './routes/loginRoute.js'
import passport from 'passport';
import { authLocalStrategy, authJwtStrategy } from './utils/auth/index.js';


const app = express();

app.use(cors({
    origin: "http://localhost:3000",
    credentials: true
}));

app.use(cookieParser())
app.use(express.json());

//passport
app.use(passport.initialize());

authJwtStrategy()
authLocalStrategy();

app.use("/api",router );

app.use("/auth",routerAuth);


app.listen(process.env.PORT, ()=>{
    console.log(`servidor corriendo en el puerto ${process.env.PORT}`)
})