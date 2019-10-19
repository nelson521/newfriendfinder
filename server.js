const express = require('express')
const app = express();
const PORT = process.env.PORT || 8080;
// create application/json parser
 app.use(express.static("public"));
// create application/x-www-form-urlencoded parser
// parse various different custom JSON types as JSON
app.use(express.urlencoded({ extended: true }));
 
// parse some custom thing into a Buffer
app.use(express.json())
 
// parse an HTML body into a string
// app.use()

require('./app/routing/apiRoutes.js')(app);
require('./app/routing/htmlRoutes.js')(app);

app.listen(PORT, function(){
  console.log(`App listened on ${PORT}`)
})