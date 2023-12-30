
function background () {
    const select = document.querySelector('.imgFundo')
    const optionSelecionado = select.value
    const main = document.querySelector('main')
    const navbar = document.querySelector('nav')

    switch (optionSelecionado) {
        case 'padrao':
            if (main.classList.contains('noite-estrelada' || 'folha-vermelha' || 'gotas-agua')){
                main.classList.remove('noite-estrelada' || 'folha-vermelha' || 'gotas-agua')
            }
            main.classList.remove('noite-estrelada', 'folha-vermelha', 'gotas-agua')
            navbar.classList.remove('navbarNoite-estrelada', 'navbarFolha-vermelha', 'navbarGotas-agua')
            break;
        
        case 'noite-estrelada':
            if (main.classList.contains('noite-estrelada' || 'folha-vermelha' || 'gotas-agua')){
                main.classList.remove('noite-estrelada' || 'folha-vermelha' || 'gotas-agua')
            }
            main.classList.add('noite-estrelada')
            navbar.classList.add('navbarNoite-estrelada')
            break;

        case 'folha-vermelha':
            if (main.classList.contains('noite-estrelada' || 'folha-vermelha' || 'gotas-agua')){
                main.classList.remove('noite-estrelada' || 'folha-vermelha' || 'gotas-agua')
            }
            main.classList.add('folha-vermelha')
            navbar.classList.add('navbarFolha-vermelha')
            break;

        case 'gotas-agua':
            if (main.classList.contains('noite-estrelada' || 'folha-vermelha' || 'gotas-agua')){
                main.classList.remove('noite-estrelada' || 'folha-vermelha' || 'gotas-agua')
            }
            main.classList.add('gotas-agua')
            
            break;
    }
}

export { background }