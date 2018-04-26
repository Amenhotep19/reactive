 import {globalDepTrackerCount} from '../globals.js'
 //Dependency Tracker, maintains a list of subscribers, and an active target (can only be one at any point in time)
const Dep = function(name) {
  this.subscribers = []
  this.depend = function(s) {
    if (this.subscribers.find(v => v.id === s.id) === undefined) {
      this.subscribers.push(s)
    } else {
      // console.log(s.id + ' has already subscribed for ' + this.id)
    }
  }
  this.notify = function() {
    this.subscribers.forEach((s) => {
      console.log(this.name + ' notifying ' + s.name)
      s.update()
    })
  }
  this.id = globalDepTrackerCount++
  this.name = name
}
Dep.target = null
export {Dep}
