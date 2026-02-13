class Person {
      constructor(name, age) {
        this.name = name;
        this.age = age;
      }
      info() {
        return `${this.name}, Age: ${this.age}`;
      }
    }

    class Student extends Person {
      constructor(name, age, grade) {
        super(name, age);
        this.grade = grade;
      }
      info() {
        return `Student: ${super.info()}, Grade: ${this.grade}`;
      }
    }

    class Teacher extends Person {
      constructor(name, age, subject) {
        super(name, age);
        this.subject = subject;
      }
      info() {
        return `Teacher: ${super.info()}, Subject: ${this.subject}`;
      }
    }

    class School {
      constructor(name) {
        this.name = name;
        this.students = [];
        this.teachers = [];
      }

      addStudent(student) {
        this.students.push(student);
      }

      addTeacher(teacher) {
        this.teachers.push(teacher);
      }

      display() {
        let output = `<h3>School: ${this.name}</h3>`;
        output += "<h4>Students:</h4><ul>";
        this.students.forEach(s => output += `<li>${s.info()}</li>`);
        output += "</ul><h4>Teachers:</h4><ul>";
        this.teachers.forEach(t => output += `<li>${t.info()}</li>`);
        output += "</ul>";
        return output;
      }
    }

    let school = new School("Sunrise High School");
    school.addStudent(new Student("Akash", 16, "10th Grade"));
    school.addStudent(new Student("Priya", 15, "9th Grade"));
    school.addTeacher(new Teacher("Mr. Kumar", 40, "Math"));
    school.addTeacher(new Teacher("Ms. Rani", 35, "Science"));

    function showSchool() {
      document.getElementById("schoolResult").innerHTML = school.display();
    }
