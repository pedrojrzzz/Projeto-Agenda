async function validandoForm (flag) {
    const inputTitulo = document.querySelector('.titulo')
    const inputData = document.querySelector('.dataHora')
    const inputTituloValor = inputTitulo.value
    const inputDataValor = inputData.value

    const div1 = document.querySelector('.erro1')
    const div2 = document.querySelector('.erro2')
    
    const mensagem = 'Este campo não pode estar vazio'
    

    
    
    if (inputTituloValor.length === 0) {
        flag = false
        
        if (div1.innerHTML === '') {
        //inputTitulo.insertAdjacentElement('afterend', div1)
        div1.innerHTML = mensagem
        }
    } else {
       div1.innerHTML = ''
    }
    if (inputDataValor.length === 0) {
        flag = false
        
        if (div2.innerHTML === '') {
        //inputData.insertAdjacentElement('afterend', div2)
        div2.innerHTML = mensagem

        }
    } else {
        div2.innerHTML = ''
        
    }
    return flag
}


export async function validaFormEdit (flag) {
    const inputTituloEdit = document.querySelector('.editTitulo')
    const inputDataEdit = document.querySelector('.editDataHora')
    const inputTituloEditValue = document.querySelector('.editTitulo').value
    const inputDataEditValue = document.querySelector('.editDataHora').value

    const div1Edit = document.querySelector('.erroEdit1')
    const div2Edit = document.querySelector('.erroEdit2')

    const mensagem = 'Este campo não pode estar vazio'


    if (inputTituloEditValue.length === 0) {
        flag = false
        if (div1Edit.innerHTML === '') {
            div1Edit.innerHTML = mensagem
        } 
        
    }else {
        div1Edit.innerHTML = ''

    }

    if (inputDataEditValue.length == 0) {
        flag = false
        
        if (div2Edit.innerHTML === '') {
            div2Edit.innerHTML = mensagem
        }

        }else {
            div2Edit.innerHTML = ''
            
    } 
    return flag
}

    
export {validandoForm}