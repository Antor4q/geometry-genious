
function calculateParallelogram(){
    // parallelogram base 
    const parallelogramBaseInput = document.getElementById('parallelogram-base');
    const parallelogramText = parallelogramBaseInput.value;
    const base =parseFloat(parallelogramText);
    console.log(base);

    // parallelogram height
    const parallelogramHeightInput = document.getElementById('parallelogram-height');
    const parallelogramText2 = parallelogramHeightInput.value;
    const height = parseFloat(parallelogramText2);
    console.log(height);

    // calculate parallelogram area

    const area = base * height;
    console.log('area of the parallelogram is:', area);

    // display parallelogram area
    const parallelogramAreaSpan = document.getElementById('parallelogram-area');
    parallelogramAreaSpan.innerText = area;

}