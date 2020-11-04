
function stringCalc(numbers) {

	var eingabe = String(numbers);
	var stSplit = eingabe.split(',');

	if (stSplit.length > 1) 
		{	
			var addition = 0;

			for(var i = 0; i <= stSplit.length-1; i++)
			{
				addition = parseInt(addition) + parseInt(stSplit[i]);
			}
		
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
