let cart = [
      { item: "Shoes", price: 2000, quantity: 2 },
      { item: "Shirt", price: 1000, quantity: 3 },
      { item: "Jeans", price: 1500, quantity: 1 }
    ];

    function calculateTotal() {
      let total = cart.reduce((sum, c) => sum + (c.price * c.quantity), 0);
      document.getElementById("result").innerText = "Total Cart Value: ₹" + total;
    }
