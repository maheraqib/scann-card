document.getElementById("ticketForm").addEventListener("submit", function (event) {
    event.preventDefault();

    // Get form values
    let fullName = document.getElementById("fullName").value.trim();
    let email = document.getElementById("email").value.trim();
    let github = document.getElementById("github").value.trim();
    let avatar = document.getElementById("avatar").files[0];

    let isValid = true;

    // Name validation
    if (fullName === "") {
        document.getElementById("nameError").innerText = "Full name is required.";
        document.getElementById("nameError").style.display = "block";
        isValid = false;
    } else {
        document.getElementById("nameError").style.display = "none";
    }

    // Email validation
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        document.getElementById("emailError").innerText = "Invalid email format.";
        document.getElementById("emailError").style.display = "block";
        isValid = false;
    } else {
        document.getElementById("emailError").style.display = "none";
    }

    // GitHub username validation
    if (github === "") {
        document.getElementById("githubError").innerText = "GitHub username is required.";
        document.getElementById("githubError").style.display = "block";
        isValid = false;
    } else {
        document.getElementById("githubError").style.display = "none";
    }

    // Avatar validation
    if (!avatar) {
        document.getElementById("avatarError").innerText = "Please upload an avatar.";
        document.getElementById("avatarError").style.display = "block";
        isValid = false;
    } else if (avatar.size > 500000) {
        document.getElementById("avatarError").innerText = "File size must be under 500KB.";
        document.getElementById("avatarError").style.display = "block";
        isValid = false;
    } else {
        document.getElementById("avatarError").style.display = "none";
    }

    // If valid, show ticket
    if (isValid) {
        document.getElementById("previewName").innerText = fullName;
        document.getElementById("previewEmail").innerText = email;
        document.getElementById("previewGithub").innerText = github;

        let reader = new FileReader();
        reader.onload = function (e) {
            document.getElementById("previewAvatar").src = e.target.result;
        };
        reader.readAsDataURL(avatar);

        document.getElementById("ticketPreview").classList.remove("hidden");
    }
});
