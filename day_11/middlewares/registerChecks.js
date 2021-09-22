const { emailValidate , passwordValidate } = require("../utils/validate")

const registerCheck = (req,res,next) => {
	const { email , password , confirmPassword } = req.body;

	if( typeof email === 'string' &&
		typeof password === 'string' &&
		typeof confirmPassword === 'string' &&
		email.length > 0 &&
		password.length > 0 &&
		password === confirmPassword && 
		emailValidate(email) &&
		passwordValidate(password) 
	)
	{
		next();
	}
	else{
		res.status(401).send("Invalid Details");
	}
}

module.exports = registerCheck ;