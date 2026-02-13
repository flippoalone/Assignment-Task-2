function calculateArea() {
      let shape = document.getElementById("shape").value;
      let area;

      if (shape === "circle") {
        let r = parseFloat(document.getElementById("radius").value);
        area = Math.PI * r * r;
      } else if (shape === "rectangle") {
        let l = parseFloat(document.getElementById("length").value);
        let w = parseFloat(document.getElementById("width").value);
        area = l * w;
      }

      document.getElementById("areaResult").innerText = "Area: " + area;
    }
