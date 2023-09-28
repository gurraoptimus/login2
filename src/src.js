const wrapper = document.querySelector(".wrapper");
const regiserlink = document.querySelector(".regiser-link");
const loginlink = document.querySelector(".login-link");

regiserlink.onclick =() => {
    wrapper.classList.add("active");
}