document.addEventListener("DOMContentLoaded", function() {
    var dropdownToggle = document.getElementById("dropdown-toggle");
    var dropdownMenu = document.querySelector(".dropdown-menu");

    dropdownToggle.addEventListener("click", function(e) {
        e.preventDefault(); // Prevenir la acción predeterminada del enlace
        dropdownMenu.style.display = (dropdownMenu.style.display === "block") ? "none" : "block";
    });

    // Cerrar el menú si se hace clic en cualquier lugar fuera de él
    document.addEventListener("click", function(e) {
        if (e.target !== dropdownToggle && e.target !== dropdownMenu) {
            dropdownMenu.style.display = "none";
        }
    });
});
