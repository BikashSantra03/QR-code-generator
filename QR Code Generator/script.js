const inputText = document.getElementById("inputtext");
const generateButton = document.getElementById("generatebtn");
const qrImage = document.getElementById("qr-img");
const imgBox = document.querySelector(".imgBox");
const downloadBtn = document.getElementById("downloadButton");

function qrGenerator() {
  if (inputText.value.length > 0) {
    generateButton.textContent = "Generating...";

    qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputText.value}`;

    qrImage.addEventListener("load", () => {
      downloadBtn.style.display = "block";
      generateButton.textContent = "Generate QR Code";
    });

    imgBox.classList.add("imgBox-active");
  } else {
    imgBox.classList.remove("imgBox-active");
    downloadBtn.style.display = "none";
    inputText.classList.add("error");
    setTimeout(() => {
      inputText.classList.remove("error");
    }, 1000);
  }
}

function downloadImage() {
  fetch(qrImage.src)
    .then((resonse) => {
      return resonse.blob();
    })
    .then((blob) => {
      let imgUrl = URL.createObjectURL(blob);
      let a = document.createElement("a");
      a.href = imgUrl;
      a.download = "Qrcode";
      a.click();
    });
}

/* This code is written by Bikash Santra
Linkedin : https://www.linkedin.com/in/bikash-santra-886901217/ */
