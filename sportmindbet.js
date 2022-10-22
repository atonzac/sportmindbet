function noop() {}



function showResult(number) {
  const tip = document.getElementById('button-one');
  const place = document.getElementById(number);
  const result = document.createElement('div')
  result.id = 'result-id';
  result.className= 'result';
  result.innerHTML= 'This is the first tips innerHTML';
  place.appendChild(result);
  
  

  function closeResult() {
    var x = document.getElementById('result-id');
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
  tip.onclick= closeResult;
}
  


  
function showResulttwo(number) {
  const tip = document.getElementById('button-two');
  const place = document.getElementById(number);
  const result = document.createElement('div')
  result.id = 'result-id-two';
  result.className= 'result';
  result.innerHTML= 'This is the second tips innerHTML';
  place.appendChild(result);
  
  

  function closeResulttwo() {
    var x = document.getElementById('result-id-two');
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
  tip.onclick= closeResulttwo;

  
}

function showResultthree(number) {
  const tip = document.getElementById('button-three');
  const place = document.getElementById(number);
  const result = document.createElement('div')
  result.id = 'result-id-three';
  result.className= 'result';
  result.innerHTML= 'This is the third tips innerHTML';
  place.appendChild(result);
  
  

  function closeResultthree() {
    var x = document.getElementById('result-id-three');
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
  tip.onclick= closeResultthree;
}
