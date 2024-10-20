function base32toHex(base32) {
    const base32chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567";
    let bits = "";
    let hex = "";

    for (let i = 0; i < base32.length; i++) {
        const val = base32chars.indexOf(base32.charAt(i).toUpperCase());
        bits += ("00000" + val.toString(2)).slice(-5);
    }

    for (let i = 0; i + 4 <= bits.length; i += 4) {
        const chunk = bits.slice(i, i + 4);
        hex += parseInt(chunk, 2).toString(16);
    }

    return hex;
}

function generateTOTP(secret) {
    const epoch = Math.floor(new Date().getTime() / 1000.0);
    const time = leftpad(dec2hex(Math.floor(epoch / 30)), 16, "0");

    const hmacObj = new jsSHA("SHA-1", "HEX");
    hmacObj.setHMACKey(base32toHex(secret), "HEX");
    hmacObj.update(time);
    const hmac = hmacObj.getHMAC("HEX");

    const offset = hex2dec(hmac.substring(hmac.length - 1));
    let otp = (hex2dec(hmac.substr(offset * 2, 8)) & hex2dec("7fffffff")) + "";
    otp = otp.substr(otp.length - 6, 6);

    return otp;
}

function dec2hex(s) {
    return (s < 15.5 ? "0" : "") + Math.round(s).toString(16);
}

function hex2dec(s) {
    return parseInt(s, 16);
}

function leftpad(str, len, pad) {
    if (len + 1 >= str.length) {
        str = Array(len + 1 - str.length).join(pad) + str;
    }
    return str;
}

const generateBtn = document.getElementById("generate-btn");
const totpKeyInput = document.getElementById("totp-key");
const totpDisplay = document.getElementById("totp-display");
const inputSection = document.getElementById("input-section");
const totpCodeElement = document.getElementById("totp-code");
const timeLeftElement = document.getElementById("time-left");

let totpKey = "";
let interval;

generateBtn.addEventListener("click", () => {
    totpKey = totpKeyInput.value.trim();
    if (totpKey) {
        inputSection.style.display = "none";
        totpDisplay.style.display = "block";
        updateTOTP();
        interval = setInterval(updateTOTP, 1000);
    }
});

function updateTOTP() {
    const epoch = Math.floor(new Date().getTime() / 1000.0);
    const timeLeft = 30 - (epoch % 30);

    timeLeftElement.textContent = timeLeft;

    const code = generateTOTP(totpKey);
    totpCodeElement.textContent = code;
}
