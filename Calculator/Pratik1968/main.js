let value = "";
let ans = 0;

const input = document.getElementById("ans");

function setInput() {
    input.value = value;
}

window.onload = setInput;

function NumberButtonClick(number) {
    value += number;
    setInput();
}

function functionButton(fnCode) {
    if (!value) return;

    switch (fnCode) {
        case functionVar.add:
            value += "+";
            break;
        case functionVar.subtraction:  // typo fixed!!
            value += "-";
            break;
        case functionVar.multiplication:
            value += "*";  // proper operation
            break;
        case functionVar.division:
            value += "/";
            break;
        case functionVar.percentage:
            value += "*0.01";  // better percentage calculation
            break;
        case functionVar.power:
            value += "**";
            break;
        case functionVar.decimal:
            value += ".";
            break;
        case functionVar.backspace:
            value = value.slice(0, -1);
            break;
        case functionVar.clear:
            value = "";
            break;
        case functionVar.equal:
            try {
                // make sure there is no bad stuff in input
                if (/[^0-9+\-*/.%() ]/.test(value)) throw new Error("Invalid characters");
                const result = eval(value);
                if (!isFinite(result)) {
                    value = "Error";
                } else {
                    ans = result;
                    value = result.toString();
                }
            } catch (e) {
                value = "Error";
            }
            break;
    }

    setInput();
}
