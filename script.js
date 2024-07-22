document.addEventListener('DOMContentLoaded', function() {
    const btt = document.getElementById("btpop");
    const modal = document.querySelector("dialog");
    const bttclose = document.getElementById("btclose");
    const bttadd = document.getElementById("btadd");

    let tarefas = [];

    // Função para carregar tarefas do localStorage
    function loadTarefas() {
        const savedTarefas = localStorage.getItem("tarefas");
        if (savedTarefas) {
            tarefas = JSON.parse(savedTarefas);
            renderTarefas();
        }
    }

    // Função para salvar tarefas no localStorage
    function saveTarefas() {
        localStorage.setItem("tarefas", JSON.stringify(tarefas));
    }

    // Função para renderizar tarefas
    function renderTarefas() {
        const lista = document.getElementById("task-list");
        lista.innerHTML = ""; // Limpar a lista atual
        tarefas.forEach((tarefa, index) => {
            const li = document.createElement("li");
            li.textContent = tarefa;
            
            // Adiciona botão de remover tarefa
            const removeButton = document.createElement("button")
            removeButton.innerHTML = '<i class="bi bi-check-circle"></i>'
            removeButton.onclick = function() {
                removeTarefa(index);
            };
            
            li.appendChild(removeButton);
            lista.appendChild(li);
        });
    }

    // Função para remover tarefa
    function removeTarefa(index) {
        tarefas.splice(index, 1);
        saveTarefas();
        renderTarefas();
    }

    // Adicionar interação do bttadd com a tecla enter
    document.addEventListener("keypress", function(e) {
        if (e.key === "Enter") {
            bttadd.click();
        }
    });

    // Adicionar interação do bttclose com o esc



    // Configuração do botão de adicionar tarefas
    bttadd.onclick = function () {
        const tarefa = document.getElementById("new-task").value;
        if (tarefa.trim() !== "") {
            try {
                tarefas.push(tarefa);
                saveTarefas();
                renderTarefas();
                modal.close();
                btt.classList.remove("hidden");
                document.getElementById("new-task").value = "";
            } catch (error) {
                console.error("Erro ao adicionar a tarefa:", error);
            }
        }
    };

    // Carregar tarefas do localStorage ao inicializar a página
    loadTarefas();

    btt.onclick = function () {
        modal.showModal();
        btt.classList.add("hidden");
    };

    bttclose.onclick = function () {
        modal.close();
        btt.classList.remove("hidden");
    };
});
