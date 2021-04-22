const allImages = document.querySelectorAll('.small-images-wrapper img');
const slideImage = document.querySelector('.slide');
for (let i = 0; i < allImages.length; i++) {
    allImages[i].addEventListener("click", function() {
        // console.log(allImages[i])
        for (let j = 0; j < allImages.length; j++) {
            allImages[j].classList.remove('selected');
        }
        this.classList.add('selected');
        slideImage.src = this.src;
    })
}