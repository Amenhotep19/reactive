 import {globalDepTrackerCount} from '../globals.js'
 import {logger} from '../utils.js'
 //Dependency Tracker, maintains a list of subscribers, and an active target (can only be one at any point in time)
const Dep = function(name) {
  this.subscribers = new Set()
  this.depend = function(s) {
      this.subscribers.add(s)
  }
  this.notify = function() {
    for (let s of this.subscribers){
      logger.info(this.name + ' notifying ' + s.name)
      s.update()
    }
  }
  this.id = globalDepTrackerCount++
  this.name = name
}
Dep.target = null
export {Dep}
