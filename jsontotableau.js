var axios = require('axios');
const express = require('express')
const app = express()
const port = 3000

app.get('/incidentes', (req, res) => {
    
    
             var config = {
                    method: 'get',
                    url: 'https://api.samanage.com/incidents/',
                    headers: { 
                    'X-Samanage-Authorization': 'Bearer dGVjaC5hZHZpc29yXzJAYmlzb2x1dGlvbnMuY29tLmVj:eyJhbGciOiJIUzUxMiJ9.eyJ1c2VyX2lkIjo4NzI0MzY4LCJnZW5lcmF0ZWRfYXQiOiIyMDIyLTEwLTE5IDE1OjA2OjAwIn0.qTxZpNsi1xdZgaDJzEFXZSoT1M1myS2ZoC7UfI89x4JC-LUwxWCb_FIpbQRH68k-yVKXarDOfRElx1YsIr2nBg', 
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