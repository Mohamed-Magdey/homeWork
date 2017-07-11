
var slideInterval = 3500;

function getFigure() {
    return document.getElementById('carousel').getElementsByTagName('figure');
};

/*
    This function iterates over the figure elements in the section element. 
    It removes the visible class from the current figure element, then adds 
    the class to the next figure element. Once complete, it uses the setTimeout 
    function to invoke itself again after a specified amount of time 
    (3500 milliseconds = 3.5 seconds).
*/
function moveForward() {
    var pointer;
    var figures = getFigure();
    for (var i = 0; i < figures.length; i++){
        if (figures[i].className == 'visible') {
            figures[i].className = '';
            pointer = i;
        }
    }
    if (++pointer == figures.length) {
        pointer = 0;
    }
    figures[pointer].className = 'visible';
    setTimeout(moveForward, slideInterval);
};

function startPlayback() {
    setTimeout(moveForward, slideInterval);
};

startPlayback();