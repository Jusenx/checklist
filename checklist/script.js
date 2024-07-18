const btt = document.getElementById ("btpop")
const modal = document.querySelector ("dialog")
const bttclose = document.getElementById ("btclose")

btt.onclick = function () {
    modal.showModal()
    btt.classList.add ("hidden")
}

bttclose.onclick = function() {
    modal.close()
    btt.classList.remove 
}
