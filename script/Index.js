
function alternarModo() {
    document.body.classList.toggle('dark-mode');
}


document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('theme-toggle').addEventListener('click', alternarModo);
});