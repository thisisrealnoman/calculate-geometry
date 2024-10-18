function calculateEllipseArea(){
    const a = getInputValueById('ellipse-a');
    const b = getInputValueById('ellipse-b');
    const area = 3.1416 * a * b;
    setInnerTextById('ellipse-area', area);
}



function getInputValueById(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputValueText = inputField.value;
    const inputValue = parseFloat(inputValueText);
    return inputValue;
}

function setInnerTextById(elementId, areaValue){
    const element = document.getElementById(elementId);
    element.innerText = areaValue;
}