const app= Vue.createApp({
  // data, functions
  //template:  '<h2>I am the template<h2>'
data() {
  //object
  return{
    url:'http://www.book,co.nj',
    showBooks: true,
    books: [
      {title: 'name of the wind', author:'patrick rothfuss', img: 'img/chairman.jpg'},
{title: 'the way of kings', author:'brandon sanderson', img: 'img/chairman.jpg'},
{title: 'the final empire', author:'brandon sanderson', img: 'img/chairman.jpg'},

    ]
}
},

methods: {
  toggleShowBooks(){
    this.showBooks=!this.showbooks
  },
}

})

app.mount('#app')
