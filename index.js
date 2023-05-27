const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(cors());
app.use(bodyParser.json());

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
  const fruit = {
    product: "ada",
    price: 220,
  };
  // res.send(
  //   "I know how to start Node and also I learnded how to use Node Monitor ... YAY"
  // );
  res.send(fruit);
});

app.get("/fruits/banana", (req, res) => {
  res.send({ fruit: "banana", quantity: 1000, price: 100000 });
});

// DYNAMIC PATH

const users = ["Asad", "Moin", "Sabed", "Susmita", "Sohana", "Sabana"];

app.get("/users/:id", (req, res) => {
  // console.log(req.params.id);
  const id = req.params.id;
  const sort = req.query.sort;
  // console.log(sort);
  const name = users[id];
  res.send({ id, name });
});

// POST

app.post("/addUser", (req, res) => {
  console.log("DATA Received", req.body);
  // Server return Message
  const user = req.body;
  user.id = Math.round(Math.random() * 10);
  res.send(user);
});

app.listen(4200, () => console.log("Listening to port 4200"));
