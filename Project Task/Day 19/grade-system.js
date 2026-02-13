 function checkGrade() {
      let marks = document.getElementById("marks").value;
      let grade;

      if (marks >= 90) grade = "A";
      else if (marks >= 75) grade = "B";
      else if (marks >= 60) grade = "C";
      else if (marks >= 40) grade = "D";
      else grade = "F";

      document.getElementById("gradeResult").innerText = "Your Grade: " + grade;
    }
