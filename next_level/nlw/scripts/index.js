// hiding the modal
const buttonSearch = document.querySelector("#page-home main a")
const modal = document.querySelector("#modal")
const close = document.querySelector("#modal .header a ")

buttonSearch.addEventListener("click", () => {
    // Opening modal and removing its "hide" class
    modal.classList.remove("hide")
})

close.addEventListener("click", () => {
    modal.classListadd("hide")
})