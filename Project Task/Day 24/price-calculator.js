let products = [
      { name: "Laptop", price: 50000 },
      { name: "Phone", price: 20000 },
      { name: "Tablet", price: 15000 }
    ];

    function calculatePrices() {
      let discounted = products.map(p => {
        return { name: p.name, price: p.price * 0.9 };
      });

      let output = "<ul>";
      discounted.forEach(p => {
        output += `<li>${p.name} - ₹${p.price}</li>`;
      });
      output += "</ul>";

      document.getElementById("result").innerHTML = output;
    }
