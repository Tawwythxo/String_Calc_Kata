
function stringCalc(numbers) {
	
	var eingabe = String(numbers);
	var stSplit = eingabe.split(/,|\n/);

	//Leere String-Elemente im Array löschen und herausfiltern
	
	stSplit = stSplit.filter(function(x) 
		{
			return x != null && x != "";
		});

	console.log(stSplit);

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
