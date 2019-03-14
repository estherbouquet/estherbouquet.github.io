  // let form = document.querySelector("form");

  // console.log(form)

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

 	if (self.fetch) {

 		fetch("https://httpbin.org/post", {
 			method: "POST",
 			body: obj
 		}).then(function(res) {
 			console.log(res)
 		});

 	} else {

		let xhr = new XMLHttpRequest();
 		xhr.open("POST", 'https://httpbin.org/post', true);
 		xhr.setRequestHeader("Content-Type", "application/json");
 		xhr.send(obj);

 	}

 	output.innerText = obj.url + " " + obj.num;
 });