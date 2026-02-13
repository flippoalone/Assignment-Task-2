let marksheet = [
      ["Name", "Math", "Science", "English"],
      ["Akash", 85, 90, 88],
      ["Priya", 78, 82, 80],
      ["Ravi", 92, 88, 95]
    ];

    function showMarksheet() {
      let output = "<table border='1'>";
      for (let i = 0; i < marksheet.length; i++) {
        output += "<tr>";
        for (let j = 0; j < marksheet[i].length; j++) {
          output += "<td>" + marksheet[i][j] + "</td>";
        }
        output += "</tr>";
      }
      output += "</table>";
      document.getElementById("result").innerHTML = output;
    }
