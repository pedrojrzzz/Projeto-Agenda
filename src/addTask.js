function addTasks () {
    const titulo = document.querySelector('.titulo').value
    let dataHora = document.querySelector('.dataHora').value
    const local = document.querySelector('.local').value
    const anotacao = document.querySelector('.anotacao').value
  

    const dH = dataHora.replace('T', ' ')
    dataHora = dH.replace(/-/g, '/')


        criaElementos(titulo, dataHora, local, anotacao)
    
    
}

function criaElementos (titulo, dataHora, local, anotacao) {
    const recebedor = document.querySelector('.container-recebe-task')

    const div = document.createElement('div')
    const divAlteradores = document.createElement('div')
    div.classList.add('divCreateAuto')
    const _h3 = document.createElement('h3')
    const _dataHora = document.createElement('p')
    const _local = document.createElement('p')
    const _anotacao = document.createElement('p')
    const _removedor = document.createElement('p')
    const _editar = document.createElement('p')

    div.appendChild(divAlteradores)
    recebedor.appendChild(div)
    div.appendChild(_h3)
    div.appendChild(_dataHora)
    div.appendChild(_local)
    div.appendChild(_anotacao)
    div.insertAdjacentElement('beforeend', divAlteradores)
    divAlteradores.appendChild(_editar)
    divAlteradores.appendChild(_removedor)
    
    divAlteradores.insertAdjacentElement('beforeend',  _removedor)
    divAlteradores.insertAdjacentElement('beforeend',  _editar)
    divAlteradores.classList.add('divAlteradores')
    _h3.innerHTML = titulo
    _dataHora.innerHTML = '&#128198 ' + dataHora
    _local.innerHTML = '&#x1F4CC '+ local
    _anotacao.innerHTML = '&#128214 ' + anotacao

    _removedor.innerHTML = '&#128465;'; _removedor.classList.add('iconRemovedor')
    _editar.innerHTML = '&#128393;'; _editar.classList.add('iconEditar')
    
    // add icons na frente do local e anotacao caso haja algum valor
    if (!local.length === 0 || !anotacao.length === 0) {
        _local.innerHTML = '🗺️ ' + local
        _anotacao.innerHTML ='&#128221;' + anotacao
    }

}


export {addTasks}
export {criaElementos}
