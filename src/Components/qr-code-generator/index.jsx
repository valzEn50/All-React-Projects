import QRCode from "react-qr-code";
import { useState, useEffect } from "react";
import "./qr-code.css";

export default function QRCodeGenerator() {
  const [qrCodeText, setQrCodeText] = useState("");
  const [inputValue, setInputValue] = useState("");

  function handleGenerateQRCode() {
    setQrCodeText(inputValue);
    setInputValue("");
  }

  function handleKeyPress(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      handleGenerateQRCode();
    }
  }

  useEffect(() => {
    const qrCodeElement = document.getElementById("qrCode");
    if (qrCodeElement) {
      qrCodeElement.style.display = qrCodeText ? "block" : "none";
    }
  }, [qrCodeText]);

  useEffect(() => {
    const inputElement = document.querySelector('input[name="qrCodeText"]');
    if (inputValue && inputValue.trim() !== "") {
      if (inputElement) {
        inputElement.focus();
      }

      inputElement.addEventListener("keypress", handleKeyPress);
    } else {
      setInputValue("");
    }
    return () => {
      if (inputElement) {
        inputElement.removeEventListener("keypress", handleKeyPress);
      }
    };
  }, [inputValue]);

  return (
    <div className="qr-code-generator">
      <h1>QR Code Generator</h1>
      <div className="input-con">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          name="qrCodeText"
          placeholder="Enter text to encode in QR code"
        />
        <button
          className="button"
          disabled={inputValue && inputValue.trim() !== "" ? false : true}
          onClick={handleGenerateQRCode}
        >
          Generate QR Code
        </button>
      </div>
      <div>
        <p style={{ margin: "20px 0" }}>
          {qrCodeText ? "QR Code for: " : ""}
          <span
            style={{ textAlign: "center", fontSize: "16px", fontWeight: "600" }}
          >
            {qrCodeText || "Enter text and click 'Generate QR Code'"}
          </span>
        </p>
        <QRCode id="qrCode" value={qrCodeText} size={350} bgColor="#ffffff" />
      </div>
    </div>
  );
}
