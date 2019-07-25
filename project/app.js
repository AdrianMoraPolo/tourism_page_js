const express= require('express');
const path = require('path');
const morgan = require('morgan');
const mysql=require('mysql');
const myConnection = require('express-myconnection');

const userRouter = require('./src/routes/admin');
const inicioRouter = require('./src/routes/body');
const bookingsRouter = require('./src/routes/bookings');

const app = express();

app.set('port', process.env.PORT || 3000 );

app.set('view engine', 'ejs')

app.set('views', path.join(__dirname, 'src/views'))

app.use(morgan('dev'))

//conexion
app.use(myConnection(mysql, {
   host:'localhost',
   user:'root',
   password:'1234',
   port:3306,
   database :'proyecto1'
}));

app.use(express.urlencoded({extended:false}))

app.use('/', inicioRouter);
app.use('/admin', userRouter);
app.use('/bookings', bookingsRouter);

app.use(express.static(path.join(__dirname, 'src/public')));



app.listen(app.get('port'), () =>{
   console.log('Conectado')
})