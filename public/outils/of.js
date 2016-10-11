var data=  {
  "scenarios": [
    {
      "test_case": {
        "familles": [
          {
            "parents": ["individu0"]
          }
        ],
        "foyers_fiscaux": [
          {
            "declarants": ["individu0"]
          }
        ],
        "individus": [
          {
            "date_naissance": "1980-01-01",
            "id": "individu0"
          }
        ],
        "menages": [
          {
            "personne_de_reference": "individu0"
          }
        ]
      },
      "period": "2016"
    }
  ],
  "variables": ["revdisp","rsa","pfam","nivvie"]
};



function prettyPrint() {
    var ugly = document.getElementById('myTextArea').value;
    var obj = JSON.parse(ugly);
    var pretty = JSON.stringify(obj, undefined, 4);
    document.getElementById('myTextArea').value = pretty;
		console.clear();
    console.log(pretty);
}

function affiche(result){
	//console.log(result.value[0]);
    var pretty = JSON.stringify(result.value, undefined, 4);
	document.getElementById('resultTextArea').value = pretty;
}

function afficheError(error){
	if(error.length>0){
		console.log(error);
		var obj = JSON.parse(error);
		var pretty = JSON.stringify(obj, undefined, 4);
		document.getElementById('resultTextArea').value = pretty;
	}
}


dataSend= JSON.stringify(data);
var http = new XMLHttpRequest();
var url = "https://api.openfisca.fr/api/1/calculate";

//http.open("POST", url, true);
//Send the proper header information along with the request
//http.setRequestHeader("Content-type", "application/json");

http.onreadystatechange = function() {//Call a function when the state changes.
    if(http.readyState == 4 && http.status == 200) {
        console.log(http.responseText);
        var myArr = JSON.parse(http.responseText); 
       // console.log(myArr);
        console.log("requete OK");
        affiche(myArr);
    }else{
		afficheError(http.responseText);    
    }
}

function launchQuery(){
	var dataSend = document.getElementById('myTextArea').value;
	console.log(dataSend);
	http.open("POST", url, true);
	//Send the proper header information along with the request
	http.setRequestHeader("Content-type", "application/json");
	http.send(dataSend);
}


