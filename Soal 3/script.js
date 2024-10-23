document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Mencegah pengiriman form

    let valid = true;

    // Validasi Email
    const emailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/i;
    const emailInput = document.getElementById("email").value;
    const emailError = document.getElementById("emailError");

    if (!emailPattern.test(emailInput)) {
      emailError.textContent = "Hanya menerima email valid dari google.";
      valid = false;
    } else {
      emailError.textContent = "";
    }

    // Validasi Nomor Telepon
    const phoneInput = document.getElementById("phone").value;
    const phoneError = document.getElementById("phoneError");

    if (phoneInput.length > 16) {
      phoneError.textContent = "Hanya menerima nomer telepon valid.";
      valid = false;
    } else {
      phoneError.textContent = "";
    }

    if (valid) {
      // Mengambil nilai dari form
      const name = document.getElementById("name").value;
      const phone = phoneInput;
      const message = document.getElementById("message").value;

      // Menampilkan data form di container
      document.getElementById("resultName").innerText = name;
      document.getElementById("resultEmail").innerText = emailInput;
      document.getElementById("resultPhone").innerText = phone;
      document.getElementById("resultMessage").innerText = message;

      // Menyembunyikan form dan menampilkan hasil
      document.getElementById("formContainer").style.display = "none";
      document.getElementById("resultContainer").style.display = "block";
    }
  });

// Fungsi mrngirim ulang form
function goBack() {
  document.getElementById("formContainer").style.display = "block";
  document.getElementById("resultContainer").style.display = "none";
  document.getElementById("contactForm").reset();
}

// Tampilkan form saat halaman dimuat
document.getElementById("formContainer").style.display = "block";
