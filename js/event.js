(()=>{
	console.log('Fishing calender')


window.onload=function (){
	var arr=[
		'Brown Trout (Great Lakes), ',
		'Cisco (or Lake Herring), Coho Salmon, Lake Sturgeon, ',
		'Lake Trout, Lake Whitefish, Pink Salmon, Rainbow Smelt, ',
		'Rainbow Trout (Inland), Rainbow Trout (Great Lakes), ',
		'Black Crappie, Freshwater Drum, Mooneye, Muskellunge, ',
		'Northern Pike, Rock Bass, Sauger, Walleye,',
		'White Crappie, White Sucker, Yellow Perch',
		'Bluegill,  Bowfin, Brown Bullhead, Carp, ',
		'Channel Catfish, Goldeye, Largemouth Bass, ',
		' Pumpkinseed, Smallmouth Bass, White Bass,',
		'Round Whitefish,  Splake',
		'Burbot, Chinook Salmon,'
	];
	//alert(arr[1]);
	var oDiv = document.getElementById('div0');
	var oLi = oDiv.getElementsByTagName('li');
	//alert(oLi.length);
	var gDiv = document.getElementById('div1');
	for(var i = 0;i<oLi.length;i++){
		oLi[i].m=i;//alert(this.m);
		oLi[i].onmouseover=function (){
			for(var i = 0;i<oLi.length;i++){
				//alert(this);
				oLi[i].className="";
			}
			this.className="active";
			
			gDiv.innerHTML='<h2>'+(this.m+1)+' Fishing Guide</h2><br><p>'+arr[this.m]+'</p>';
		}
	}
}
})();