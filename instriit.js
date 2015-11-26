function	data()
{
	var content = {
		"persons":[
				{
				"firstName":"Paul",
				"lastName":"Paulin",
				"age":26,
				"famiStatu":"Celibataire",
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
				"famiStatu":"Mariee",
				"lng":"48.804456",
				"lat":"2.588451",
				"addr":"12 rue Jean Moulin, 75011 Paris",
				"interetCenter":[
				"fÃƒÂªte",
				"foot",
				"promenade"]
				},
				{
				"firstName":"Matthieu",
				"lastName":"Bato",
				"age":55,
				"famiStatu":"Mariee",
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
					"name" : "Bellevue",
					"add": "",
					"lng":"48.806475",
					"lat":"2.616720",
					"type": "Bar"
					},
					{
					"name" : "Cafe de la gare",
					"add": "",
					"lng":"48.805883",
					"lat":"2.617624",
					"type": "Cafe"
					
					},
					{
					"name" : "Cosmic Lazer",
					"add": "",
					"lng":"48.777166",
					"lat":"2.592688",
					"type": "Boite de nuit"
					}
				],
			"restaurant": [
						{
						"name": "Dominos",
						"add": "",
						"lng":"48.795793",
						"lat":"2.604273",
						"type": "Pizzeria"
						},
						{
						"name": "Val Aoste",
						"add": "",
						"lng":"48.796135",
						"lat":"2.604614",
						"type": "Cuisine francaise"
						},
						{
						"name": "Terra Latino",
						"add": "",
						"lng":"48.793211",
						"lat":"2.608428",
						"type": "Specialiter latino"
						}
					],
			"service_public": {
					"commisariat":[ {
						"name" : "Commisariat",
						"add": "centre ville",
						"lng":"48.799030",
						"lat":"2.605287",
						"type": "Municipal"
						}
					],
					"poste": [ {
						"name" : "Poste",
						"add": "centre ville",
						"lng":"48.798454",
						"lat":"2.605381",
						"type": "poste"} 
					],
					"banque":[
						{
						"name" : "BNP",
						"add": "centre ville",
						"lng":"48.799826",
						"lat":"2.607167",
						"type": "Agence"
						},
						{
							"name" : "Credit Mutuel",
							"add": "centre ville",
							"lng":"48.799290",
							"lat":"2.606436",
							"type": "Agence"
						}
					],
					"mairie":[{
						"name" : "Mairie",
						"lng":"48.801447",
						"lat":"2.607751",
						"add": "centre ville",
						"type": "ville"}
					]
				},
			"ecole": [
					{
						"name" : "Jean Moulin",
						"add": "",
						"lng":"48.806978",
						"lat":"2.583972",
						"type": "Primaire"
					},
					{
						"name" : "Concordet",
						"add": "10 rue des follie",
						"lng":"48.802145",
						"lat":"2.620013",
						"type": "College"
					}
				],
			"parc": [
				{
					"name" : "De Gaulle",
					"add": "10 rue lilas",
					"lng":"48.806101",
					"lat":"2.583785",
					"type": "jeux"
				},
				{
					"name" : "Robert Shuman",
					"add": "11 rue lilas",
					"lng":"48.803938",
					"lat":"2.583020",
					"type": "espace vert"
				}
			],
			"epicerie": [
				{
					"name" : "Intermarché",
					"add": "10 rue lilas",
					"lng":"48.807689",
					"lat":"2.617723",
					"type": "super marché"
				},
				{
					"name" : "Simply Market",
					"add": "11 rue lilas",
					"lng":"48.805831",
					"lat":"2.586013",
					"type": "Epicerie"
				},
				{
					"name" : "Carrefour Market",
					"add": "12 rue lilas",
					"lng":"48.799470",
					"lat":"2.607406",
					"type": "Epicerie"
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

function map_leaft()
{
	var content = data();
	var map = L.map('carte').setView([content.persons[0].lng,content.persons[0].lat], 14);
	L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}',
	{
		attribution: 'mapbox://styles/huchetmap/cihdgkp4600j5bwm5yyo3jr0q',
		Zoom: 10,
		id: 'mapbox.mapbox-streets-v6',
		accessToken: 'pk.eyJ1IjoiaHVjaGV0bWFwIiwiYSI6ImNpaGRnOXUwejAwMXp1Mm00M28zb3JtbWUifQ.o8ZoDxmnBANxWlVeaTFhUA'
	}).addTo(map);
	CheckPersons(content.persons, map);

function CheckPersons(dataPers, map)
{
	var myIcon = L.icon({
    iconUrl: 'https://cdn3.iconfinder.com/data/icons/ballicons-free/128/man.png',
    iconSize: [38, 38],
    iconAnchor: [19, 38],
    popupAnchor: [-3, -76]
});
	var ContIcon = L.icon({
    iconUrl: 'https://cdn2.iconfinder.com/data/icons/arrows-free/32/down_nav_arrow_point-128.png',
    iconSize: [38, 38],
    iconAnchor: [19, 38],
    popupAnchor: [-3, -76]
});
	var marker = L.marker([dataPers[0].lng,dataPers[0].lat], {icon: ContIcon}).addTo(map);
		marker.on("click", onContClick);
	for (var i = 1; i < dataPers.length; i++)
	{
		marker = L.marker([dataPers[i].lng,dataPers[i].lat], {icon: myIcon}).addTo(map);
		marker.on("click", onPClick);
	}
}

var nb = 0;

function onPClick(e)
{
	alert("Person");
	var score_position = score_pos();
	var score_interet = score_int();
	if (!this.getPopup())
	{
		this.bindPopup("<div class='poi'>Popup[" + nb + "] First Name: The_Name<br>Last Name: The_LName<br><img src='https://image.freepik.com/photos-libre/smiley_21108723.jpg' height=10%/></br><p>Critere : "+ score_position +"/10</p><p>"+ score_interet +"</p></div>").openPopup();
		nb += 1;
	}
	else
	{
		var the_pop = this.getPopup();
		this.unbindPopup();
		this.bindPopup(the_pop).openPopup();
	}
}

function onContClick(e)
{
	alert("User");
}
}