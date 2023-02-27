
document.getElementById("vernotas").addEventListener('click', function() {
        document.getElementById("notas").style.display = 'block';
        document.getElementById("vernotas").style.display = 'none';
        document.getElementById("vermenos1").style.display = 'block';
});

document.getElementById("vermenos1").addEventListener('click', function() {
    document.getElementById("notas").style.display = 'none';
    document.getElementById("vermenos1").style.display = 'none';
    document.getElementById("vernotas").style.display = 'block';
});

document.getElementById("vervideos").addEventListener('click', function() {
    document.getElementById("videos").style.display = 'block';
    document.getElementById("vervideos").style.display = 'none';
    document.getElementById("vermenos2").style.display = 'block';
});

document.getElementById("vermenos2").addEventListener('click', function() {
    document.getElementById("videos").style.display = 'none';
    document.getElementById("vermenos2").style.display = 'none';
    document.getElementById("vervideos").style.display = 'block';
});
