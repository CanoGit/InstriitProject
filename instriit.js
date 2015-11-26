function	data()
{
	var content = {
		"persons":[
				{
				"firstName":"Paul",
				"lastName":"Paulin",
				"age":26,
				"famiStatu":"Célibataire",
				"lng":"48.804094",
				"lat":"2.604160",
				"addr":"13 rue de Paris, 75010 Paris",
				"critere":[
				"ecole",
				"commisariat",
				"banque",
				"piscine",
				"parc"],
				"interetCenter":[
				"foot",
				"music",
				"dance"]
				},
				{
				"firstName":"Marie",
				"lastName":"Clavier",
				"age":32,
				"famiStatu":"Mariée",
				"lng":"48.804456",
				"lat":"2.588451",
				"addr":"12 rue Jean Moulin, 75011 Paris",
				"interetCenter":[
				"fête",
				"foot",
				"promenade"]
				},
				{
				"firstName":"Matthieu",
				"lastName":"Bato",
				"age":55,
				"famiStatu":"Marié",
				"lng":"48.807543",
				"lat":"2.598275",
				"addr":"9 rue du savetier, 75017 Paris",
				"interetCenter":[
				"course hippique",
				"animaux",
				"voiture"]
				}
			],
		"pos":{
			"critere_pos":[
				"bar",
				"restaurant",
				"commisariat",
				"ecole",
				"parc",
				"poste",
				"banque",
				"epicerie",
				"mairie"
			],
			"bar":[
					{
					"name" : "le sentinel",
					"add": "", 
					"type": "soul"
					},
					{
					"name" : "la gaite",
					"add": "",
					"type": "soul"
					
					},
					{
					"name" : "le patio",
					"add": "",
					"type": "soul"
					}
				],
			"restaurant": [
						{
						"name": "le lyonnais",
						"add": "",
						"type": "bouchon lyonnais"
						},
						{
						"name": "le limousin",
						"add": "",
						"type": "Cuisine francaise"
						},
						{
						"name": "Aux turc",
						"add": "",
						"type": "specialités Grec"
						}
					],
			"service_public": {
					"commisariat":[ {
						"name" : "com",
						"add": "centre ville",
						"type": "municipal"
						}
					],
					"poste": [ {
						"name" : "composte",
						"add": "centre ville",
						"type": "poste"}
					],
					"banque":[
						{
						"name" : "populaire",
						"add": "centre ville",
						"type": "distrubuteur"
						},
						{
							"name" : "caiseepargne",
							"add": "centre ville",
							"type": "agence"
						}
					],
					"mairie":[{
						"name" : "marie11",
						"add": "centre ville",
						"type": "quartier"}
					]
				},
			"ecole": [
					{
						"name" : "etna",
						"add": "RER",
						"type": "ingenieur"
					},
					{
						"name" : "coudoin",
						"add": "10 rue des follie",
						"type": "maternelle"
					}
				],
			"parc": [
				{
					"name" : "mariecu",
					"add": "10 rue lilas",
					"type": "jeux"
				},
				{
					"name" : "cumarie",
					"add": "11 rue lilas",
					"type": "espace vert"
				}
			],
			"epicerie": [
				{
					"name" : "baguepi",
					"add": "10 rue lilas",
					"type": "boulangerie"
				},
				{
					"name" : "bonmarche",
					"add": "11 rue lilas",
					"type": "epicerie"
				},
				{
					"name" : "carreefourmarket",
					"add": "12 rue lilas",
					"type": "epicerie"
				}
			]
		}
	};
	return (content);
}

function	score_pos()
{
	var content = data();
	var score = 0;
	for (var i = 0; content.persons[0].critere[i] != undefined; i++)
	{
		critere_choix = content.persons[0].critere[i];
		for (var j = 0; content.pos.critere_pos[j] != undefined; j++)
		{
			critere_pos = content.pos.critere_pos[j];
			if (critere_pos == critere_choix)
			{
				score++;
			}
		}
	}
	score = ((score * 10) / i);
	return (score);
}

function	score_int()
{
	var content = data();
	var score = "";
	var y = 1;
	for (var i = 0; content.persons[0].interetCenter[i] != undefined; i++)
	{
		centre_int_pers = content.persons[0].interetCenter[i];
		for (var u = 1; y != 0; u++)
		{
			for (var j = 0; content.persons[u].interetCenter[j] != undefined; j++)
			{
				critere_int = content.persons[u].interetCenter[j];
				age_at = content.persons[u].age;
				age_cp_1 = age_at - 2;
				age_cp_2 = age_at + 2;
				if (centre_int_pers == critere_int)
				{
					if (content.persons[0].age <= age_cp_2 && content.persons[0].age >= age_cp_1 && content.persons[u].famiStatu == content.persons[0].famiStatu)
						score = "" + content.persons[u].firstName + " " + content.persons[u].lastName + " de " + content.persons[u].age + " ans.</br> A le meme centre d'interet que vous, '" + content.persons[u].interetCenter[j] + "'.</br>Aux " + content.persons[u].addr + ".";
					y = 0;
					break;
				}
			}
		}
	}
	return (score);
}

function map_leaft(data)
{
	var map = L.map('carte').setView([48.8592, 2.3417], 13);
	L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}',
	{
		attribution: 'mapbox://styles/huchetmap/cihdgkp4600j5bwm5yyo3jr0q',
		Zoom: 10,
		id: 'mapbox.mapbox-streets-v6',
		accessToken: 'pk.eyJ1IjoiaHVjaGV0bWFwIiwiYSI6ImNpaGRnOXUwejAwMXp1Mm00M28zb3JtbWUifQ.o8ZoDxmnBANxWlVeaTFhUA'
		}).addTo(map);
	var marker = L.marker([48.8592, 2.3417]).addTo(map);
	map.on("click", onMapClick);

function onMapClick(e)
{
	var marker = L.marker([e.latlng.lat,e.latlng.lng]).addTo(map);
	marker.on("click", onMClick);
}

var nb = 0;

function onMClick(e)
{
<<<<<<< .mine
	alert(this.getLatLng().lat + " , " + this.get().lng);
	/*if (!this.getPopup())
||||||| .r12
	if (!this.getPopup())
=======
	var score_position = score_pos();
	var score_interet = score_int();
	if (!this.getPopup())
>>>>>>> .r14
	{
		this.bindPopup("<div class='poi'>Popup[" + nb + "] First Name: The_Name<br>Last Name: The_LName<br><img src='https://image.freepik.com/photos-libre/smiley_21108723.jpg' height=10%/></br><p>Critere : "+ score_position +"/10</p><p>"+ score_interet +"</p></div>").openPopup();
		nb += 1;
	}
	else
	{
		var the_pop = this.getPopup();
		this.unbindPopup();
		this.bindPopup(the_pop).openPopup();
	}*/
}

function toto()
{
	
}
}