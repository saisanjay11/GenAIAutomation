function submitForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;

    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
    localStorage.setItem('address', address);

    window.location.href = 'confirmation.html';
}

window.onload = function() {
    const nameDisplay = document.getElementById('nameDisplay');
    const emailDisplay = document.getElementById('emailDisplay');
    const addressDisplay = document.getElementById('addressDisplay');

    if (nameDisplay && emailDisplay && addressDisplay) {
        nameDisplay.textContent = localStorage.getItem('name');
        emailDisplay.textContent = localStorage.getItem('email');
        addressDisplay.textContent = localStorage.getItem('address');
    }
}
