 let userProfile = {
      name: "John",
      age: 25,
      email: "john@example.com"
    };

    document.getElementById("profileResult").innerText =
      "Name: " + userProfile.name + ", Age: " + userProfile.age + ", Email: " + userProfile.email;

    function updateProfile() {
      let newName = document.getElementById("newName").value;
      userProfile.name = newName;
      document.getElementById("profileResult").innerText =
        "Name: " + userProfile.name + ", Age: " + userProfile.age + ", Email: " + userProfile.email;
    }
