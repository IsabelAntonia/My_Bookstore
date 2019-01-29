


var app = new Vue({
  el: '#app',
  data: {
    bookArray: {},
      userInput: '',
      filteredBooks: [],
      userInputNew: '',
      noResults: false
  },
    
    
    beforeCreate(){
        
        fetch('https://api.myjson.com/bins/8zpvs')
        .then(response => response.json())
        .then(data => {
            this.bookArray = data.books;
            
            this.displayBooks();
            this.box();
            
        })
   
             
        
    },
    
    methods: {
        
                box: function () {

            $('.swipebox').swipebox({
                useCSS: true, // false will force the use of jQuery for animations
                useSVG: true, // false to force the use of png for buttons
                initialIndexOnArray: 0, // which image index to init when a array is passed
                hideCloseButtonOnMobile: false, // true will hide the close button on mobile devices
                removeBarsOnMobile: true, // false will show top bar on mobile devices
                hideBarsDelay: 3000, // delay before hiding bars on desktop
                videoMaxWidth: 1140, // videos max width
                beforeOpen: function () {}, // called before opening
                afterOpen: null, // called after opening
                afterClose: function () {}, // called after closing
                loopAtEnd: false // true will return to the first image after the last image is reached
            });
        },
        
        
        displayBooks(){
            
            this.noResults = false;
            
            this.userInputNew = this.userInput.toUpperCase();
            
            this.filteredBooks = this.bookArray.filter(book => JSON.stringify(book).toUpperCase().includes(this.userInputNew))
            
            console.log(this.filteredBooks);
            
            
            if (this.filteredBooks.length === 0){
                this.noResults = true;
            }
            
            
        }
    }
    
    
    
    
    
    
    
})