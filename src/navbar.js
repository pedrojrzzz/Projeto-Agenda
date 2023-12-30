function menu() {
    const navList = document.querySelector('.nav-list')
    const line1 = document.querySelector('.line1')
    const line2 = document.querySelector('.line2')
    const line3 = document.querySelector('.line3')
    const mobileMenu = document.querySelector('.mobile-menu')

    navList.classList.toggle('active')
    line1.classList.toggle('active')
    line2.classList.toggle('active')
    line3.classList.toggle('active')
    mobileMenu.classList.toggle('active')

}

function menuPopUp(el) {
    
    if (el.classList.contains('sobre')) {
    const sobrePopUp = document.querySelector('.sobrePopUp')

    sobrePopUp.showModal()
    }

    if (el.classList.contains('ajuda')) {
    const ajudaPopUp = document.querySelector('.ajudaPopUp')
    ajudaPopUp.showModal()
    }

    if (el.classList.contains ('configuraçoes')) {
        const configuraçoes = document.querySelector('.configuraçoesPopUp')
        configuraçoes.showModal()
    }
}

export { menu, menuPopUp }