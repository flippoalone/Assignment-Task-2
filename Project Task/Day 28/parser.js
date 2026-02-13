function parseJSON() {
      let input = document.getElementById("jsonInput").value;
      try {
        let obj = JSON.parse(input);
        document.getElementById("result").innerText = "Parsed Name: " + obj.name;
      } catch (err) {
        document.getElementById("result").innerText = "Invalid JSON! " + err.message;
      }
    }
