  import {Dep} from './dep.js'
  import {Watcher} from './watcher.js'
  import {traverseToProp} from '../utils.js'

  //Fn to bind component's props to html template
  export const bindPropToTemplate = function(template, id, prop) {
    console.log("bindPropToTemplate:" + id + ":" + this[prop])
    Dep.target = new Watcher('Binding prop Watcher: ' + id, this.render, this, template, id)
    let val = typeof(this[prop]) === "function" ? this[prop].apply(this) : prop.indexOf('.') !== -1 ? traverseToProp(this, prop) : this[prop]
    Dep.target = null
  }