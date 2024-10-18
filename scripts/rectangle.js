function calculateRectangleArea() {
    // get rectangle width value
    const rectangleWidthInputField = document.getElementById('rectangle-width');
    const rectangleWidthText = rectangleWidthInputField.value;
    const width = parseFloat(rectangleWidthText);
    
    // get rectangle height value
    const rectangleHeightInputField = document.getElementById('rectangle-height');
    const rectangleHeightText = rectangleHeightInputField.value;
    const height = parseFloat(rectangleHeightText);

    // area calculate

    const area = width * height;

    const rectangleAreaSpan = document.getElementById('rectangle-area');
    rectangleAreaSpan.innerText = area;

}