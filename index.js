var axios = require('axios');
require('dotenv').config();
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    
    
             var config = {
                    method: 'get',
                    url: 'https://api.samanage.com/incidents/',
                    headers: { 
                    'X-Samanage-Authorization': process.env.TOKEN, 
                    'Accept': 'application/json'
                    }
                };
                
                axios(config)
                .then(function (response) {
                    
                    res.send(response.data)
                })
                .catch(function (error) {
                    console.log(error);
                });
                
                
            })



  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })