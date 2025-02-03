document.addEventListener("DOMContentLoaded", () => {
    const homeButton = document.getElementById("homeButton");
    const profileButton = document.getElementById("profileButton");
    const contactButton = document.getElementById("contactButton");

    const buttonArr = [homeButton, profileButton, contactButton];

    buttonArr.forEach((button) => {
        button.addEventListener("click", function() {
            // Only change active state if the clicked button is not already active
            if (!this.classList.contains("active")) {
                buttonArr.forEach((btn) => {
                    btn.classList.remove("active");
                    this.classList.add("active");
                });
            };

            // Get the corresponding pages
            const home = document.getElementById("home");
            const profile = document.getElementById("profile");
            const contact = document.getElementById("contactPage");

            //Remove active from all pages
            home.classList.remove("active");
            profile.classList.remove("active");
            contact.classList.remove("active");

            // Add active to the clicked page
            if (this.id === "homeButton") {
                home.classList.add("active");
            } else if (this.id === "profileButton") {
                profile.classList.add("active");
            } else if (this.id === "contactButton") {
                contact.classList.add("active");
            }

            // Refresh AOS after a short delay to re-calculate the positions
            setTimeout(() => {
                AOS.refresh();
            }, 50);
        });
    });
});