console.log("hello");

const menuToggle = () => {
    const hamburger = document.getElementById('hamburger');
    if (hamburger.classList.contains("open")) {
        hamburger.classList.remove("open");
    } else {
        hamburger.classList.add("open");
    }
}