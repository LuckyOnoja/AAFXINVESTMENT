import $ from 'jquery';
export default function Dashboard() {
  function toggleNav() {
    var dashNav = document.querySelector(".dash-nav");
    var darkbody = document.querySelector(".darkbody");
    dashNav.classList.toggle("openup");
    darkbody.classList.toggle("showdark");
    flag = true;
    if (darkbody.classList.contains(".showdark")) {
      flag == false;
    }
  }

  function toggnotif() {
    document.querySelector(".notif-d").classList.toggle("not-op");
    document.querySelector(".noti-dark").classList.toggle("showdark");
    if (flag == true) {
      toggleNav();
    }
  }

  document.querySelector(".icon-bell").addEventListener("click", toggnotif);
  document.addEventListener("click", function (event) {
    // Check if the clicked element has the class 'delete-icon'
    if (event.target.classList.contains("icon-trash")) {
      // Get the row that contains the clicked delete icon
      var row = event.target.parentNode.parentNode;

      // Remove the row from the table
      row.parentNode.removeChild(row);
    }
  });

  function withdraw() {
    document.querySelector(".main-wits").classList.toggle("wito");
    document
      .querySelector(".new-withdrawal-casing")
      .classList.toggle("wito-box");
  }

  const container = document.querySelector(".casing-ups");

  container.addEventListener("click", function () {
    const input = document.createElement("input");
    input.type = "file";
    const containerImg = document.querySelector(".pposs img");

    input.accept = "image/png, image/jpeg, image/jpg";

    // Set the onchange event listener to handle file selection
    input.onchange = function (event) {
      const file = event.target.files[0]; // Get the selected file
      if (file) {
        const reader = new FileReader(); // Create a FileReader object
        reader.onload = function (e) {
          // Create an image element and set its src attribute to the selected image data URL
          const img = document.createElement("img");
          containerImg.src = e.target.result;
          containerImg.classList.add("stretch");

          // Remove any existing image in the container
          containerImg.innerHTML = "";

          // Append the image to the container
          containerImg.appendChild(img);
        };
        reader.readAsDataURL(file); // Read the selected file as a data URL
      }
    };

    // Trigger a click event on the input element programmatically
    input.click();
  });

  const cryptoSelect = document.getElementById("cryptoSelect");

  const cryptoInfo = document.getElementById("cryptoInfo");
  const addressInput = document.getElementById("addressInput");

  cryptoSelect.addEventListener("change", function () {
    const selectedOption = cryptoSelect.options[cryptoSelect.selectedIndex];

    const address = selectedOption.dataset.address;

    cryptoInfo.textContent = selectedOption.textContent;

    addressInput.value = address;
  });

  const selectOptions = document.getElementById("cryptoSelect");
  const targetDiv = document.getElementById("grrr");
  const ortherInput = document.getElementById("zecond");
  const cryptoInfo2 = document.getElementById("cryptoInfo2");

  selectOptions.addEventListener("change", function () {
    const selectedOption =
      selectOptions.options[selectOptions.selectedIndex].value;

    if (selectedOption === "Alipay") {
      targetDiv.classList.remove("closup");
      ortherInput.classList.add("closup");
      cryptoInfo2.textContent = "Yen(¥)....";
    } else {
      targetDiv.classList.add("closup");
      ortherInput.classList.remove("closup");
    }
  });
}
