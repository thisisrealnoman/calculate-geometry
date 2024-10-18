function calculateParallelogramArea(){
    const parallelogramBaseInputField = document.getElementById('parallelogram-base');
    const parallelogramBaseText = parallelogramBaseInputField.value;
    const base = parseFloat(parallelogramBaseText);

    const parallelogramHeightInputField = document.getElementById('parallelogram-height');
    const parallelogramHeightText = parallelogramHeightInputField.value;
    const height = parseFloat(parallelogramHeightText);

    const area = base * height;

    const parallelogramAreaSpan = document.getElementById('parallelogram-area');
    parallelogramAreaSpan.innerText = area;
}