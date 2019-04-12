class Carousel {
    constructor(carouselElement){
        this.carouselElement = carouselElement;
        // console.log(this.carouselElement);
        this.right = this.carouselElement.querySelector('.right-button');
        // console.log('right button' ,this.right)
        this.left = this.carouselElement.querySelector('.left-button');
        // console.log('left button' ,this.left)
        this.images = this.carouselElement.querySelectorAll('img')
        console.log('Images length',this.images.length)
        this.images.forEach(eachImage => console.log(eachImage))
        // console.log('all images',this.images)
        this.currentIndex = 0;
        this.images[this.currentIndex].style.display = "flex"
        this.right.addEventListener('click', () => this.increment())
        this.left.addEventListener('click',() => this.decrement())
    }

    

    increment(){
        // console.log('this works')
        this.currentIndex +=1;
        const selectImages = document.querySelectorAll('img');
        selectImages.forEach(selectImage => selectImage.style.display = 'none')
        
        if (this.currentIndex >= this.images.length){
            this.currentIndex = 0;
        }
        // console.log('currentindex' ,this.currentIndex)
        // console.log('current image',this.images[this.currentIndex])
        this.images[this.currentIndex].style.display="flex"
        
        
    }

    decrement(){
        // console.log('this works')
        this.currentIndex--;
        const selectImages = document.querySelectorAll('img');
        selectImages.forEach(selectImage => selectImage.style.display = 'none')
        if (this.currentIndex < 0){
            this.currentIndex = this.images.length-1;
        }

        // console.log('currentindex' ,this.currentIndex)
        // console.log('current image',this.images[this.currentIndex])
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