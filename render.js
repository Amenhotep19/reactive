//only this guy should touch the DOM, kidding not
export const render = function (template, id, componentId) {
    let el = document.getElementById(id)
    if (!el) {
        let componentRoot = document.getElementById(componentId)
        el = document.createElement('div')
        el.id = id
        el.innerHTML = template.apply(this)
        componentRoot.appendChild(el)
    } else {
        el.innerHTML = template.apply(this)
        el.classList.add('activeProps')
        setTimeout(() => {
            el.classList.remove('activeProps')
        }, 3000)
    }
}