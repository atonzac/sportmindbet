function showResult(number) {
  const point = document.getElementById('result-one-id').innerText;
  const reason = document.getElementById('reason-one-id').innerText;
  const tip = document.getElementById('button-one');
  const place = document.getElementById(number);
  const result = document.createElement('div')
  result.id = 'result-id';
  result.className= 'result';
  const bpoint = point.bold();
  result.innerHTML= bpoint + ' ' + reason;
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
  const point = document.getElementById('result-two-id').innerText;
  const reason = document.getElementById('reason-two-id').innerText;
  const tip = document.getElementById('button-two');
  const place = document.getElementById(number);
  const result = document.createElement('div')
  result.id = 'result-id-two';
  result.className= 'result';
  const bpoint = point.bold();
  result.innerHTML= bpoint + ' ' + reason;
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
  const point = document.getElementById('result-three-id').innerText;
  const reason = document.getElementById('reason-three-id').innerText;
  const tip = document.getElementById('button-three');
  const place = document.getElementById(number);
  const result = document.createElement('div')
  result.id = 'result-id-three';
  result.className= 'result';
  const bpoint = point.bold();
  result.innerHTML= bpoint + ' ' + reason;
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

function showResultfour(number) {
  const point = document.getElementById('result-four-id').innerText;
  const reason = document.getElementById('reason-four-id').innerText;
  const tip = document.getElementById('button-four');
  const place = document.getElementById(number);
  const result = document.createElement('div')
  result.id = 'result-id-four';
  result.className= 'result';
  const bpoint = point.bold();
  result.innerHTML= bpoint + ' ' + reason;
  place.appendChild(result);
  
  

  function closeResultfour() {
    var x = document.getElementById('result-id-four');
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
  tip.onclick= closeResultfour;
}

function showResultfive(number) {
  const point = document.getElementById('result-five-id').innerText;
  const reason = document.getElementById('reason-five-id').innerText;
  const tip = document.getElementById('button-five');
  const place = document.getElementById(number);
  const result = document.createElement('div')
  result.id = 'result-id-five';
  result.className= 'result';
  const bpoint = point.bold();
  result.innerHTML= bpoint + ' ' + reason;
  place.appendChild(result);
  
  

  function closeResultfive() {
    var x = document.getElementById('result-id-five');
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
  tip.onclick= closeResultfive;
}


