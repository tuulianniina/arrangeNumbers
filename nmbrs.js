const thisinput = document.getElementById("thisinput");
thisinput.addEventListener("keypress", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    arrangeNumbers();
  }
});

function arrangeNumbers() {
  var inputstr = document.getElementById("thisinput").value;
  var strarr = inputstr.split(',');
  var numberarray = (function() {
    var length = strarr.length;
    var arr = [];
    for (i = 0; i < length; i++) {
      arr.push(parseFloat(strarr[i]));
    }
    return arr;
  })();
  var newArr = (function() {
    var length = numberarray.length;
    for (var i = 0; i < length; i++) {
      for (var j = 0; j < length; j++) {
        if (numberarray[j] > numberarray[j+1]) {
        var n = numberarray[j];
        numberarray[j] = numberarray[j+1];
        numberarray[j+1] = n;
        }
      }
    }
    return numberarray;
  })();
  (function isValid() {
    if (numberarray.includes(NaN)) {
      document.getElementById("output").innerText = "Invalid input."
    }
    else {
      document.getElementById("output").innerText = newArr.join(', ');
    }
  })();
}
