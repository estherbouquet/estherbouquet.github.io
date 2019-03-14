  let obj ={
  	url : '',
  	num : 0
  }

 let form = document.getElementById("form");
 let output = document.getElementById("output");

 form.addEventListener("submit", function(e) {
 	e.preventDefault();

 	for (let i = 0; i < e.target.length; i++) {

 		if (e.target[i].checked) {

 			if (e.target[i].name === "rubrique") {
 				obj.url = e.target[i].value;
 			} 

 			if (e.target[i].name === "nombre") {
 				obj.num = e.target[i].value;
 			}

 		}
 	}

	console.log(obj);	 
	 (async () => {
		const rawResponse = await fetch('http://127.0.0.1:5000/print', {
		  method: 'POST',
		  headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		  },
		  body: JSON.stringify({rubrique: obj.url, nombre: obj.num})
		});
		// const content = await rawResponse.json();
	  
		console.log(content);
	  })();

 	output.innerText = obj.url + " " + obj.num;
 });
