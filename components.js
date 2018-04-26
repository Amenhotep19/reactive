//Component Definitions
import temp from './templates.js'
const childComponent = {
    name: 'childComponent',
    el: 'childComponent',
    props: ['a1'],
    data() {
      return {
        b1: 10
      }
    },
    templates: [{
        html: temp.templateAForComponentB,
        id: "child_a",
        prop: "a1"
      },
      {
        html: temp.templateBForComponentB,
        id: "child_b",
        prop: "b1"
      }
    ]
  }
  
  const componentOne = {
    name: 'componentOne',
    data() {
      return {
        a: 5,
        c: 'Hello there!!',
        e: {
          f: 5,
          g: 6
        }
      }
    },
    computed: {
      b: function() {
        return this.a * 10
      },
      d: function() {
        return this.b + 11
      },
      nestedComputed: function() {
        if (isNaN(this.e.f) || isNaN(this.e.g)) {
          return 0
        }
        return this.e.f * this.e.g
      }
    },
    el: 'componentOne',
    templates: [{
        html: temp.templateForA,
        id: "a",
        prop: "a"
      },
      {
        html: temp.templateForB,
        id: "b",
        prop: "b"
      },
      {
        html: temp.templateForC,
        id: "c",
        prop: "c"
      },
      {
        html: temp.templateForD,
        id: "d",
        prop: "d"
      },
      {
        html: temp.templateForF,
        id: "f",
        prop: "e.f"
      },
      {
        html: temp.templateForG,
        id: "g",
        prop: "e.g"
      },
      {
        html: temp.templateForH,
        id: "h",
        prop: "nestedComputed"
      }
    ],
    components: [{
      name: 'my-child-component',
      value: childComponent,
      template: temp.templateForChildComponentPlaceholder
    }]
  }

  export {childComponent, componentOne}