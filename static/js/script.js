// Typed.js initialization
var typed = new Typed("#typed-text", {
  strings: [
    "Welcome to QR Code Maker by Ferdinand",
    "Web Build Using Python Module FLASK, QRCODE, and IO",
    "Web Build Using Bootstrap Framework",
    "Web Build Using Sweetalert2 Library",
  ],
  typeSpeed: 50,
  backSpeed: 30,
  loop: true,
  smartBackspace: true,
  shuffle: false,
  backDelay: 3000,
  startDelay: 3000,
});

function generateQR() {
  const link = document.getElementById("link").value;
  if (link) {
    const qrCodeUrl = `/generate_qr/${encodeURIComponent(link)}`;
    const qrCodeContainer = document.getElementById("qrcode");
    qrCodeContainer.innerHTML = `<img src="${qrCodeUrl}" alt="QR Code" id="qrImage" class="img-fluid">`;
    document.getElementById("downloadBtn").style.display = "block";
    Swal.fire({
      icon: "success",
      title: "Success!",
      text: "QR Code generated successfully.",
      timer: 1500,
      showConfirmButton: false,
    });
  } else {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Please enter a link for the QR code.",
    });
  }
}

function downloadQR() {
  const link = document.createElement("a");
  link.href = document.getElementById("qrImage").src;
  link.download = "qrcode.png";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
