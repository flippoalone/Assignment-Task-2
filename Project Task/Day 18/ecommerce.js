 function checkDiscount() {
      let price = document.getElementById("price").value;
      let discount = 0;

      if (price >= 5000) discount = 20;
      else if (price >= 2000) discount = 10;
      else if (price >= 1000) discount = 5;

      if (discount > 0) {
        document.getElementById("discountResult").innerText = 
          "You get a " + discount + "% discount!";
      } else {
        document.getElementById("discountResult").innerText = 
          "No discount available.";
      }
    }
