	var jhr = new XMLHttpRequest(); // 1
    jhr.open('GET', 'jobs.json', true); // 2
	jhr.send(null);
	var jobs = JSON.parse(jhr.responseText);
	
	var uhr = new XMLHttpRequest();
    uhr.open('GET', 'users.json', true); // 2
	uhr.send(null);
    var users = JSON.parse(uhr.responseText);
	
	var newArray = [];
	
	for(var i = 0; i < jobs.length; i++){
		for(var j = 0; j < users.length; j++){
			for(var x = 0; x<jobs.tags.length; x++){
				for(var z = 0; z<users.tags.length; z++){
					if(jobs.tags[x] == users.tags[z]){
						newArray.push(jobs.tags[x])
					}
				}				
			}
			if(newArray.length>1){
				alert("User" + users[j] + " matched to " + jobs.result[i])
			}
		}
	}
	alert(jhr.result[0]);
