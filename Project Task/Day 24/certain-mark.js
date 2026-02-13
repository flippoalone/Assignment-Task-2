 let students = [
      { name: "Akash", marks: 85 },
      { name: "Priya", marks: 72 },
      { name: "Ravi", marks: 90 },
      { name: "Meena", marks: 65 }
    ];

    function searchStudents() {
      let threshold = parseFloat(document.getElementById("threshold").value);
      let filtered = students.filter(s => s.marks > threshold);

      let output = "<ul>";
      filtered.forEach(s => {
        output += `<li>${s.name} - ${s.marks}</li>`;
      });
      output += "</ul>";

      document.getElementById("result").innerHTML = output;
    }
