var mysql = require('mysql');
var standard_input = process.stdin;
var newusername;
var rl = require('readline-sync');
var newpassword;
var response = '';
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
		newusername = rl.question("Enter New User:");
		newpassword = rl.question("Enter New Password:");
			

			//enter data into database
			var newaccount = "INSERT INTO users (username, password) VALUES ("+"'" + newusername + "'" + "," + "'" + newpassword + "'" + ")";
			con.query(newaccount, function (err, result){
				console.log("New Account Made!");
			});
		}
	});

});