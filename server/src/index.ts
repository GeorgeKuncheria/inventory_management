import express  from "express";
import bodyParser from "body-parser";
import cors from 'cors';
import helmet from "helmet";
import morgan from "morgan";
import dotenv from "dotenv";
import DashboardRoutes from './routes/dashboardRoute';


/* ROUTE IMPORTS */




/* CONFIGURATIONS */
dotenv.config();
const app=express();

app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({policy:"cross-origin"}));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(cors());




/*ROUTES */
app.use('/dashboard',DashboardRoutes);

/*SERVER */

const port=process.env.PORT || 3001;
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})