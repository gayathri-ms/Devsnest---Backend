const express=require("express");

var app=express();

app.get("/",(req,res)=> {
	// res.sendStatus(510)
	// res.send();

	res.status(400).send(req.query);
})

const sample = (req,res) => {
	res.send("hello");
}

// app.put("/",sample);
// app.post("/",sample);
// app.delete("/",sample);

// app.get("/ab+cd",sample); //abbbbbb..cd
// app.get("/ab?cd",sample); //acd or abcd
// app.get("/ab*cd",sample); //abcd or abrandomvaluescd

app.get("/user/:id/topic/:title" , (req,res) => {
	res.send(req.params);
});


app.listen(5000);