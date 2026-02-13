let car = {
      brand: "Toyota",
      model: "Corolla",
      year: 2022,
      displayDetails: function() {
        return "Car: " + this.brand + " " + this.model + " (" + this.year + ")";
      }
    };

    function showCar() {
      document.getElementById("carResult").innerText = car.displayDetails();
    }
