document.addEventListener("DOMContentLoaded", () => {
    const homeButton = document.getElementById("homeButton");
    const profileButton = document.getElementById("profileButton");
    const contactButton = document.getElementById("contactButton");

    const buttonArr = [homeButton, profileButton, contactButton];

    buttonArr.forEach((button) => {
        button.addEventListener("click", function() {
            // First remove the active class from all buttons
            buttonArr.forEach((button) => {
                button.classList.remove("active");

                // Add the active class to the button that was clicked
                this.classList.toggle("active");
            });
            

            // Get the pages
            const home = document.getElementById("home");
            const profile = document.getElementById("profile");
            const contact = document.getElementById("contact");

            // Activate the corresponding page
            if (this.id === "homeButton") {
                home.classList.toggle("active");
                profile.classList.remove("active");
                contact.classList.remove("active");
            } else if (this.id === "profileButton") {
                home.classList.remove("active");
                profile.classList.toggle("active");
                contact.classList.remove("active");
            } else if (this.id === "contactButton") {
                this.classList.toggle("active");
                home.classList.remove("active");
                profile.classList.remove("active");
            } else {
                home.classList.remove("active");
                profile.classList.remove("active");
                contact.classList.remove("active");
            }
        });
    });
});