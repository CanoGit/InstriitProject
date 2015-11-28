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
				"img":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAKbAAAAJDM3MDkxZjBhLTgwOGItNGJhOS1hMWZjLWYxODI5ODQ4OTM1YQ.jpg",
				"critere":[
				"ecole",
				"parc",
				"commisariat",
				"banque",
				"piscine"],
				"interetCenter":[
				"foot",
				"music",
				"dance"]
				},
				{
				"firstName":"Marie",
				"lastName":"Clavier",
				"age": 28,
				"famiStatu":"Celibataire",
				"img" : "imguser/user2.png",
				"lng":"48.804456",
				"lat":"2.588451",
				"addr":"12 rue Jean Moulin, 75011 Paris",
				"interetCenter":[
				"fete",
				"foot",
				"promenade"]
				},
				{
				"firstName":"Matthieu",
				"lastName":"Bato",
				"age": 55,
				"famiStatu":"Mariee",
				"img" : "imguser/user1.png",
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
				{"type":"bar", "icon":"https://cdn2.iconfinder.com/data/icons/restaurant-1/100/martini_dinner_lunch_restaurant_vegetables_drink-128.png"},
				{"type" : "restaurant", "icon" : "https://cdn0.iconfinder.com/data/icons/kameleon-free-pack/110/Food-Dome-128.png"},
				{"type" : "commisariat", "icon" : "https://cdn0.iconfinder.com/data/icons/fire/106/police_car-128.png"},
				{"type" : "ecole", "icon" : "https://cdn2.iconfinder.com/data/icons/mixed-1st-volume/512/tabla-128.png"},
				{"type" : "parc", "icon" : "https://cdn2.iconfinder.com/data/icons/flat-jewels-icon-set/128/0002_Tree.png"},
				{"type" : "poste", "icon" : "https://cdn4.iconfinder.com/data/icons/ballicons-2-free/100/669348-letter-128.png"},
				{"type" : "banque", "icon" : "https://cdn4.iconfinder.com/data/icons/e-commerce-and-shopping-3/500/credit-card-128.png"},
				{"type" : "epicerie", "icon" : "https://cdn4.iconfinder.com/data/icons/e-commerce-and-shopping-3/500/store-building-128.png"},
				{"type" : "mairie", "icon" : "https://cdn4.iconfinder.com/data/icons/banking-and-finance/500/bank-building-128.png"}
			],
			"bar":[
					{
					"name" : "Bellevue",
					"addr": "",
					"lng":"48.806475",
					"lat":"2.616720",
					"type": "Bar"
					},
					{
					"name" : "Cafe de la gare",
					"addr": "",
					"lng":"48.805883",
					"lat":"2.617624",
					"type": "Cafe"
					
					},
					{
					"name" : "Cosmic Lazer",
					"addr": "",
					"lng":"48.777166",
					"lat":"2.592688",
					"type": "Boite de nuit"
					}
				],
			"restaurant": [
						{
						"name": "Dominos",
						"addr": "",
						"lng":"48.795793",
						"lat":"2.604273",
						"type": "Pizzeria"
						},
						{
						"name": "Val Aoste",
						"addr": "",
						"lng":"48.796135",
						"lat":"2.604614",
						"type": "Cuisine francaise"
						},
						{
						"name": "Terra Latino",
						"addr": "",
						"lng":"48.793211",
						"lat":"2.608428",
						"type": "Specialiter latino"
						}
					],
			"commisariat":[
						{
						"name" : "Commisariat",
						"addr": "centre ville",
						"lng":"48.799030",
						"lat":"2.605287",
						"img":"http://www.francetvinfo.fr/image/74vou44f4-721a/908/510/1448355.jpg",
						"type": "Municipal"
						}
					],
			"poste": [ {
						"name" : "Poste",
						"addr": "centre ville",
						"lng":"48.798454",
						"lat":"2.605381",
						"type": "poste",
						"img":"http://images-02.delcampe-static.net/img_large/auction/000/081/620/368_001.jpg"
						} 
					],
			"banque":[
						{
						"name" : "BNP",
						"addr": "centre ville",
						"lng":"48.799826",
						"lat":"2.607167",
						"type": "Agence"
						},
						{
							"name" : "Credit Mutuel",
							"addr": "centre ville",
							"lng":"48.799290",
							"lat":"2.606436",
							"type": "Agence"
						}
					],
			"mairie":[{
						"name" : "Mairie",
						"lng":"48.801447",
						"lat":"2.607751",
						"addr": "centre ville",
						"type": "ville",
						"img":"https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Hotel_de_ville_de_Pontault-Combault.jpg/280px-Hotel_de_ville_de_Pontault-Combault.jpg"
						}
					],
			"ecole": [
					{
						"name" : "Jean Moulin",
						"addr": "45 rue tuilerie",
						"lng":"48.806978",
						"lat":"2.583972",
						"type": "Primaire"
					},
					{
						"name" : "Concordet",
						"addr": "10 rue des follie",
						"lng":"48.802145",
						"lat":"2.620013",
						"type": "College",
						"img":"http://archishowme.com/site/wp-content/uploads/2013/08/collegecamus.jpg"
					}
				],
			"parc": [
				{
					"name" : "De Gaulle",
					"addr": "10 rue lilas",
					"lng":"48.806101",
					"lat":"2.583785",
					"type": "Jeux",
					"img": "https://upload.wikimedia.org/wikipedia/commons/0/0a/Allee_Parc_Laurier.JPG"
				},
				{
					"name" : "Robert Shuman",
					"addr": "11 rue lilas",
					"lng":"48.803938",
					"lat":"2.583020",
					"type": "espace vert"
				}
			],
			"epicerie": [
				{
					"name" : "Inter Marche",
					"addr": "10 rue lilas",
					"lng":"48.807689",
					"lat":"2.617723",
					"type": "super marche",
					"img": "http://www.larepublique77.fr/files/2015/01/DSC03482.JPG"
				},
				{
					"name" : "Simply Market",
					"addr": "11 rue lilas",
					"lng":"48.805831",
					"lat":"2.586013",
					"type": "Epicerie"
				},
				{
					"name" : "Carrefour Market",
					"addr": "12 rue lilas",
					"lng":"48.799470",
					"lat":"2.607406",
					"type": "Epicerie",
					"img":"http://www.larepublique77.fr/files/2015/10/Sans-titre2.jpg"
				}
			]
		}
	};
	return (content);
}

function	score_pos()
{
	var content = data();
	var point = L.point(content.persons[0].lng, content.persons[0].lat);
	var score = 0;
	for (var i = 0; content.persons[0].critere[i] != undefined; i++)
	{
		critere_choix = content.persons[0].critere[i];
		for (var j = 0; content.pos.critere_pos[j] != undefined; j++)
		{
			if (critere_choix == content.pos.critere_pos[j].type)
			{
				for (var y = 0; content.pos[critere_choix][y] != undefined; y++)
				{
					var pointorther = L.point(content.pos[critere_choix][y].lng, content.pos[critere_choix][y].lat);
					var dist_equal = point.distanceTo(pointorther);
					if (dist_equal <= 0.0099)
						{
							score++;
							break;
						}
				}
			}
		}
	}
	score = ((score * 10) / i);
	return (score);
}

function	score_int(PerData)
{
	var content = data();
	var score = "";
	var y = 1;
	for (var i = 0; content.persons[0].interetCenter[i] != undefined; i++)
	{
		centre_int_pers = content.persons[0].interetCenter[i];
		for (var u = 1; y != 0; u++)
		{
			for (var j = 0; PerData.interetCenter[j] != undefined; j++)
			{
				critere_int = content.persons[u].interetCenter[j];
				age_at = PerData.age;
				age_cp_1 = age_at - 2;
				age_cp_2 = age_at + 2;
				if (centre_int_pers == critere_int)
				{
					if (content.persons[0].age <= age_cp_2 && content.persons[0].age >= age_cp_1 && PerData.famiStatu == content.persons[0].famiStatu)
						score = "De " + PerData.age + " ans.</br> A le meme centre d'interet que vous, '" + PerData.interetCenter[j] + "'.</br>Aux " + PerData.addr + ".";
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
		id: 'mapbox.outdoors',
		accessToken: 'pk.eyJ1IjoiaHVjaGV0bWFwIiwiYSI6ImNpaGRnOXUwejAwMXp1Mm00M28zb3JtbWUifQ.o8ZoDxmnBANxWlVeaTFhUA'
	}).addTo(map);
	CheckPersons(content.persons, map);
	CheckPOI(content.pos, map);
	map.on("moveend", mapUpdate);

function CheckPersons(dataPers, map)
{
	var myIcon = L.icon({
    iconUrl: 'https://cdn3.iconfinder.com/data/icons/ballicons-free/128/man.png',
    iconSize: [38, 38],
    iconAnchor: [22, 38],
    popupAnchor: [-3, -45]
});
	var ContIcon = L.icon({
    iconUrl: 'https://cdn2.iconfinder.com/data/icons/arrows-free/32/down_nav_arrow_point-128.png',
    iconSize: [38, 38],
	iconAnchor: [20, 38],
	popupAnchor: [-3, -45]
});
	var marker = L.marker([dataPers[0].lng,dataPers[0].lat], {icon: ContIcon}).addTo(map);
	L.circle([dataPers[0].lng,dataPers[0].lat], 1000).addTo(map);
	marker.on("click", onContClick);
	for (var i = 1; i < dataPers.length; i++)
	{
		marker = L.marker([dataPers[i].lng,dataPers[i].lat], {icon: myIcon}).addTo(map);
		getPopupPer(marker, dataPers[i]);
		marker.on("click", onPClick);
	}
}

function	getPopupPer(PerMarker, PerData)
{
	var score_interet = score_int(PerData);
	var info = "";
	var status_soc = PerData.famiStatu;
	var interet = "";
	for (var i = 0; PerData.interetCenter[i] != undefined; i++)
	{
		if (i == 0)
			interet += "<br>&nbsp;&nbsp;&nbsp;&nbsp;- " + PerData.interetCenter[i] + "<br>";
		else
			interet += "" + "&nbsp;&nbsp;&nbsp;&nbsp;- " + PerData.interetCenter[i] + "<br>";
	}
	info += "Est " + status_soc + ".</br>Centre d'interet : " + interet;
	var PopCont = "<div class='poi'>";
	if (PerData.img != "")
	{
		PopCont += "<img src='" + PerData.img + "' height=5%/>";
		PopCont += "&nbsp;&nbsp;" + PerData.firstName +  " " + PerData.lastName + "!</br>";
	}
	else
		PopCont += PerData.firstName +  " " + PerData.lastName + "!</br>";
	if (score_interet != "")
		PopCont += score_interet + "</br>";
	else
	{
		PopCont += "De " + PerData.age + " ans.</br>";
		PopCont += "Aux " + PerData.addr + ".</br>";
	}
	PopCont += "" + info + "</div>";
	PerMarker.bindPopup(PopCont);
}

var info_us = 0;

function	aff_div_us()
{
	if (info_us == 0)
	{
		var div_popup = document.getElementById("info_plus_us");
		div_popup.style.display = "block";
		div_popup.style.overflow = "auto";
		div_popup.style.height = "100px";
		div_popup.style.width = "100%";
		div_popup.style.padding = "3px 0px 0px 3px";
		div_popup.style.border = "1px solid #C0C0C0";
		div_popup.style.borderRadius = "5px 0px 0px 5px";
		var div_popup1 = document.getElementById("aff_info_us");
		div_popup1.style.display = "none";
		info_us = 1;
	}
	else
	{
		var div_popup = document.getElementById("info_plus_us");
		div_popup.style.display = "none";
		var div_popup1 = document.getElementById("aff_info_us");
		div_popup1.style.display = "block";
		info_us = 0;
	}
}

function	New_info_us()
{
	var content = data();
	var point = L.point(content.persons[0].lng, content.persons[0].lat);
	var score = 0;
	var info = "";
	for (var i = 0; content.persons[0].critere[i] != undefined; i++)
	{
		critere_choix = content.persons[0].critere[i];
		for (var j = 0; content.pos.critere_pos[j] != undefined; j++)
		{
			if (critere_choix == content.pos.critere_pos[j].type)
			{
				for (var y = 0; content.pos[critere_choix][y] != undefined; y++)
				{
					var pointorther = L.point(content.pos[critere_choix][y].lng, content.pos[critere_choix][y].lat);
					var dist_equal = point.distanceTo(pointorther);
					if (dist_equal <= 0.0099)
						{
							var add = content.pos[critere_choix][y].addr;
							var name = content.pos[critere_choix][y].name;
							var type = content.pos[critere_choix][y].type;
							info += name + ",</br>" + type + ",</br>" + add + ".</br></br>";
							break;
						}
				}
			}
		}
	}
	return (info);
}

function onPClick(e)
{
	var the_pop = this.getPopup();
	this.unbindPopup();
	this.bindPopup(the_pop).openPopup();
}

function onContClick(e)
{
	var score_position = score_pos();
	if (!this.getPopup())
	{
		var content = data();
		var info_tot = New_info_us();
		var Popuptot = "<div id='user' style='height: 10%; margin-bottom: -15%;'>Bonjour " + content.persons[0].firstName + " " + content.persons[0].lastName + "!</br>" +
		"<div style='display: inline-block; width: 100%; margin-top: -15%;' id='bouton_plus_div'><p style='float: left;'>Note critere : " + score_position + "/10</p>" +
		"<button onclick='aff_div();' style='border: none; background: none; height: 20%; width: 5%; float: left; outline-style: none;'><img src='bouton_plus.png' style='height: 19px; margin-top: 15px;'/></button></div>" +
		"<div style='display: none; width: 100%; margin-top: -15%;' id='bouton_moin_div'><p style='float: left;'>Note critere : " + score_position + "/10</p>" +
		"<button onclick='aff_div();' style='border: none; background: none; height: 20%; width: 5%; float: left; outline-style: none;'><img src='bouton_moin.png' style='height: 19px; margin-top: 15px;'/></button></div>" +
		"<div id='info_plus_us' style='display: none'>" + info_tot + "</div>" + "</div>";
		this.bindPopup(Popuptot).openPopup();
	}
	else
	{
		var the_pop = this.getPopup();
		this.unbindPopup();
		this.bindPopup(the_pop).openPopup();
	}
}
}

function onPOIClick(e)
{
	var the_pop = this.getPopup();
	this.unbindPopup();
	this.bindPopup(the_pop).openPopup();
}

var info_us = 0;
function mapUpdate(event)
{
	var req =  createInstanceReq();
	var bounds = event.target.getBounds();
	var data = "pos=" + encodeURIComponent(bounds.toBBoxString());
	req.onreadystatechange = function()
	{ 
		if(req.readyState == 4)
		{
				if(req.status == 200)
				{
					CheckPOI(JSON.parse(req.responseText), event.target);
				}	
				else	
				{
						alert("Error: returned status code " + req.status + " " + req.statusText);
				}	
		} 
	};

req.open("POST", "getData.php", true); 
req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
req.send(data); 
}

function createInstanceReq()
{
  var req = null;
  if(window.XMLHttpRequest) {
    req = new XMLHttpRequest();
  }
  else if (window.ActiveXObject) {
    try {
      req = new ActiveXObject("Msxml2.XMLHTTP");
    } catch (e) {
       try {
        req = new ActiveXObject("Microsoft.XMLHTTP");
        } catch (e) {
            alert("XHR not created");
          }
      }
    }
    return req;
}

function	aff_div(e)
{
	if (info_us == 0)
	{
		var div_popup_c_us = document.getElementById("info_plus_us");
		div_popup_c_us.style.display = "block";
		div_popup_c_us.style.overflow = "auto";
		div_popup_c_us.style.height = "100px";
		div_popup_c_us.style.width = "auto";
		div_popup_c_us.style.padding = "3px 0px 0px 3px";
		div_popup_c_us.style.border = "1px solid #C0C0C0";
		div_popup_c_us.style.margin = "-10% 0px 0px 0px";
		div_popup_c_us.style.borderRadius = "5px 0px 0px 5px";
		var div_popup_btn_p = document.getElementById("bouton_moin_div");
		div_popup_btn_p.style.display = "inline-block";
		var div_popup_btn_m = document.getElementById("bouton_plus_div");
		div_popup_btn_m.style.display = "none";
		var div_popup_user = document.getElementById("user");
		div_popup_user.style.padding = "0px 0px 15% 0px";
		info_us = 1;
	}
	else
	{
		var div_popup_c_us = document.getElementById("info_plus_us");
		div_popup_c_us.style.display = "none";
		var div_popup_user = document.getElementById("user");
		div_popup_user.style.padding = "0px 0px 0px 0px";
		var div_popup_btn_m = document.getElementById("bouton_moin_div");
		div_popup_btn_m.style.display = "none";
		var div_popup_btn_p = document.getElementById("bouton_plus_div");
		div_popup_btn_p.style.display = "inline-block";
		info_us = 0;
	}
}

function	getPopupPOI(POIMarker, POIData)
{
	var info = "";
	
	if (POIData.img != undefined)
	{
		var PopCont = "<div id='poi' style='height: 100%;'>" + POIData.name + "</br>" +
		"<div style='display: inline-block; width: 100%; height: 10%; margin-top: -10%;' id='bouton_plus_div'><p style='float: left; widht: 100%;'>" + POIData.type + "</p>" +
		"<button onclick='aff_div_poi();' style='border: none; background: none; margin-top: 0px; height: 20%; width: 5%; float: left; outline-style: none;'><img src='bouton_plus.png' style='height: 19px; margin-top: 15px;'/></button></div></br>" +
		"<div style='display: none; width: 100%; margin-top: -20%; height: 20%;' id='bouton_moin_div'><p style='float: left;'>" + POIData.type + "</p>" +
		"<button onclick='aff_div_poi();' style='border: none; background: none; height: 20%; margin-top: 0px; width: 5%; float: left; outline-style: none;'><img src='bouton_moin.png' style='height: 19px; margin-top: 15px;'/></button></div>";
		PopCont += "<img src='" + POIData.img + "' style='height: 10%; border-radius: 5px; margin-top: -10px;'/>";
		PopCont += "<div id='info_plus_poi' style='display: none;'>" + POIData.addr + "</div>";
		PopCont += "</div>";
	}
	else
	{
		var PopCont = "<div id='poi' style='width: 110px; height: 100%;'>" + POIData.name + "</br>" +
		"<div style='display: inline-block; width: 100%; height: 10%; margin-top: -15%; margin-bottom: -15%;' id='bouton_plus_div'><p style='float: left; widht: 100%;'>" + POIData.type + "</p>" +
		"<button onclick='aff_div_poi();' style='border: none; background: none; margin-top: 0px; height: 20%; width: 5%; float: left; outline-style: none;'><img src='bouton_plus.png' style='height: 19px; margin-top: 15px;'/></button></div>" +
		"<div style='display: none; width: 100%; margin-top: -15%; height: 20%;' id='bouton_moin_div'><p style='float: left;'>" + POIData.type + "</p>" +
		"<button onclick='aff_div_poi();' style='border: none; background: none; height: 20%; margin-top: 0px; width: 5%; float: left; outline-style: none;'><img src='bouton_moin.png' style='height: 19px; margin-top: 15px;'/></button></div>";
		PopCont += "<div id='info_plus_poi' style='display: none;'>" + POIData.addr + "</div>";
		PopCont += "</div>";
	}	
	POIMarker.bindPopup(PopCont);
}

var info_poi = 0;

function	aff_div_poi(e)
{
	if (info_poi == 0)
	{
		var div_popup_c_poi = document.getElementById("info_plus_poi");
		div_popup_c_poi.style.display = "block";
		div_popup_c_poi.style.margin = "5px 0px -15% 0px";
		var div_popup_btn_p = document.getElementById("bouton_moin_div");
		div_popup_btn_p.style.display = "inline-block";
		var div_popup_btn_m = document.getElementById("bouton_plus_div");
		div_popup_btn_m.style.display = "none";
		var div_popup_poi = document.getElementById("poi");
		div_popup_poi.style.padding = "0px 0px 15% 0px";
		info_poi = 1;
	}
	else
	{
		var div_popup_c_poi = document.getElementById("info_plus_poi");
		div_popup_c_poi.style.display = "none";
		var div_popup_poi = document.getElementById("poi");
		div_popup_poi.style.padding = "0px 0px 0px 0px";
		var div_popup_btn_m = document.getElementById("bouton_moin_div");
		div_popup_btn_m.style.display = "none";
		var div_popup_btn_p = document.getElementById("bouton_plus_div");
		div_popup_btn_p.style.display = "inline-block";
		info_poi = 0;
	}
}

function CheckPOI(dataPOI, map)
{
	for (var i = 0; i < dataPOI.critere_pos.length; i++)
	{
		//console.log("i " + i + "    " + dataPOI.critere_pos[i].icon);
		if (dataPOI[dataPOI.critere_pos[i].type] != undefined)
			for (var j = 0; j < dataPOI[dataPOI.critere_pos[i].type].length; j++)
			{
				var myIcon = L.icon(
				{
    			iconUrl: dataPOI.critere_pos[i].icon,
    			iconSize: [38, 38],
    			iconAnchor: [21, 38],
    			popupAnchor: [-3, -45]
				});
				//alert(dataPOI[dataPOI.critere_pos[i]][j].lat);
				var marker = L.marker([dataPOI[dataPOI.critere_pos[i].type][j].lng, dataPOI[dataPOI.critere_pos[i].type][j].lat], {icon: myIcon}).addTo(map);
				getPopupPOI(marker, dataPOI[dataPOI.critere_pos[i].type][j]);
				marker.on("click", onPOIClick);
			}
	}
}