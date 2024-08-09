document.addEventListener('DOMContentLoaded', function () {
    const dropdownButtons = document.querySelectorAll('[data-dropdown-toggle]');
    dropdownButtons.forEach(button => {
      button.addEventListener('click', function () {
        const targetId = button.getAttribute('data-dropdown-toggle');
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.classList.toggle('hidden');
        }
      });
    });
  });
  
  function switchBilling(plan) {
    var miniPrice = document.getElementById("mini-price");
    var soloPrice = document.getElementById("solo-price");
    var teamPrice = document.getElementById("team-price");
    var companyPrice = document.getElementById("company-price");

    if (plan === 'month') {
        document.getElementById("month-btn").classList.add("active");
        document.getElementById("year-btn").classList.remove("active");

        miniPrice.innerHTML = "$20 / month";
        soloPrice.innerHTML = "$39 / month";
        teamPrice.innerHTML = "$91 / month";
        companyPrice.innerHTML = "$189 / month";
    } else if (plan === 'year') {
        document.getElementById("month-btn").classList.remove("active");
        document.getElementById("year-btn").classList.add("active");

        miniPrice.innerHTML = "$10 / month";
        soloPrice.innerHTML = "$19.5 / month";
        teamPrice.innerHTML = "$45.5 / month";
        companyPrice.innerHTML = "$94.5 / month";
    }
}

document.getElementById("register-form").addEventListener("submit", function(event) {
  event.preventDefault();

  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;

  var data = {
      "name": name,
      "email": email
  };

  fetch("https://script.google.com/macros/s/AKfycbxK14Ue6Jl7IpsuI0eQ2xy6Iob00qRcztWAKEqiwkQQi8wLqlpXfTYE1IKJt7NcFgyE/exec", {  // เปลี่ยนเป็น URL ของ Google Apps Script Web App
      method: "POST",
      body: JSON.stringify(data),
      headers: {
          "Content-Type": "application/json"
      }
  })
  .then(response => response.json())
  .then(data => {
      document.getElementById("response-message").innerText = "การลงทะเบียนสำเร็จ";
  })
  .catch(error => {
    document.getElementById("response-message").innerText = "มีข้อผิดพลาดกับการลงทะเบียน: " + error.message;
    console.error("Error:", error);
  });
});



