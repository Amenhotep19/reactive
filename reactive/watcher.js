import {globalWatcherCount} from '../globals.js'
//Watcher - attaches as an active dep target, fires the update callback
export const Watcher = function(name, cb, vm, ...args) {
    this.update = function() {
      cb.apply(vm, args)
    }
    this.id = globalWatcherCount++
    this.name = name
}