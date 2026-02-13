 let matrixA = [
      [1, 2, 3],
      [4, 5, 6]
    ];
    let matrixB = [
      [7, 8, 9],
      [1, 2, 3]
    ];

    function addMatrices() {
      let resultMatrix = [];
      for (let i = 0; i < matrixA.length; i++) {
        resultMatrix[i] = [];
        for (let j = 0; j < matrixA[i].length; j++) {
          resultMatrix[i][j] = matrixA[i][j] + matrixB[i][j];
        }
      }

      let output = "<table border='1'>";
      resultMatrix.forEach(row => {
        output += "<tr>";
        row.forEach(val => output += "<td>" + val + "</td>");
        output += "</tr>";
      });
      output += "</table>";

      document.getElementById("result").innerHTML = output;
    }
