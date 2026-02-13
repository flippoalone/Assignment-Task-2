let marks = [85, 90, 78, 92, 88];

    function analyzeMarks() {
      let total = marks.reduce((sum, m) => sum + m, 0);
      let average = total / marks.length;
      document.getElementById("result").innerText =
        "Total: " + total + ", Average: " + average.toFixed(2);
    }
