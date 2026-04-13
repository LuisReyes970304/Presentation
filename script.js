const burger_btn = document.getElementById("burger_btn");
const burger_list = document.getElementById("burger_list");

burger_btn.addEventListener("click", (e) => {
    e.stopPropagation();
    burger_list.classList.toggle("show");
});

burger_list.addEventListener("click", (e) => {
    e.stopPropagation();
});

window.addEventListener("click", () => {
    burger_list.classList.remove("show");
});

const popup = document.getElementById("popup_message");
const close_btn = document.getElementById("close_pup");

close_btn.addEventListener("click", () => {
    popup.style.display = "none";
});
