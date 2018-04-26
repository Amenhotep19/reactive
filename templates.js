
let templateForA = function() {
    return `<p>Hello, I am a <i>data</i> prop. You can call me <strong>A</strong>: ${this.a}</p>`
  }
  
  let templateForB = function() {
    return `<p>Hello, I am a <i>computed</i> prop. You can call me <strong>B</strong> (A * 10): ${this.b}</p>`
  }
  
  let templateForC = function() {
    return `<p>Hello, I am a <i>data</i> prop. You can call me <strong>C</strong>: ${this.c}</p>`
  }
  
  let templateForD = function() {
    return `<p>Hello, I am a <i>computed</i> prop. You can call me <strong>D</strong> (B + 11): ${this.d}</p>`
  }
  
  
  let templateForF = function() {
    return `<p>Hello, I am a <i>nested data</i> prop. You can call me <strong>F</strong>(Length): ${this.e.f}</p>`
  }
  
  let templateForG = function() {
    return `<p>Hello, I am a <i>nested data</i> prop. You can call me <strong>G</strong>(Width): ${this.e.g}</p>`
  }
  
  let templateForH = function() {
    return `<p>Hello, I am a <i>nested computed</i> prop. You can call me <strong>H</strong>(Area): ${this.nestedComputed}</p>`
  }
  
  let templateAForComponentB = function() {
    return `<p>I'm a child component I have inherited my parent's property a: ${this.a1}</p>`
  }
  
  let templateBForComponentB = function() {
    return `<p>I'm a child component. This is my property B1: ${this.b1}</p>`
  }
  
  let templateForChildComponentPlaceholder = function() {
    return `<my-child-component data-a1="a"></my-child-component>`
  }

  export default {
      templateForA,
      templateForB,
      templateForC,
      templateForD,
      templateForF,
      templateForG,
      templateForH,
      templateAForComponentB,
      templateBForComponentB,
      templateForChildComponentPlaceholder
  }