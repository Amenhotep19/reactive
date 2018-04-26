import {makeReactive} from './reactive/observer.js'
import {componentOne} from './components.js'
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

let myFirstReactiveComponent = makeReactive(componentOne)
console.log(myFirstReactiveComponent)
setTimeout(() => {
  myFirstReactiveComponent.c = "hello Chicago!!"
}, 2000)

