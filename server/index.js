require('dotenv').config(); 

const express = require('express'),
        app = express(),
    massive = require('massive'),
    cors = require('cors'),
    ctrl = require('./controller'),
    {SERVER_PORT, CONNECTION_STRING} = process.env;



app.use(cors()); 
app.use(express.json()); 



massive(CONNECTION_STRING)
    .then(db=>{
        app.set('db', db)
        console.log('Database is connected')
    })

//ENDPOINTS: 
app.get('/api/inventory', ctrl.getAll); 
app.post('/api/product', ctrl.create); 
app.delete('/api/delete/:id', ctrl.delete); 
app.get('/api/productOne/:id', ctrl.oneProduct);
app.put('/api/update/:id', ctrl.update);



app.listen(SERVER_PORT, ()=>console.log(`Server is running on ${SERVER_PORT}`)); 