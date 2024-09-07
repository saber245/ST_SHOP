function changeImage(src) {
    document.getElementById('main-image').src = src;
}

function showForm() {
    document.getElementById('order-form').classList.remove('hidden');
}

document.getElementById('checkout-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;
    if (name && email && address) {
        document.getElementById('form-message').textContent = 'شكرًا! تم استلام طلبك. سنقوم بالتحقق من المعلومات وسنتصل بك قريباً.';
        document.getElementById('form-message').style.color = 'green';
        document.getElementById('checkout-form').reset();
    } else {
        document.getElementById('form-message').textContent = 'يرجى ملء جميع الحقول المطلوبة.';
        document.getElementById('form-message').style.color = 'red';
    }
});
