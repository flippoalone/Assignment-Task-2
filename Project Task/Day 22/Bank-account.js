 let bankAccount = {
      owner: "Akash",
      balance: 1000,
      deposit: function(amount) {
        this.balance += amount;
      },
      withdraw: function(amount) {
        if (amount <= this.balance) {
          this.balance -= amount;
        } else {
          alert("Insufficient balance!");
        }
      }
    };

    document.getElementById("accountResult").innerText =
      "Owner: " + bankAccount.owner + ", Balance: ₹" + bankAccount.balance;

    function deposit() {
      let amt = parseFloat(document.getElementById("amount").value);
      bankAccount.deposit(amt);
      document.getElementById("accountResult").innerText =
        "Owner: " + bankAccount.owner + ", Balance: ₹" + bankAccount.balance;
    }

    function withdraw() {
      let amt = parseFloat(document.getElementById("amount").value);
      bankAccount.withdraw(amt);
      document.getElementById("accountResult").innerText =
        "Owner: " + bankAccount.owner + ", Balance: ₹" + bankAccount.balance;
    }
