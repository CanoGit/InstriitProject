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
	if (!this.getPopup())
	{
		this.bindPopup("<div class='poi'>Popup[" + nb + "] First Name: The_Name<br>Last Name: The_LName<br><img src='https://image.freepik.com/photos-libre/smiley_21108723.jpg' height=10%/></div>").openPopup();
		nb += 1;
	}
	else
	{
		this.closePopup();
		this.openPopup().skjfkldsfj();
	}
}

function toto()
{
	
}
}