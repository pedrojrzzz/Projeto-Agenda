

function background () {
    const select = document.querySelector('.imgFundo')
    const optionSelecionado = select.value
    const main = document.querySelector('main')
    const navbar = document.querySelector('nav')
    const container_recebe_task = document.querySelector('.container-recebe-task')
    
    switch (optionSelecionado) {
        case 'padrao':
            limpandoClasses(optionSelecionado)
            break;
        
        case 'noite-estrelada':
            limpandoClasses(optionSelecionado)
            main.classList.add('noite-estrelada')

            break;

        case 'folha-vermelha':
            limpandoClasses(optionSelecionado)
            main.classList.add('folha-vermelha')
            
            break;

        case 'gotas-agua':
            limpandoClasses(optionSelecionado)
            main.classList.add('gotas-agua')
            
            break;
    }
}

function limpandoClasses(optionSelecionado) {
    const main = document.querySelector('main')

    const classes = ['padrao', 'folha-vermelha', 'noite-estrelada', 'gotas-agua']
    
    let buscar = optionSelecionado
    const posicao = classes.indexOf(buscar)
    classes.splice(posicao, 1)

    if (main.classList.contains('folha-vermelha') || main.classList.contains('noite-estrelada') || main.classList.contains('gotas-agua')){
        console.log('teste')
        for (let i = 0; i < classes.length; i++) {
            main.classList.remove(classes[i])
        }
    }

    
}

export { background }