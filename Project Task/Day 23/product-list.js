 let products = [
      { name: "Laptop", price: 50000 },
      { name: "Phone", price: 20000 },
      { name: "Tablet", price: 15000 }
    ];

    function showProducts() {
      let output = "<ul>";
      for (let p of products) {
        output += `<li>${p.name} - ₹${p.price}</li>`;
      }
      output += "</ul>";
      document.getElementById("productResult").innerHTML = output;
    }
