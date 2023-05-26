const express = require("express");
const app = express();

// Express App Initializing Process

// // 1st way -> using Vanilla JS Function Declaration

// function rootCall (req, res){
//     res.send("Thank your very much");
// }

// app.get("/", rootCall);

// // 2nd way -> Using ES5 Arrow Funtion
// const rootCall = (req,res)=> {
// res.send('Thank you very much')};

// app.get('/', rootCall);

// 3rd Way -> directly pass arrow function as parameter

app.get("/", (req, res) => {
  res.send("I know how to start Node ... YAY");
});

app.listen(4200, () => console.log("Listening to port 4200"));
