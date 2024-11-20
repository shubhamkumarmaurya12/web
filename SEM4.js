document.getElementById('toggle-theme').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});

const products = document.querySelectorAll('.product .btn');
products.forEach(btn => {
    btn.addEventListener('click', function() {
        alert('This feature is currently unavailable.');
    });
});
