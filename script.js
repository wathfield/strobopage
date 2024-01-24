let intervalId;

    function startStroboscope() {
        // Background color
        const bodyColor = document.getElementById('backColorInput').value;

        //Main inputs
        const interval = parseFloat(document.getElementById('intervalInput').value) * 1000;
        const length = parseFloat(document.getElementById('lengthInput').value) * 1000;
        const color = document.getElementById('colorInput').value;
        const strobeContainer = document.getElementById('strobeContainer');
        const colorTransition = parseFloat(document.getElementById('TransitionTimeInput').value);
        strobeContainer.style.transition = `background-color ${colorTransition}s`;
        intervalId = setInterval(() => {
            strobeContainer.style.backgroundColor = color;
            setTimeout(() => {
                strobeContainer.style.backgroundColor = bodyColor;
            }, length);
        }, interval);
    }
    function stopStroboscope() {
        clearInterval(intervalId);
        document.getElementById('strobeContainer').style.backgroundColor = 'black';
    }


    // Add another input to choose a transition and make time adaptable
    // make site phone adaptable
    // show and hide Control settings.


