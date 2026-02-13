class Employee {
      constructor(name, position, salary) {
        this.name = name;
        this.position = position;
        this.salary = salary;
      }

      display() {
        return `Employee: ${this.name}, Position: ${this.position}, Salary: ₹${this.salary}`;
      }
    }

    let emp1 = new Employee("Ravi", "Developer", 40000);

    function showEmployee() {
      document.getElementById("empResult").innerText = emp1.display();
    }
