function stringCalc(numbers) {
var stSplit;

	var eingabe = String(numbers);
	var neuesTZ = eingabe.search("//");
	
	if (neuesTZ !== -1) {

		stSplit = eingabe.split(/,|\n|;/);
		stSplit = stSplit.slice(1);

	} else {

		stSplit = eingabe.split(/,|\n/);

	}
	
	var negative = stSplit.filter(element => element < 0);

	stSplit = stSplit.filter(function(x) {
			return x != null && x != "";
		});

	try {
		//große Zahlen < 1000 herausfiltern
		stSplit = stSplit.filter(element => element < 1000);

		if(negative.length !== 0) {
			throw new Error("negatives not allowed: ");
		}

		if (stSplit.length > 1) {	
			var addition = 0;

			for(var i = 0; i <= stSplit.length-1; i++) {
			addition = parseInt(addition) + parseInt(stSplit[i]);
			}
		
				return addition;
		} else {
			var addition = parseInt(stSplit[0]);
			return addition;
		}
	}
	catch (e) {
		console.log(e + negative);
	}

}


var readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

var response = rl.question("Bitte gib Zahlen in dem Format ein: //;[Zahl];[Zahl];[Zahl]; ... oder [Zahl],[Zahl], ... oder durch Absaetze: ", answer);


function answer(response) {
	const sum = stringCalc(response);
	console.log(sum);
	rl.close ()
}


module.exports = { stringCalc };