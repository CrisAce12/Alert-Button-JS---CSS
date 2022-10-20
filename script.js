rectangleButton = document.getElementById('rectangleButton');

smallButton = document.getElementById('smallButton');
bigButton = document.getElementById('bigButton');

function styleHoverInclude() {
    
    smallButton.setAttribute("class","smallButton smallButton--hover");
    bigButton.setAttribute("class","bigButton bigButton--hover");

}

function styleHoverExclude() {
    
    smallButton.setAttribute("class","smallButton");
    bigButton.setAttribute("class","bigButton");

}

function showRectangle(){

    if(rectangleButton.style.display == 'flex'){

        rectangleButton.style.display = 'none';

    }else{

        rectangleButton.style.display = 'flex';

    }

}

buttons = [smallButton,bigButton];

buttons.forEach(element => {
    
    element.addEventListener("mouseover", styleHoverInclude);
    element.addEventListener("mouseleave", styleHoverExclude);

});