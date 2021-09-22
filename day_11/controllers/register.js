const User = require("../models/user")
const bcrypt = require('bcrypt')


const register = async (req , res) => {
	const { email , password } = req.body;

	try{
		// const exists = await User.findOne({ where : { email }});
		// if(exists)
		if(!email)
		{
			res.status(401).send("Email already exists");
		} 
		else{
			const salt = bcrypt.genSaltSync(10)
			const hash = bcrypt.hashSync(password, salt);
			const newUser = new User ({ email:email.toLowerCase() , password: hash , fullname: 'Gayathri'})
			res.status(200).send("User updated");

		}
	}
	catch(err){  
		res.status(500).send("Error occurred");
	}
}

module.exports = register ;