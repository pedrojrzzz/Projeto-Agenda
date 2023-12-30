import { menu, menuPopUp } from './navbar.js'
import { addTasks } from './addTask.js'
import { removeTask } from './removeTask.js'
import { editTask } from './editTask.js'
import { background } from './config.js'
import { async } from 'regenerator-runtime'
import { validandoForm, validaFormEdit } from './validaForm.js'


const mobileMenu = document.querySelector('.mobile-menu')
const body = document.querySelector('body')

/*****************************************************************************************/
// MOBILE-MENU EVENTO CLIQUE
mobileMenu.addEventListener('click', e => {
    menu()
})

body.addEventListener('click', e => {
    let el = e.target

    if (el.classList.contains('sobre')) {
        menuPopUp(el)
    }

    if (el.classList.contains('ajuda')) {
        menuPopUp(el)

    }

    if (el.classList.contains('configuraçoes')) {
        menuPopUp(el)
    }

    if (el.classList.contains('fechar')) {
        const modal = document.querySelectorAll('.modal')
        modal[0].close()
        modal[1].close()
        modal[2].close()
    }

})

/***********************************************************************************************/
// ADD TASKS

body.addEventListener('click', async function chamandoAddTask(e) {
    let el = e.target

    if (el.classList.contains('enviar')) {
        const isValid = await validandoForm(true)
            .then(flag => {

                if (flag) {
                    addTasks()
                }
            })

    }
})

/********************************************************************************************/
// Removedor

body.addEventListener('click', e => {
    let el = e.target

    if (el.classList.contains('iconRemovedor')) {
        removeTask(el)
    }
})

/***********************************************************************************************/
// EDIT TASK
body.addEventListener('click', e => {
    let el = e.target
    if (el.classList.contains('iconEditar')) {
        let filho = el.parentNode
        let pai = filho.parentNode
        editTask(el, pai)
        pai.classList.add('editavel')
    }
}
)

body.addEventListener('click', e => {
    let el = e.target

    if (el.classList.contains('aplicar')) {
        background()
    }
})

