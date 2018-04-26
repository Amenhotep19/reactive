
import { Dep } from './dep.js'
import { Watcher } from './watcher.js'
import { bindPropToTemplate } from './bindProp.js'
import { render } from '../render.js'

const initData = function (obj, reactive, nested) {
  if (typeof obj !== 'object') {
    return obj
  }
  let wrapper = {}

  for (let prop in obj) {
    let val = obj[prop]
    if (typeof obj[prop] === "object") {
      val = initData(obj[prop], reactive, true)
    }
    let dep = new Dep(prop)
    Object.defineProperty(nested ? wrapper : reactive, prop, {
      get: function () {
        if (Dep.target) {
          dep.depend(Dep.target)
        }
        return val
      },
      set: function (newVal) {
        val = initData(newVal, reactive)
        dep.notify()
      }
    })
  }
  return nested ? wrapper : reactive
}

const makeReactive = function (vm, propValueHash, parent) {
  const computed = vm.computed
  const templates = vm.templates
  const props = vm.props || []
  const components = vm.components || []
  const data = (vm.data && vm.data()) || {}
  let reactive = {}

  reactive.render = render
  reactive.bindPropToTemplate = bindPropToTemplate
  reactive.name = vm.name
  reactive.el = vm.el
  
  initData(data, reactive)

  initComputed(reactive, computed)

  initProps(reactive, props, propValueHash, parent)

  initTemplates(reactive, templates)

  initComponents(reactive, components)

  return reactive
}

function initComputed(reactive, computed) {
  let computedWatchers = {}
  let computedDeps = {}

  //Reactive computed props
  for (let prop in computed) {
    let cachedValue = null
    //Computed properties gets their own watchers which recompute the fn and notify its dependents
    computedWatchers[prop] = new Watcher('Computed watcher prop: ' + prop, function () {
      cachedValue = computed[prop].apply(reactive)
      computedDeps[prop].notify()
    }, null)

    Dep.target = computedWatchers[prop]
    cachedValue = computed[prop].apply(reactive)
    Dep.target = null

    computedDeps[prop] = new Dep(prop)
    Object.defineProperty(reactive, prop, {
      get: function () {
        if (Dep.target) {
          computedDeps[prop].depend(Dep.target)
          Dep.target = null
        }
        return cachedValue
      }
    })
  }
}

function initProps(reactive, props, propValueHash, parent) {
  for (let prop of props) {
    let dep = new Dep(prop)
    Object.defineProperty(reactive, prop, {
      get: function () {
        if (Dep.target) {
          dep.depend(Dep.target)
        }
        return parent[propValueHash[prop]]
      }
    })
  }
}

function initTemplates(reactive, templates) {
  for (let template of templates) {
    reactive.bindPropToTemplate(template.html, template.id, template.prop)
    reactive.render(template.html, template.id, reactive.el)
  }
}

function initComponents(reactive, components) {
  for (let component of components) {
    let template = component.template()
    let name = component.name
    let value = component.value
    let childTemplates = value.templates
    if (template.indexOf(name) === -1) {
      console.warn(`${name} not defined in the template`)
      break
    } else {
      let attrs = template.split('</' + name + '>')[0].split('data-')
      let propValueHash = {}
      for (let attr of attrs) {
        if (attr.indexOf('=') !== -1) {
          let kvp = attr.split('=')
          propValueHash[kvp[0]] = kvp[1].split('"')[1]
        }
      }
      console.log('propValueHash:' + JSON.stringify(propValueHash))
      makeReactive(value, propValueHash, reactive)
    }
  }
}

export { makeReactive }

