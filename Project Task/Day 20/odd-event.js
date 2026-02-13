 function checkOddEven() {
      let num = document.getElementById("num").value;
      if (num % 2 === 0) {
        document.getElementById("result").innerText = num + " is Even";
      } else {
        document.getElementById("result").innerText = num + " is Odd";
      }
    }
