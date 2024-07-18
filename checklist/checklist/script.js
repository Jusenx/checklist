const btt = document.getElementById ("btpop")
const modal = document.querySelector ("dialog")
const bttclose = document.getElementById ("btclose")
const bttadd = document.getElementById ("btadd")

btt.onclick = function () {
    modal.showModal()
    btt.classList.add ("hidden")
}

bttclose.onclick = function() {
    modal.close()
    btt.classList.remove ("hidden")
}

bttadd.onclick =  function () {
    const tarefa = document.getElementById ("new-task").value
    const lista = document.getElementById ("task-list")
    lista.textContent = tarefa;
    modal.close()
    btt.classList.remove ("hidden")
    document.getElementById ("new-task").value = " ";

}