const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
	"Devsnest",
	"Devsnest",
	"1234567890",
	{
		host: "localhost" ,
		dialect: "postgres"
	}
) ;

sequelize.sync();

(async () => {
	try {
		await sequelize.authenticate();
		console.log("connection established with database");
	}
	catch(err) {
		console.error("Cannot connect to database");
	}
})

module.exports = sequelize ;