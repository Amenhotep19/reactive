//Traverse to the nested prop
const traverseToProp = (target, props) => {
    let _props = props.split('.')
    console.log(_props)
    let val = {}
    let o = target[_props[0]]
    for (let i = 1; i < _props.length; i++) {
      o = o[_props[i]]
    }
    return o
  }
 // Logger to log dependency notifications
  const logger = {
    info (msg) {
      let noLogs = document.getElementById('noLogs')
      if(noLogs && noLogs.innerText !== '') {
        noLogs.innerText = ''
      }
      let p = document.createElement('p')
      p.id = 'logText'
      p.innerText = msg
      document.getElementById('logs').appendChild(p)
    }
  }

  const addAndRemoveClass = (className, el, timeout) => {
    el.classList.add(className)
    setTimeout(() => {
        el.classList.remove(className)
    }, timeout)
}
  
  export {traverseToProp, logger, addAndRemoveClass}
 
  