class Vehicle {
      constructor(type) {
        this.type = type;
      }
      displayType() {
        return `Type: ${this.type}`;
      }
    }

    class Car extends Vehicle {
      constructor(brand, model) {
        super("Car");
        this.brand = brand;
        this.model = model;
      }
      displayDetails() {
        return `${this.displayType()}, Brand: ${this.brand}, Model: ${this.model}`;
      }
    }

    let car1 = new Car("Honda", "City");

    function showCar() {
      document.getElementById("carResult").innerText = car1.displayDetails();
    }
