

let btn = document.querySelector('.downIconImage')
let viewSection = document.getElementById('box')

function scroll() {
    debugger;
    viewSection.scrollIntoView({block:"center" , behavior: "smooth"})
}

btn.addEventListener('click' , scroll)