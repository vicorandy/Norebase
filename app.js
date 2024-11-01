require('express-async-errors');
require('dotenv').config();
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const express = require('express');
const notFoundError = require('./MiddelWare/notFound');
const articleRouter = require('./Components/Articles/Routes')

const app = express();
app.get('',function(req,res){
    res.status(200)
    res.json({message:'Connected to the server'})
})
// request body paser
app.use(express.json());

// swagger documentation
const swaggerDocument = YAML.load('./swagger.yaml');
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Routes
app.use('/api/v1/articles',articleRouter)
app.use(notFoundError);



module.exports = app;
