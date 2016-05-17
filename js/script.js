$(function(){

    var characterList = [];

    $('#start').click(function(e){
    	e.preventDefault();

    	var name = document.getElementById('characterName').value;
    	var species = document.getElementById('characterSpecies').value;
    	if(name != '' & species != '-'){

	    	var character = {name:name, species:species};
	    	getCharacteristicsBySpecies(species);
	    	console.log(character);
	    	characterList.push(character);
    		
    	}

    });

    function getCharacteristicsBySpecies (species) {
    	var brawn;
    	var agility;
    	var intellect;
    	var cunning;
    	var willpower;
    	var presence;

    	if(species == 'Bothan'){
    		console.log(species);
    		brawn = 3;
    		agility = 2;
    		intellect = 1;
    		cunning = 1;
    		willpower = 2;
    		presence = 3;
    	};

    	document.getElementById("brawnValue").innerHTML = brawn;
    	document.getElementById("agilityValue").innerHTML = agility;
    	document.getElementById("intellectValue").innerHTML = intellect;
    	document.getElementById("cunningValue").innerHTML = cunning;
    	document.getElementById("willpowerValue").innerHTML = willpower;
    	document.getElementById("presenceValue").innerHTML = presence;

    	return;
    }



});