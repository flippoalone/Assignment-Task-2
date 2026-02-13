let seating = [
      ["A1", "A2", "A3", "A4"],
      ["B1", "B2", "B3", "B4"],
      ["C1", "C2", "C3", "C4"]
    ];

    function showSeating() {
      let output = "<table border='1'>";
      seating.forEach(row => {
        output += "<tr>";
        row.forEach(seat => output += "<td>" + seat + "</td>");
        output += "</tr>";
      });
      output += "</table>";
      document.getElementById("result").innerHTML = output;
    }
