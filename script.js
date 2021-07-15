let btn = document.querySelector('.down-icon-image')
let viewSection = document.getElementById('box')

function scroll() {
    viewSection.scrollIntoView({block: "center", behavior: "smooth"})
}

btn.addEventListener('click', scroll)
