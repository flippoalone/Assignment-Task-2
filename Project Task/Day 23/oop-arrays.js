class Student {
      constructor(name, marks) {
        this.name = name;
        this.marks = marks;
      }

      display() {
        return `Name: ${this.name}, Marks: ${this.marks}`;
      }
    }

    let student1 = new Student("Akash", 88);

    function showStudent() {
      document.getElementById("studentResult").innerText = student1.display();
    }
