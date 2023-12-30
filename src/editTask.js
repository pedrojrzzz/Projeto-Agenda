import { validaFormEdit } from "./validaForm"

function editTask(el, pai) {
    const dialogEdit = document.querySelector('.editValues')
    dialogEdit.classList.add('active')
    dialogEdit.showModal()

    const fechar = document.querySelector('.editValues .fechar')
    fechar.addEventListener('click', e => {
        dialogEdit.close()
        dialogEdit.classList.remove('active')
        pai.classList.remove('editavel')
    })

    const editTitulo = document.querySelector('.editTitulo')
    const editDataHora = document.querySelector('.editDataHora')
    const editLocal = document.querySelector('.editLocal')
    const editAnotacao = document.querySelector('.editAnotacao')

    // mantendo valores dos inputs originais nos inputs de edit
    const selectTask = el.closest('.divCreateAuto')
    const valuesInputOriginal = selectTask.children
    const titulo = valuesInputOriginal[0].innerText
    const dataHora = valuesInputOriginal[1].innerText
    const local = valuesInputOriginal[2].innerText
    const anotacao = valuesInputOriginal[3].innerText

    editTitulo.value = titulo.replace(/[^\x00-\x7F]+/g, '')
    editLocal.value = local.replace(/[^\x00-\x7F]+/g, '');
    editAnotacao.value = anotacao.replace(/[^\x00-\x7F]+/g, '');

    //

    const aplicar = document.querySelector('.editEnviar')
    aplicar.addEventListener('click', async function chamandoEdit(e) {
        if (pai.classList.contains('editavel')) {

            let editTitulo2 = document.querySelector('.editTitulo').value
            let editDataHora2 = document.querySelector('.editDataHora').value
            let editLocal2 = document.querySelector('.editLocal').value
            let editAnotacao2 = document.querySelector('.editAnotacao').value

            editDataHora2 = editDataHora2.replace('T', ' ')
            editDataHora2 = editDataHora2.replace(/-/g, '/')

            /**************************************************************************/

            // Validando o formulário edit
            
                const isValid = await validaFormEdit(true)
                    .then(flag => {
                        if (flag) {
                            valuesInputOriginal[0].innerText = editTitulo2
                            valuesInputOriginal[1].innerText = editDataHora2
                            valuesInputOriginal[2].innerText = editLocal2
                            valuesInputOriginal[3].innerText = editAnotacao2


                            dialogEdit.close()
                            dialogEdit.classList.remove('active')
                            pai.classList.remove('editavel')
                     

                        }
                    })
            }


        })}

export { editTask }