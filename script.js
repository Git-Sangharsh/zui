document.addEventListener("DOMContentLoaded", function() {
    const showSignupButton = document.querySelector(".inner-nav-last-header");
    const signupWrapper = document.querySelector(".signup");
    const showSigninButton = document.querySelector(".signup-header-clr");
    const signinWrapper = document.querySelector(".signin");

    showSignupButton.addEventListener("click", function() {
        toggleWrapper(signupWrapper);
    });

    showSigninButton.addEventListener("click", function() {
        toggleWrapper(signinWrapper);
    });

    // Function to toggle display and position
    function toggleWrapper(wrapper) {
        if (wrapper.style.display === "flex") {
            wrapper.style.display = "none";
            wrapper.style.position = "static"; // Set it back to the default position
            document.body.style.overflow = "visible"; /* Show scrollbar */
        } else {
            wrapper.style.display = "flex";
            wrapper.style.position = "fixed"; // or "absolute" depending on your layout
            document.body.style.overflow = "hidden"; /* Hide scrollbar */
            centerWrapper(wrapper); // Call the function to center the wrapper initially
        }
    }

    // Function to center the wrapper
    function centerWrapper(wrapper) {
        const windowHeight = window.innerHeight;
        const windowWidth = window.innerWidth;
        const wrapperHeight = wrapper.clientHeight;
        const wrapperWidth = wrapper.clientWidth;

        const topPosition = (windowHeight - wrapperHeight) / 2 + "px";
        const leftPosition = (windowWidth - wrapperWidth) / 2 + "px";

        wrapper.style.top = topPosition;
        wrapper.style.left = leftPosition;
    }

    // Clicking on .signup-header to load .signup-wrapper
    const signupHeaderButton = document.querySelector(".signup-header");
    signupHeaderButton.addEventListener("click", function() {
        toggleWrapper(signupWrapper);
    });

    // Clicking on .signin-header to load .signin-wrapper
    const signinHeaderButton = document.querySelector(".signin-header");
    signinHeaderButton.addEventListener("click", function() {
        // Hide signin wrapper and show signup wrapper
        signinWrapper.style.display = "none";
        toggleWrapper(signupWrapper);
    });

    // Center the signup-wrapper initially when the page loads
    centerWrapper(signupWrapper);
    centerWrapper(signinWrapper);
});
