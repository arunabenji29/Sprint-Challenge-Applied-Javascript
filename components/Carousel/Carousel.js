class Carousel {
    constructor(carouselElement){
        this.carouselElement = carouselElement;

        //select right button from the carousel
        this.right = this.carouselElement.querySelector('.right-button');

        //select left button from the carousel
        this.left = this.carouselElement.querySelector('.left-button');

        //select all the images from the carousel
        this.images = this.carouselElement.querySelectorAll('img')
        
       //set currentIndex 
        this.currentIndex = 0;

        //set an image on the page initially
        this.images[this.currentIndex].style.display = "flex"

        //event listeners on the right and left button
        this.right.addEventListener('click', () => this.increment())
        this.left.addEventListener('click',() => this.decrement())
    }

    

    increment(){
        //increment the currentIndex after the right click
        this.currentIndex +=1;

        //query all images and set display to none
        const selectImages = document.querySelectorAll('img');
        selectImages.forEach(selectImage => selectImage.style.display = 'none')
        
        //if currentIndex exceeds the length of the images set the current index to 0
        if (this.currentIndex >= this.images.length){
            this.currentIndex = 0;
        }
        
        //set the display of the current image to flex
        this.images[this.currentIndex].style.display="flex"
        
        
        
    }

    decrement(){
        //decrement the currentIndex after the right click
        this.currentIndex--;

        //query all images and set display to none
        const selectImages = document.querySelectorAll('img');
        selectImages.forEach(selectImage => selectImage.style.display = 'none')
        
        //if currentIndex is less than 0, set the current index to the last image index
        if (this.currentIndex < 0){
            this.currentIndex = this.images.length-1;
        }

        //set the display of the current image to flex
        this.images[this.currentIndex].style.display="flex"
       
    }

}

let carousel = document.querySelector('.carousel');

new Carousel(carousel)

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/