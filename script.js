let intervalId;

    function startStroboscope() {
        const interval = parseFloat(document.getElementById('intervalInput').value) * 1000;
        const length = parseFloat(document.getElementById('lengthInput').value) * 1000;
        const color = document.getElementById('colorInput').value;
        intervalId = setInterval(() => {
            const strobeContainer = document.getElementById('strobeContainer');
            strobeContainer.style.backgroundColor = color;
            setTimeout(() => {
                strobeContainer.style.backgroundColor = 'black';
            }, length);
        }, interval);
    }
    function stopStroboscope() {
        clearInterval(intervalId);
        document.getElementById('strobeContainer').style.backgroundColor = 'black';
    }