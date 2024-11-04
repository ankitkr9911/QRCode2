const qrText = document.getElementById("qr-text");
const sizes = document.getElementById("sizes");
const generateBtn = document.getElementById("generateBtn");
const downloadBtn = document.getElementById("downloadBtn")

const qrContainer = document.querySelector(".qr-body");

let size = sizes.value;

function isEmptyInput(){
    // if(qrText.value.length > 0){
    //     generateQRCode();      
    // }
    // else{
    //     alert("Please Enter some text or URL")
    // }

    (qrText.value.length > 0) ?  generateQRCode(): alert("Please Enter some text or URL");
}

sizes.addEventListener("change",(e)=>{
    size = e.target.value;
    isEmptyInput();
})

downloadBtn.addEventListener("click",(e)=>{
    let img = document.querySelector(".qr-body img");
    if(img !== null){
        let imgAttr = img.getAttribute("src");
        downloadBtn.setAttribute("href",imgAttr);
    }
    else{
        downloadBtn.setAttribute("href",`${document.querySelector("canvas").toDataURL()}`);
    }
})


generateBtn.addEventListener("click",(e)=>{
    // It prevents the refresh of page whenever the generate button is clicked
    e.preventDefault();
    isEmptyInput();
    
})

function generateQRCode(){
    qrContainer.innerHTML = "";
    new QRCode(qrContainer,{
        text: qrText.value,
        width: size,
        height: size,
        colorLight: "#ffffff",
        colorDark: "#000000",
    });
}

