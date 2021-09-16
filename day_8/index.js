const express=require("express");
const app=express();
const bodyParser = require("body-parser");

app.get("/",(req,res) => {
	res.status(200).send(req.query);
})

// encodeURIComponent converts special characters to a valid string

// app.get("/:name",(req,res) => {
// 	res.send(req.params);
// })

// app.get("/user/:name",(req,res,next) => {
// 	if(req.params.name === "admin")
// 		next();
// 	else
// 		res.send("You are not an admin");
// }, (req,res) => {
// 	res.send("Am the admin of this server!!!");
// });

const checkAdmin = (req,res,next) => {
	if(req.query.name === "admin")
		next();
	else
		res.send("You are not an admin");
};

// app.use(checkAdmin);

const response = (req,res) => {
	res.send("Am the admin of this server!!!");
};

// const checkAdmin = (req,res,next) => {
// 	if(req.params.name === "admin")
// 		next();
// 	else
// 		res.send("You are not an admin");
// };

// app.get("/user/:name" , checkAdmin , response);


app.get("/user" , response);

app.get("/hey" , (req,res) => {
	res.send("Am also working!!!")
});

// app.use(bodyParser.urlencoded({ extented:true}));
// app.use(bodyParser.json());

app.use(express.urlencoded());
app.use(express.json({ extented : true}));

app.post("/", (req,res) => {
	res.send( req.body);
} )

app.listen(5000);