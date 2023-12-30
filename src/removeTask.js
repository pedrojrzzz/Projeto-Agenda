function removeTask(el) {

const removedor = el
const selectTask = removedor.closest('.divCreateAuto')
selectTask.remove()
}

export {removeTask}