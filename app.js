 const express = require("express");

  const bodyparser = require("body-parser");

  const adminRoutes =  require("./routes/admin");
  const  shoRoutes = require("./routes/shop")


   const app = express();

   app.use(bodyparser.urlencoded({extended: false}));

   app.use(adminRoutes)
   app.use(shoRoutes)

app.listen(5000,()=>{
    console.log("the server startes port 5000")
})

