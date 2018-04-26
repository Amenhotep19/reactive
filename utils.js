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
  
  export {traverseToProp}
 
  