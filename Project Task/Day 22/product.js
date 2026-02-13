let product = {
      name: "Laptop",
      price: 50000,
      updatePrice: function(newPrice) {
        this.price = newPrice;
      }
    };

    document.getElementById("productResult").innerText =
      "Product: " + product.name + ", Price: ₹" + product.price;

    function updatePrice() {
      let newPrice = document.getElementById("newPrice").value;
      product.updatePrice(newPrice);
      document.getElementById("productResult").innerText =
        "Product: " + product.name + ", Price: ₹" + product.price;
    }
