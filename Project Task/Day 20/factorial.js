 function factorial(n) {
      let fact = 1;
      for (let i = 1; i <= n; i++) {
        fact *= i;
      }
      return fact;
    }

    function calculateFactorial() {
      let num = document.getElementById("num").value;
      document.getElementById("result").innerText = 
        "Factorial of " + num + " is " + factorial(num);
    }
