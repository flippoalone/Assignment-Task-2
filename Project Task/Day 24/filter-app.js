 let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    function filterNumbers() {
      let evens = numbers.filter(n => n % 2 === 0);
      let odds = numbers.filter(n => n % 2 !== 0);
      document.getElementById("result").innerText =
        "Evens: " + evens.join(", ") + " | Odds: " + odds.join(", ");
    }
