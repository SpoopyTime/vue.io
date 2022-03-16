const app= Vue.createApp({
  // data, functions
  //template:  '<h2>I am the template<h2>'
data() {
  //object
  return{ title: 'The Final Empire',
  author: 'Brandon Sanderson',
  age: '45'
  x:0
  y:0
  }
},
methods: {
  toggleShowBook(){
    //thi.title="The Wizard of OZ"
    this.showBooks = !this.showBooks
  },
  handleEvent(e, data) {
    console.log('e.e.type')
    if(data) {
      console.log(data)
    }
  },
  handleMousemove(e){
    this.x = e.offsetX
    this.y = e.offseY
  }
}
})

//methods: {
  //changeTitle(abc) {
  //  this.title= abc
//  }
//}

app.mount('*#app')
