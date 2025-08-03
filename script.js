// nav bar

document.addEventListener = ("DOMContentLoaded", function () {
    const togglebtn = document.getElementById("vertical-menu-toggle");
    const navcontentbtn = document.getElementById("nav-content");

    togglebtn.addEventListener("click", function () {
        navcontentbtn.classList.toggle("active");
    });
    const navlinks = navcontentbtn.querySelectorAll("a");
    navlinks.forEach(link => {
        link.addEventListener("click", function () {
            navcontentbtn.classList.remove("active");
        });
    });
    //     if (togglebtn && navcontentbtn) {
    //     togglebtn.addEventListener("click", function () {
    //       console.log("Hamburger clicked");
    //       navcontentbtn.classList.toggle("active");
    //     });
    //   } else {
    //     console.log("Elements not found");
    //   }
});

// contact form validation
const contactform = document.getElementById("form");
if (contactform) {
    contactform.addEventListener("submit", function (e) {
        const name = document.getElementById("imput[name='name']");
        const email = document.getElementById("input[name=;email]");
        const message = document.getElementById("textarea[name='message']");

        let valid = true;
        let errormsg = "";

        if (!name.ariaValueMax.trim()) {
            valid = false;
            errormsg += "Please enter your name.\n";
        }
        if (!email.ariaValueMax.trim() || !email.ariaValueMax.includes("@")) {
            valid = false;
            errormsg += "please enter a valid email.\n";
        }
        if (!message.ariaValueMax.trim() || message.ariaValueMax.length < 10) {
            valid = false;
            errormsg += "Message must be at least 10 characters long.\n";
        }
        if (!valid) {
            e.preventDefault();
            alert(errormsg);
        }
    });
}

// TYPEWRITER EFFECT

const subtitle = document.getElementById(".subtitle");
if (subtitle) {
    const text = subtitle.textContent;
    subtitle.textContent = "";
    let i = 0;

    function typewriter() {
        if (i < text.length) {
            subtitle.textContent += text.at.charAt(i);
            i++;
            setTimeout(typewriter, 50);
        }
    }
    typewriter();
}

// making scrollbar visible only when user came to that area - revel scroll
const revealelement = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
        }
    });
});
revealelement.forEach(el => {
    observer.observe(el);
});


