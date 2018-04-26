import { makeReactive } from './reactive/observer.js'
import { componentOne } from './components.js'
//Event handler for input changes
function setValForA(e) {
    let val = document.getElementById('inputA').value;
    if (!isNaN(val)) {
        myFirstReactiveComponent.a = val
    }
}
document.getElementById('inputA').onchange = setValForA

function setValForC(e) {
    let val = document.getElementById('inputC').value;
    myFirstReactiveComponent.c = val
}
document.getElementById('inputC').onchange = setValForC

function setValForF(e) {
    let val = document.getElementById('inputF').value;
    myFirstReactiveComponent.e.f = val
}
document.getElementById('inputF').onchange = setValForF

function setValForG(e) {
    let val = document.getElementById('inputG').value;
    myFirstReactiveComponent.e.g = val
}
document.getElementById('inputG').onchange = setValForG

function clearLogs(e) {
  let logs = document.getElementById('logs')
  while (logs.hasChildNodes()) {
    const lastLog = logs.lastChild
    if (lastLog.innerText == 'Dependency Tracker') {
        break;
    }
    logs.removeChild(logs.lastChild);
    }
  initLogs()
}
document.getElementById('clearLogs').onclick = clearLogs

function initLogs() {
    const noLogText = 'no logs...'
    let logs = document.getElementById('logs')
    let noLogs = document.getElementById('noLogs')
    if (!noLogs) {
      noLogs = document.createElement('p')
      noLogs.id = 'noLogs'
      noLogs.innerText = noLogText
      logs.appendChild(noLogs)
    } else {
      noLogs.innerText = noLogText
    }   
}
initLogs()
let myFirstReactiveComponent = makeReactive(componentOne)
console.log(myFirstReactiveComponent)
setTimeout(() => {
    myFirstReactiveComponent.c = "hello Chicago!!"
}, 2000)

