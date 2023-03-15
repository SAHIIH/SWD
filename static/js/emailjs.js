
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

                document.getElementById('contact_form').reset();
                Toastify({
                    text: "Thanks for reaching me out, i will contact you soon",
                    duration: 8000,
                    destination: "#",
                    newWindow: true,
                    close: true,
                    gravity: "top", // `top` or `bottom`
                    position: "right", // `left`, `center` or `right`
                    stopOnFocus: true, // Prevents dismissing of toast on hover
                    style: {
                        background: "linear-gradient(to right, #619cec, #619cec)",
                    },
                    onClick: function () { } // Callback after click
                }).showToast();
            }, function (error) {
                console.log('FAILED...', error);
            });
    });
};
