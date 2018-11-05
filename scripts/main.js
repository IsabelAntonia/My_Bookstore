// fetch 
// both vue and js
// create the template 
// in the template use vue 



var myVue = new Vue({
    el: '#implementVue',
    data: {
        bookarray: [],
        inputValue: '',
        filteredBooks: [],
        myWindow: {
            width: 0,
            height: 0
        },
        noResults: false,
        yourInput: ''
    },

    beforeCreate() {

        fetch("https://api.myjson.com/bins/8zpvs")
            .then(response => response.json())
            .then(realData => {

                this.bookarray = realData.books;
                //            this.printBooks(bookarray);
                this.box();
                this.searchFilter();
                        

            })

    },
    created()  {
                    window.addEventListener('resize', this.handleResize)
                    this.handleResize();
                
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

        searchFilter: function () {
            this.noResults = false;
            this.yourInput = this.inputValue.toUpperCase();
            this.filteredBooks = this.bookarray.filter((book) => {
                return JSON.stringify(book).toUpperCase().includes(this.yourInput)>0
            })
            
       if (this.filteredBooks.length == 0){
           this.noResults = true;
           
       }

           },
            
//            console.log(this.filteredBooks);   

          


        
        handleResize: function () {
                            this.myWindow.width = window.innerWidth;
                            this.myWindow.height = window.innerHeight;
                        }


    }
})









// in plain js

//var bookarray;
//
//onload = (function () {
//
//    fetch("https://api.myjson.com/bins/8zpvs")
//        .then(response => response.json())
//        .then(realData => {
//        
//        bookarray = realData.books;
//            printBooks(bookarray)
//        })
//})
//
//// in Vue 
//
////var app = new Vue({
////  el: '#here',
////  data: {
////    message: 'Hello Vue!'
////  }
////})
//
//function printBooks(data){
//    var template="";
//    
//    data.forEach(book => {
//                template += ` <div class="flip-container" ontouchstart="this.classList.toggle('hover');">
//                                <div class="flipper">
//
//                                    <div class="front">
//                                        <img id="img" src="${book.cover}">
//                                    </div>
//
//                                    <div class="back p-4">
//                                        <h3>${book.title}</h3>
//                                        <p>${book.description}</p>
//
//                                    <a href=${book.detail} class="swipebox">
//                                        <button class="btn btn-info">More Info</button>
//                                    </a>
//                                    </div>
//                                </div>
//                            </div>`
//    })
//    document.querySelector("#here").innerHTML = template;
//    box();
//    
///*    console.log($("a.images"));
//    $("a.images").fancybox({
//		'transitionIn'	:	'elastic',
//		'transitionOut'	:	'elastic',
//		'speedIn'		:	600, 
//		'speedOut'		:	200, 
//		'overlayShow'	:	false
//	});*/
//}
//
//function box() {
//
//        $( '.swipebox' ).swipebox( {
//            useCSS : true, // false will force the use of jQuery for animations
//            useSVG : true, // false to force the use of png for buttons
//            initialIndexOnArray : 0, // which image index to init when a array is passed
//            hideCloseButtonOnMobile : false, // true will hide the close button on mobile devices
//            removeBarsOnMobile : true, // false will show top bar on mobile devices
//            hideBarsDelay : 3000, // delay before hiding bars on desktop
//            videoMaxWidth : 1140, // videos max width
//            beforeOpen: function() {}, // called before opening
//            afterOpen: null, // called after opening
//            afterClose: function() {}, // called after closing
//            loopAtEnd: false // true will return to the first image after the last image is reached
//        } );
//};
//
//function searchFilter(){
//   input = document.getElementById('here');
//   filter = document.getElementById("quicksearch").value.toUpperCase();
////   console.log(filter);
//
//   let filteredBooks = bookarray.filter((book)=>{return JSON.stringify(book).toUpperCase().includes(filter) >0})
//
//   printBooks(filteredBooks)
//
//
//}
