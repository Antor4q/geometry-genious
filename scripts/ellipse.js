function calculateEllipseArea(){
    const majorRadius = getInputValueById('ellipse-major-radius');
    const minorRadius = getInputValueById('ellipse-minor-radius');
    const area = 3.14 * majorRadius * minorRadius;
    setInnerTextById('ellipse=-area', area);
}


function calculateRhombusArea(){
    const rhombusPeri = getInputValueById('rhombus-perimeter');
    const rhombusApo = getInputValueById('rhombus-apothem');
    const area = 0.5 * rhombusPeri * rhombusApo;
    setInnerTextById('rhombus-area', area);
}
