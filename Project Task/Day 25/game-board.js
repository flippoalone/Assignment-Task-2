 let board = [
      ["X", "O", "X"],
      ["O", "X", "O"],
      ["X", "O", "X"]
    ];

    function showBoard() {
      let output = "<table border='1' style='text-align:center; width:150px; height:150px'>";
      board.forEach(row => {
        output += "<tr>";
        row.forEach(cell => output += "<td>" + cell + "</td>");
        output += "</tr>";
      });
      output += "</table>";
      document.getElementById("result").innerHTML = output;
    }
