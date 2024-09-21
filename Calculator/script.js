function appendChar(char) {
    document.getElementById("Screen").value += char;
  }
  
  function clearScreen() {
    document.getElementById("Screen").value = "";
  }
  
  function deleteLast() {
    let currentDisplay = document.getElementById("Screen").value;
    document.getElementById("Screen").value = currentDisplay.slice(0, -1);
  }
  
  function Result() {
    try {
      let result = eval(document.getElementById("Screen").value);
      document.getElementById("Screen").value = result;
    } catch (error) {
      document.getElementById("Screen").value = "Error";
    }
  }
  