import express,{Application,NextFunction} from 'express';
import morgan from 'morgan';
import CORS from 'cors';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';


const expressConfig = (app:Application)=>{
  
    app.use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
        next();
    });
    
    app.use(
        CORS({
            origin: '*',
            methods: 'GET, POST, PUT, PATCH, DELETE',
            credentials: true,
        })
    );
    
    //express middlewares
    app.use(morgan('dev'));
    app.use(express.json());
    app.use(cookieParser());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));
    app.use(express.urlencoded({extended:true}))
      
}
export default expressConfig;