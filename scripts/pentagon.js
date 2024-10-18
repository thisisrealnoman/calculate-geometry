function calculatePentagonArea(){
    const p = getInputValueById('pentagon-p');
    const b = getInputValueById('pentagon-b');
    const area = 0.5 * p * b;
    setInnerTextById('pentagon-area', area);
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