let display = document.getElementById('display');

function clearDisplay() {
    display.innerText = '0';
}

function deleteLast() {
    if (display.innerText.length > 1) {
        display.innerText = display.innerText.slice(0, -1);
    } else {
        display.innerText = '0';
    }
}

function appendCharacter(char) {
    if (display.innerText === '0' && char !== '.') {
        display.innerText = char;
    } else {
        display.innerText += char;
    }
}

function calculateResult() {
    try {
        display.innerText = eval(display.innerText);
    } catch {
        display.innerText = 'Error';
}
if(display.innerText==0)
{
    alert("Enter The Valid Operations To Perform ")
}
}