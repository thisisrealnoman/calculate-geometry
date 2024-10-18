// function calculateParallelogramArea(){
//     const parallelogramBaseInputField = document.getElementById('parallelogram-base');
//     const parallelogramBaseText = parallelogramBaseInputField.value;
//     const base = parseFloat(parallelogramBaseText);

//     const parallelogramHeightInputField = document.getElementById('parallelogram-height');
//     const parallelogramHeightText = parallelogramHeightInputField.value;
//     const height = parseFloat(parallelogramHeightText);

//     const area = base * height;

//     const parallelogramAreaSpan = document.getElementById('parallelogram-area');
//     parallelogramAreaSpan.innerText = area;
// }

function calculateParallelogramArea(){
    const base = getInputValueById('parallelogram-base');
    const height = getInputValueById('parallelogram-height');
    const area = base * height;
    setInnerTextById('parallelogram-area', area);
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