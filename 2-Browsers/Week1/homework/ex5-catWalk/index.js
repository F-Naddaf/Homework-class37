'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/2-Browsers/Week1#exercise-5-the-cat-walk
1. Create a variable to store a reference to the `<img>` element.
2. Change the style of the `<img>` to have a `left` of `0px`, so that it starts 
   at the left hand of the screen.
3. Complete the function called catWalk() to move the cat 10 pixels to the right
   of where it started, by changing the `left` style property.
4. Call that function every 50 milliseconds. Your cat should now be moving 
   across the screen from left to right. Hurrah!
5. When the cat reaches the right-hand of the screen, restart them at the left 
   hand side (`0px`). So they should keep walking from left to right across the 
   screen, forever and ever.
6. When the cat reaches the middle of the screen, replace the img with an image 
   of a cat dancing (use this URL given below), keep it dancing for 5 seconds, 
   and then replace the img with the original image and have it 
   continue the walk.
   Dancing cat URL:
   https://media1.tenor.com/images/2de63e950fb254920054f9bd081e8157/tenor.gif
-----------------------------------------------------------------------------*/


let catPosition = 0;
const image = document.querySelector('img');
image.style.left = catPosition
image.setAttribute('width', '200px');

// to be used when the cat at the middle of the screen. ------------
const catWidth = image.width;
const centerOfCatImage = catWidth / 2;

const screenWidth = window.innerWidth
const centerOfTheScreen = screenWidth / 2

const center = centerOfTheScreen - centerOfCatImage;

let interval = 50;
// -----------------------------------------------------------------

function catWalk() {
  if (catPosition < screenWidth) {
    image.src = 'http://www.anniemation.com/clip_art/images/cat-walk.gif'
    image.style.left = catPosition + 'px';
    catPosition += 10
    interval = 50;
  if (catPosition + centerOfCatImage === center) {
    image.src = 'https://media1.tenor.com/images/2de63e950fb254920054f9bd081e8157/tenor.gif'
    interval = 5000;
    setTimeout(() => {
      image.src = 'http://www.anniemation.com/clip_art/images/cat-walk.gif'
      interval = 50;
      }, 5000);
    }
  if (catPosition === screenWidth - catWidth) {
      catPosition = 0;
    }
  }
}

  const timer = window.setInterval(catWalk, 50);

  window.addEventListener('load', catWalk)




  