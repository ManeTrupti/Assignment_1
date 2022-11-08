// clear all the values
function clearScreen() {
    document.getElementById("result").value = "";
}
 
// display values
function display(value) {
    document.getElementById("result").value += value;
}
 
//  result
function calculate() {
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;
}


// History



  let history=document.getElementById("history");
  function calculation(v)
  {
      para = document.createElement('p');
      data=v+"="+eval(v);
      para.innerText=data;
      history.appendChild(para);
      return eval(v);

  }
  function backspace(b){
      return b.slice(0,b.length-1);
  }

