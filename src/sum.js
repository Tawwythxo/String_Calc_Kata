
function stringCalc(numbers) {

	var eingabe = String(numbers);
	var stSplit = eingabe.split(',');

	if (stSplit.length > 1) 
		{	
			var addition = parseInt(stSplit[0]) + parseInt(stSplit[1]);
			return addition;
		}
	else 
		{
			var addition = parseInt(stSplit[0]);
			return addition;
		}
}

const sum = stringCalc();

module.exports = { stringCalc };
