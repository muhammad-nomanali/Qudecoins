// copy address
function copyToClipboard() {
    const contractAddress = document.getElementById("contract-address").innerText;
    const textarea = document.createElement("textarea");
    textarea.value = contractAddress;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
    alert("Copied to clipboard: " + contractAddress);
}