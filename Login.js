var mysql = require('mysql');
var standard_input = process.stdin;
var newusername;
var rl = require('readline-sync');
var newpassword;
var username;
var password;
standard_input.setEncoding('utf-8');

let con = mysql.createConnection({
	host: 'localhost',
	user: 'newuser',
	password: 'password',
	database: 'Login'
})

con.connect(function(err){
	if(err) throw err;
	console.log("Connected To Login Database!");


	standard_input.on('data', function(data){

		if(data === 'register\n'){
		newusername = rl.question("Enter New Username:");
		newpassword = rl.question("Enter New Password:", {hideEchoBack: true});
			

			//enter data into database
			var newaccount = "INSERT INTO users (username, password) VALUES ("+"'" + newusername + "'" + "," + "'" + newpassword + "'" + ")";
			con.query(newaccount, function (err, result){
				console.log("New Account Made!");
			});
		}
		if(data === 'login\n'){
			username = rl.question("Enter Username:");
			password = rl.question("Enter Password:", {hideEchoBack: true});

			//checks database for names
			var login = "SELECT * FROM users WHERE username = " + "'" + username + "'" + "AND password = " + "'" + password + "'";
			con.query(login, function (err, result){
				if(err) throw err;
				console.log(result);
				console.log("login");
			});
		}
	});

});