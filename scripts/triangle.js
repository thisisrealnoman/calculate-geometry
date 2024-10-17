function calculateTriangleArea(){
    //get triangle base value
    const triangleBaseInputField = document.getElementById('triangle-base');
    const triangleBaseText = triangleBaseInputField.value;
    const base = parseFloat(triangleBaseText);
    //console.log(typeof(base));


    // get triangle height value
    const triangleHeightInputField = document.getElementById('triangle-height');
    const triangleHeightText = triangleHeightInputField.value;
    const height = parseFloat(triangleHeightText);

    const area = 0.5 * base * height;
    //console.log(area);

    // const spanTag = document.createElement('span');
    // spanTag.innerText = area;
    // document.getElementById('area-sub-container').appendChild(spanTag);

    const triangleAreaSpan = document.getElementById('triangle-area');
    triangleAreaSpan.innerText = area;

    
}