const highlight = (className, el, timeout) => {
    el.classList.add(className)
    setTimeout(() => {
        el.classList.remove(className)
    }, timeout)
}

//only this guy should touch the DOM, kidding not
export const render = function (template, id, componentId) {
    let el = document.getElementById(id)
    if (!el) {
        let componentRoot = document.getElementById(componentId)
        el = document.createElement('div')
        el.id = id
        el.innerHTML = template.apply(this)
        componentRoot.appendChild(el)
        highlight('initProps', el, 1000)
    } else {
      el.innerHTML = template.apply(this)
      highlight('activeProps', el, 3000)
    }
}

