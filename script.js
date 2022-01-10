/*var jesti = document.getElementById(jesti);
var spavati = document.getElementById(spavati);
var raditi = document.getElementById(raditi);
var tusiratise = document.getElementById(tusiratise);*/



function kviz(clicked_id) {
	if (clicked_id == "jesti") {
		 /*document.getElementById('jesti').style.backgroundColor='#ff0000';*/
	 	 document.getElementById('jesti').style.color='white';
	 	 document.getElementById('rezultat').innerHTML="Netačan odgovor";
	 	 document.getElementById('rezultat').style.color='white';
	 	 jesti.style.cssText = "animation: background-fade 3s;";
	} else if (clicked_id == "spavati") {
		 /*document.getElementById('spavati').style.backgroundColor='#ff0000';*/
	 	 document.getElementById('spavati').style.color='white';
	 	 document.getElementById('rezultat').innerHTML="Netačan odgovor";
	 	 document.getElementById('rezultat').style.color='white';
	 	 spavati.style.cssText = "animation: background-fade 3s;";
	} else if(clicked_id == "raditi") {
		 document.getElementById('raditi').style.backgroundColor='#ff0000';
	 	 document.getElementById('raditi').style.color='white';
	 	 document.getElementById('rezultat').innerHTML="Netačan odgovor";
	 	 document.getElementById('rezultat').style.color='white';
	 	 raditi.style.cssText = "animation: background-fade 3s;";
	}
	 else if(clicked_id == "tusiratise") {
	 	 document.getElementById('tusiratise').style.backgroundColor='#228b22';
	 	 document.getElementById('tusiratise').style.color='white';
	 	 document.getElementById('rezultat').innerHTML="Tačan odgovor";
	 	 document.getElementById('rezultat').style.color='white';
	 	 tusiratise.style.cssText = "animation: background-fade2 3s;";

	}
  /*alert(clicked_id);*/
	console.log("Hello");
}

