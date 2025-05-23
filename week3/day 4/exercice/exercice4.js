document.getElementById("MyForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form from submitting normally

    const radiusInput = document.getElementById("radius").value;
    const radius = parseFloat(radiusInput);

    if (!isNaN(radius) && radius > 0) {
        const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
        document.getElementById("volume").value = volume.toFixed(4); // Rounded to 4 decimal places
    } else {
        alert("Please enter a valid positive number for radius.");
        document.getElementById("volume").value = "";
    }
});