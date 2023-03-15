
window.onload = function () {
    document.getElementById('contact_form').addEventListener('submit', function (event) {
        event.preventDefault();
        // generate a five digit number for the contact_number variable
        // this.contact_number.value = Math.random() * 100000 | 0;
        // this.message.value += this.website.value;
        // these IDs from the previous steps
        emailjs.sendForm('service_4k7fubb', 'template_yc0jzp9', this)
            .then(function () {
                console.log('SUCCESS!');
            }, function (error) {
                console.log('FAILED...', error);
            });
    });
};
