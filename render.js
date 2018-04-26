  //only this guy should touch the DOM, kidding not
  export const render = function(template, id) {
    document.getElementById(id).innerHTML = template.apply(this)
    document.getElementById(id).classList.add('activeProps')
    setTimeout(() => {
        document.getElementById(id).classList.remove('activeProps')
    }, 3000)
  }