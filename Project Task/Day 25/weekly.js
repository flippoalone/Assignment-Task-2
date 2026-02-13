let expenses = [
      ["Day", "Food", "Transport", "Misc"],
      ["Mon", 200, 50, 100],
      ["Tue", 150, 60, 80],
      ["Wed", 180, 40, 120],
      ["Thu", 220, 70, 90],
      ["Fri", 250, 60, 110]
    ];

    function showExpenses() {
      let output = "<table border='1'>";
      for (let i = 0; i < expenses.length; i++) {
        output += "<tr>";
        for (let j = 0; j < expenses[i].length; j++) {
          output += "<td>" + expenses[i][j] + "</td>";
        }
        output += "</tr>";
      }
      output += "</table>";
      document.getElementById("result").innerHTML = output;
    }
